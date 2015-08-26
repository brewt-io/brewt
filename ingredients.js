
function Ingredient(name){
    this.name = name;
}

function Grain(name, yieldPer, color, amount){
    Ingredient.call(this, name);
    this.yieldPer = yieldPer;
    this.color = color;
    this.amount = amount;
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

g = new Grain("Pale 2-Row (US)", 0.80, 1.8, 10);
h = new Hops("Cascade", .068, 2, 60);
y = new Yeast("San Diego Super Yeast", 0.795);

console.log(g);
console.log(h);
console.log(y);