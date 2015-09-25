(function (){
    var app = angular.module('brewt', []);


    app.controller('RecipeController', function($scope){
        $scope.activeLibrary = 0;
        $scope.recipeFermentables = [];
        $scope.recipeHops = [];
        $scope.recipeYeast = false;
        $scope.recipeMiscs = [];

    });

    app.directive('libraryFermentables', function(){
        return {
            restrict: 'E',
            scope: {
                activeLib:"=",
                recipeFermentables:"="
            },
            templateUrl: 'templates/library-fermentables.html',
            controller: function($scope, $http){
                this.active = function(){
                    console.log($scope.activeLib);
                    return $scope.activeLib == 1;
                };

                this.toggleActive = function(){
                    if ($scope.activeLib == 1){
                        $scope.activeLib = 0;
                    }else{
                        $scope.activeLib = 1;
                    }
                };

                this.load = function(){
                    fermentables = [];
                    $http.get("data/fermentables.json").
                        success(function(res){
                            for (var i = 0; i < res.FERMENTABLES.length; i++){
                                var ferm = {
                                    name: res.FERMENTABLES[i].NAME,
                                    version: parseInt(res.FERMENTABLES[i].VERSION),
                                    type: res.FERMENTABLES[i].TYPE,
                                    amount: parseFloat(res.FERMENTABLES[i].AMOUNT),
                                    yieldPer: parseFloat(res.FERMENTABLES[i].YIELD),
                                    color: parseFloat(res.FERMENTABLES[i].COLOR),
                                    addAfterBoil: "TRUE" == res.FERMENTABLES[i].ADD_AFTER_BOIL,
                                    origin: res.FERMENTABLES[i].ORIGIN,
                                    supplier: res.FERMENTABLES[i].SUPPLIER,
                                    notes: res.FERMENTABLES[i].NOTES,
                                    coarseFineDiff: parseFloat(res.FERMENTABLES[i].COARSE_FINE_DIFF),
                                    moisture: parseFloat(res.FERMENTABLES[i].MOISTURE),
                                    diastaticPower: parseFloat(res.FERMENTABLES[i].DIASTATIC_POWER),
                                    protein: parseFloat(res.FERMENTABLES[i].PROTEIN),
                                    maxInBatch: parseFloat(res.FERMENTABLES[i].MAX_IN_BATCH),
                                    recommendedMash: "TRUE" == res.FERMENTABLES[i].RECOMMEND_MASH,
                                    ibuGalPerLb: parseFloat(res.FERMENTABLES[i].IBU_GAL_PER_LB),
                                    inventory: parseFloat(res.FERMENTABLES[i].INVENTORY),
                                    potential: parseFloat(res.FERMENTABLES[i].POTENTIAL),
                                    displayAmount: res.FERMENTABLES[i].DISPLAY_AMOUNT,
                                    displayColor: res.FERMENTABLES[i].DISPLAY_COLOR
                                };
                                fermentables.push(ferm);
                            }
                        }).
                        error(function(msg){
                            console.log(msg);
                        });

                    return fermentables;
                };

                this.addFermentable = function(i){
                    var fermentable = this.lib[i];
                    fermentable.timeCreated = Date.now();
                    $scope.recipeFermentables.push(fermentable);
                };

                //this.lib = [
                //    {name:"test1"},
                //    {name:"test2"},
                //    {name:"test3"}
                //];

                this.lib = this.load();


            },
            controllerAs:'fermCtrl'
        }
    });

    app.directive('libraryHops', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/library-hops.html',
            scope: {
                activeLib:"=",
                recipeHops:"="
            },
            controller: function($scope, $http){

                this.active = function(){
                    return $scope.activeLib == 3;
                };

                this.toggleActive = function(){
                    if ($scope.activeLib == 3){
                        $scope.activeLib = 0;
                    }else{
                        $scope.activeLib = 3;
                    }
                };

                this.load = function(){
                    hops = [];
                    $http.get("data/hops.json").
                        success(function(res){
                            for (var i = 0; i < res.HOPS.length; i++){
                                var s = {
                                    name: res.HOPS[i].NAME,
                                    version: parseInt(res.HOPS[i].VERSION),
                                    origin: res.HOPS[i].ORIGIN,
                                    alpha: parseFloat(res.HOPS[i].ALPHA),
                                    amount: parseFloat(res.HOPS[i].AMOUNT),
                                    use: res.HOPS[i].USE,
                                    time: parseFloat(res.HOPS[i].TIME),
                                    notes: res.HOPS[i].NOTES,
                                    type: res.HOPS[i].TYPE,
                                    form: res.HOPS[i].FORM,
                                    beta: parseFloat(res.HOPS[i].BETA),
                                    hsi: parseFloat(res.HOPS[i].HSI),
                                    inventory: parseFloat(res.HOPS[i].INVENTORY)
                                };
                                hops.push(s);
                            }
                        }).
                        error(function(msg){
                            console.log(msg);
                        });
                    return hops;
                };

                this.addHop = function(i){
                    $scope.recipeHops.push(this.lib[i]);
                };

                this.lib = this.load();

            },
            controllerAs:'hopsCtrl'
        }
    });

    app.directive('libraryYeasts', function(){
        return {
            restrict: 'E',
            scope: {
                activeLib:"=",
                recipeYeast:"="
            },
            templateUrl: 'templates/library-yeasts.html',
            controller: function($scope, $http){

                this.active = function(){
                    return $scope.activeLib == 2;
                };

                this.toggleActive = function(){
                    if ($scope.activeLib == 2){
                        $scope.activeLib = 0;
                    }else{
                        $scope.activeLib = 2;
                    }
                };



                this.load = function(){
                    yeasts = [];
                    $http.get("data/yeasts.json").
                        success(function(res){
                            for (var i = 0; i < res.YEASTS.length; i++){
                                var s = {
                                    name: res.YEASTS[i].NAME,
                                    version: parseInt(res.YEASTS[i].VERSION),
                                    type: res.YEASTS[i].TYPE,
                                    form: res.YEASTS[i].FORM,
                                    amount: parseFloat(res.YEASTS[i].AMOUNT),
                                    amountIsWeight: "TRUE"==res.YEASTS[i].AMOUNT_IS_WEIGHT,
                                    laboratory: res.YEASTS[i].LABORATORY,
                                    productId: res.YEASTS[i].PRODUCT_ID,
                                    minTemp: parseFloat(res.YEASTS[i].MIN_TEMPERATURE),
                                    maxTemp: parseFloat(res.YEASTS[i].MAX_TEMPERATURE),
                                    flocculation: res.YEASTS[i].FLOCCULATION,
                                    attenuation: parseFloat(res.YEASTS[i].ATTENUATION),
                                    notes: res.YEASTS[i].NOTES,
                                    bestFor: res.YEASTS[i].BEST_FOR,
                                    maxReuse: parseInt(res.YEASTS[i].MAX_REUSE),
                                    timesCultured: parseInt(res.YEASTS[i].TIMES_CULTURED),
                                    addToSecondary: "TRUE"==res.YEASTS[i].ADD_TO_SECONDARY,
                                    inventory: res.YEASTS[i].INVENTORY,
                                    cultureDate: res.YEASTS[i].CULTURE_DATE

                                };
                                yeasts.push(s);
                            }
                        }).
                        error(function(msg){
                            console.log(msg);
                        });
                    return yeasts;
                };

                this.setYeast = function(i){
                    newYeast = this.lib[i];
                    newYeast.timeCreated = Date.now();
                    $scope.recipeYeast = newYeast;
                };

                this.lib = this.load();

            },
            controllerAs:'yeastsCtrl'
        }
    });

    app.directive('libraryMiscs', function($http){
        return {
            restrict: 'E',
            scope: {
                activeLib:"=",
                recipeMiscs:"="
            },
            templateUrl: 'templates/library-miscs.html',
            controller: function($scope, $http){
                this.active = function(){
                    return $scope.activeLib == 4;
                };

                this.toggleActive = function(){
                    if ($scope.activeLib == 4){
                        $scope.activeLib = 0;
                    }else{
                        $scope.activeLib = 4;
                    }
                };

                this.load = function(){
                    miscs = [];
                    $http.get("data/misc.json").
                        success(function(res){
                            for (var i = 0; i < res.MISCS.length; i++){
                                var s = {
                                    name: res.MISCS[i].NAME,
                                    version: parseInt(res.MISCS[i].VERSION),
                                    type: res.MISCS[i].TYPE,
                                    use: res.MISCS[i].USE,
                                    amount: parseFloat(res.MISCS[i].AMOUNT),
                                    time: parseFloat(res.MISCS[i].TIME),
                                    amountIsWeight: "TRUE" == res.MISCS[i].AMOUNT_IS_WEIGHT,
                                    useFor: res.MISCS[i].USE_FOR,
                                    notes: res.MISCS[i].NOTES,
                                    inventory: parseFloat(res.MISCS[i].INVENTORY)
                                };
                                miscs.push(s);
                            }
                        }).
                        error(function(msg){
                            console.log(msg);
                        });
                    return miscs;

                };

                this.addMisc = function(i){
                    $scope.recipeMiscs.push(this.lib[i]);
                };

                this.lib = this.load();
            },
            controllerAs:'miscsCtrl'
        }
    });

    app.directive('recipeStyle', function($http) {
        return {
            restrict: 'E',
            templateUrl:'templates/recipe-style.html',
            controller: function(){
                var activeStyle = 0;
                this.selectActive = false;


                this.getSelected = function(){
                    return this.list[activeStyle];
                };

                this.toggleActive = function(){
                    this.selectActive = !this.selectActive;
                };

                this.select = function(i){
                    activeStyle = i;
                    this.toggleActive();
                };
                this.load = function(){
                    styles = [];
                    $http.get("data/styles.json").
                        success(function(res){
                            for (var i = 0; i < res.STYLES.length; i++){
                                var s = {
                                    name: res.STYLES[i].NAME,
                                    version: parseInt(res.STYLES[i].VERSION),
                                    category: res.STYLES[i].CATEGORY,
                                    categoryNumber: parseInt(res.STYLES[i].CATEGORY_NUMBER),
                                    styleLetter: res.STYLES[i].STYLE_LETTER,
                                    styleGuide: res.STYLES[i].STYLE_GUIDE,
                                    type: res.STYLES[i].TYPE,
                                    notes: res.STYLES[i].NOTES,
                                    profile: res.STYLES[i].PROFILE,
                                    ingredients: res.STYLES[i].INGREDIENTS,
                                    examples: res.STYLES[i].EXAMPLES,

                                    ogMin: parseFloat(res.STYLES[i].OG_MIN),
                                    ogMax: parseFloat(res.STYLES[i].OG_MAX),
                                    fgMin: parseFloat(res.STYLES[i].FG_MIN),
                                    fgMax: parseFloat(res.STYLES[i].FG_MAX),
                                    ibuMin: parseFloat(res.STYLES[i].IBU_MIN),
                                    ibuMax: parseFloat(res.STYLES[i].IBU_MAX),
                                    colorMin: parseFloat(res.STYLES[i].COLOR_MIN),
                                    colorMax: parseFloat(res.STYLES[i].COLOR_MAX),
                                    carbMin: parseFloat(res.STYLES[i].CARB_MIN),
                                    carbMax: parseFloat(res.STYLES[i].CARB_MAX),
                                    abvMin: parseFloat(res.STYLES[i].ABV_MIN),
                                    abvMax: parseFloat(res.STYLES[i].ABV_MAX)
                                };
                                styles.push(s);
                            }
                        }).
                        error(function(msg){
                            console.log(msg);
                        });
                    return styles;
                };

                this.list = this.load();


            },
            controllerAs:'styleCtrl'
        };
    });

    app.directive('recipeFermentables', function() {
        return {
            restrict: 'E',
            scope: {
                recipeFermentables:"="
            },
            templateUrl:'templates/recipe-fermentables.html',
            controller: function($scope){
                this.getFermentables = function(){
                    return $scope.recipeFermentables;
                };
                this.remove = function(i){
                    $scope.recipeFermentables.splice(i,1);
                }


            },
            controllerAs:'fermCtrl'
        };
    });

    app.directive('recipeHops', function() {
        return {
            restrict: 'E',
            scope:{
              recipeHops:"="
            },
            templateUrl: 'templates/recipe-hops.html',
            controller: function($scope){
                this.getHops = function(){
                    return $scope.recipeHops;
                };
                this.remove = function(i){
                    $scope.recipeHops.splice(i,1);
                }
            },
            controllerAs:'hopsCtrl'
        };
    });

    app.directive('recipeYeast', function() {
        return {
            restrict: 'E',
            scope:{
                recipeYeast:"="
            },
            templateUrl: 'templates/recipe-yeast.html',
            controller: function($scope){
                this.getYeast = function(){
                    return $scope.recipeYeast;
                };
                this.remove = function(){
                    $scope.recipeYeast = false;
                }
            },
            controllerAs: 'yeastCtrl'
        };
    });

    app.directive('recipeMiscs', function() {
        return {
            restrict: 'E',
            scope:{
                recipeMiscs:"="
            },
            templateUrl: 'templates/recipe-miscs.html',
            controller:function($scope){
                this.getMiscs = function(){
                    return $scope.recipeMiscs;
                };
                this.remove = function(i){
                    $scope.recipeMiscs.splice(i,1);
                }
            },
            controllerAs:'miscsCtrl'

        };

    });

})();
