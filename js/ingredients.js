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

console.log(grains);
console.log(hops);
console.log(yeast);