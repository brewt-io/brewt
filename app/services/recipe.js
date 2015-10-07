angular.module('brewt').factory('Recp', function RecpFactory(){
    var recipe = new Recipe(new Equipment("5 Gal Igloo Cooler", 20), new Style);

    return recipe;
});