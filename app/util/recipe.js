function Recipe(equipment, style){
    this.grains = [];
    this.hops =  [];
    this.miscs =  [];
    this.yeast = undefined;
    this.efficieny = 0.75;
    this.equipment = equipment;
    this.style = style;
}

Recipe.prototype.calculateOrignalGravity = function(){
    var totalPoints = 0;
    for (var i=0; i<this.grains.length; i++){
        totalPoints += this.grains[i].amount * this.grains[i].ppg * this.efficieny;
    }
    return totalPoints/this.equipment.boilSize/1000 + 1;
};

Recipe.prototype.calculateFinalGravity = function(){
    var og = this.calculateOrignalGravity();
    if (this.yeast ===  undefined)
    {
        return og;
    }
    return ((og - 1)*(1-this.yeast.attenuation/100.0)) + 1;
};


Recipe.prototype.calculateABV = function(){
    var fg = this.calculateFinalGravity();
    var og = this.calculateOrignalGravity();
    if (fg >= og){
        return 0;
    }

    return abv =(76.08 * (og - fg) / (1.775-og)) * (fg / 0.794);
};

Recipe.prototype.calculateColor = function(){

    var totalMCU = 0;
    for (var i=0; i<this.grains.length; i++){
        totalMCU += lovibondToSRM(this.grains[i].color) * this.grains[i].amount*2.2;
    }
    totalMCU /= this.equipment.batchSize;

    // apply Morey's equation
    //totalMCU = 1.4922 * Math.pow(totalMCU, 0.6859);

    return totalMCU;
};

Recipe.prototype.calculateBitterness = function(){
    var og = this.calculateOrignalGravity();
    var totalIBU = 0;
    for (var i=0; i<this.hops.length; i++){
        var correctedGravity = 1 + (og-1.050)/2.0;
        var utilizationFactor = utilization(og, this.hops[i].time);
        totalIBU += this.hops[i].amount*1000 * utilizationFactor * this.hops[i].alpha/100 *1000/(this.equipment.boilSize*correctedGravity);
    }
    return totalIBU;
};