// NOTES:
//
//----------------------------------------------------------
// Units: (following the Beer.XML standard)
//      mass: kilograms
//      volume: liters
//      temperature: celsius
//      time: minutes
//      specific gravity: relative (eg. 1.035)
//      pressure: kilopascals
//      color: SRM

function Ingredient(name){
    this.name = name;
}

function Grain(name, yieldPer, color, amount){
    Ingredient.call(this, name);
    this.yieldPer = yieldPer; // fractional (eg. 0.78)
    this.color = color; // lovibond
    this.amount = amount; // kg
    this.ppg = yieldPer*39.604226*8.3454; //points per kg per L
}

function Hops(name, alphaAcids, amount, time){
    Ingredient.call(this, name);
    this.alphaAcids = alphaAcids;
    this.amount = amount;
    this.time = time;
}

function Yeast(name, attenuation){
    Ingredient.call(this, name);
    this.attenuation = attenuation;
}

Grain.prototype = Object.create(Ingredient.prototype);
Hops.prototype = Object.create(Ingredient.prototype);
Yeast.prototype = Object.create(Ingredient.prototype);

grains = [
    new Grain("Pale 2-Row (US)", 0.79, 2.0),
    new Grain("Munich (UK)", 0.80, 9.0),
    new Grain("Crystal 60L", 0.74, 60.0),
    new Grain("Carared", 0.75, 20.0),
    new Grain("Wheat Malt", 0.84, 2.0)
];

hops = [
    new Hops("Cascade", .06),
    new Hops("Amarillo", .095),
    new Hops("Fuggles", .045),
    new Hops("Hallertau", .045),
    new Hops("Warrior", 0.155)
];

yeast = [
    new Yeast("California Ale Yeast", .75),
    new Yeast("English Ale Yeast", 0.66),
    new Yeast("Kolsch", .75),
    new Yeast("Belgian Strong Ale", .76),
    new Yeast("San Diego Super Yeast", .80)
];

//console.log(grains);
//console.log(hops);
//console.log(yeast);

function Recipe(){
    this.grains = [];
    this.hops =  [];
    this.yeast = undefined;
    this.efficieny = 0.75;
    this.volume = 18.9271; // 5 gallons
}

Recipe.prototype.calculateOrignalGravity = function(){
    var totalPoints = 0;
    for (var i=0; i<this.grains.length; i++){
        totalPoints += this.grains[i].amount * this.grains[i].ppg * this.efficieny;
    }
    this.originalGravity = totalPoints/this.volume/1000 + 1;
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

function lovibondToSRM(l){
    return (1.3546 *l) - 0.76;
}
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

function utilization(gravity, minutes){
    return (1.65 * Math.pow(0.000125, (gravity - 1))) * (1 - Math.exp(-0.04 * minutes) ) / 4.14;
}

Recipe.prototype.calculateBitterness = function(){

    var totalIBU = 0;
    for (var i=0; i<this.hops.length; i++){
        var correctedGravity = 1 + (this.originalGravity-1.050)/2.0;
        var utilizationFactor = utilization(this.originalGravity, this.hops[i].time);
        totalIBU += this.hops[i].amount*1000 * utilizationFactor * this.hops[i].alphaAcids/100 *1000/(this.volume*correctedGravity);
    }
    this.bitterness = totalIBU;
    return this.bitterness;
};

//r = new Recipe();
//r.grains.push(new Grain('Pale Malt (2 Row) UK', 0.78, 2.5, 2.267960));
//r.grains.push(new Grain('Barley, Flaked', 0.70, 1.7, 0.907184));
//r.grains.push(new Grain('Black Barley (Stout)', 0.55, 500, 0.453592));

r = new Recipe();
r.grains.push(new Grain('Wheat', 0.78, 2.5, 2.267960));
r.grains.push(new Grain('Honey', 0.70, 1.7, 0.907184));
r.grains.push(new Grain('Two-Row', 0.55, 500, 0.453592));
r.yeast = new Yeast("Irish Ale",.73);
r.hops.push(new Hops('Goldings, East Kent', 5.00, 0.0637860, 60));

//console.log(r);
console.log("Original Gravity: " + r.calculateOrignalGravity().toFixed(3));
console.log("Final Gravity:    " + r.calculateFinalGravity().toFixed(3));
console.log("ABV:              " + r.calculateABV().toFixed(1) + "%");
console.log("Color:            " + r.calculateColor().toFixed(0) + " (SRM)");
console.log("Bitterness:       " + r.calculateBitterness().toFixed(0) + " (IBU)");


$(document).ready( function(){
    fermentablesList = $("#fermentables-list-content").find("> ul");
    yeastList = $("#yeast-list-content").find("> ul");
    hopsList = $("#hops-list-content").find("> ul");
    var i;
    for (i = 0; i<grains.length; i++){
        fermentablesList.append('<li>' + grains[i].name + '</li>');
    }

    for (i = 0; i<hops.length; i++){
        hopsList.append('<li>' + hops[i].name + '</li>');
    }

    for (i = 0; i<yeast.length; i++){
        yeastList.append('<li>' + yeast[i].name + '</li>');
    }

});
