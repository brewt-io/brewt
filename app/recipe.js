function Recipe(equipment, style){
    this.grains = [];
    this.hops =  [];
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
    this.originalGravity = totalPoints/this.equipment.boilSize/1000 + 1;
    return this.originalGravity;
};

Recipe.prototype.calculateFinalGravity = function(){
    this.finalGravity = ((this.originalGravity  - 1)*(1-this.yeast.attenuation)) + 1;
    return this.finalGravity;
};


Recipe.prototype.calculateABV = function(){

    var abv =(76.08 * (this.originalGravity - this.finalGravity) / (1.775-this.originalGravity)) * (this.finalGravity / 0.794);

    this.abv = abv;
    return this.abv;
};

Recipe.prototype.calculateColor = function(){

    var totalMCU = 0;
    for (var i=0; i<this.grains.length; i++){
        totalMCU += lovibondToSRM(this.grains[i].color) * this.grains[i].amount*2.2;
    }
    totalMCU /= this.volume;

    // apply Morey's equation
    //totalMCU = 1.4922 * Math.pow(totalMCU, 0.6859);

    this.color = totalMCU;
    return this.color;
};

Recipe.prototype.calculateBitterness = function(){

    var totalIBU = 0;
    for (var i=0; i<this.hops.length; i++){
        var correctedGravity = 1 + (this.originalGravity-1.050)/2.0;
        var utilizationFactor = utilization(this.originalGravity, this.hops[i].time);
        totalIBU += this.hops[i].amount*1000 * utilizationFactor * this.hops[i].alphaAcids/100 *1000/(this.equipment.boilSize*correctedGravity);
    }
    this.bitterness = totalIBU;
    return this.bitterness;
};


//r = new Recipe();
//r.grains.push(new Fermentable('Pale Malt (2 Row) UK', 0.78, 2.5, 2.267960));
//r.grains.push(new Fermentable('Barley, Flaked', 0.70, 1.7, 0.907184));
//r.grains.push(new Fermentable('Black Barley (Stout)', 0.55, 500, 0.453592));
e = new Equipment('Brew Pot and 5 Gal Cooler', 20);
s = new Style('English Pale Ale', 1.043, 1.060, 1.010, 1.020, 20, 40, 6, 12);
r = new Recipe(e, s);

r.grains.push(new Fermentable('Wheat', 0.78, 2.5, 2.267960));
r.grains.push(new Fermentable('Honey', 0.70, 1.7, 0.907184));
r.grains.push(new Fermentable('Two-Row', 0.55, 500, 0.453592));
r.yeast = new Yeast("Irish Ale",.73);
r.hops.push(new Hops('Goldings, East Kent', 5.00, 0.0637860, 60));

console.log(r);
console.log("Original Gravity: " + r.calculateOrignalGravity().toFixed(3));
console.log("Final Gravity:    " + r.calculateFinalGravity().toFixed(3));
console.log("ABV:              " + r.calculateABV().toFixed(1) + "%");
console.log("Color:            " + r.calculateColor().toFixed(0) + " (SRM)");
console.log("Bitterness:       " + r.calculateBitterness().toFixed(0) + " (IBU)");