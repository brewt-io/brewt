angular.module('brewt').directive('libraryFermentables', function(){
    return {
        restrict: 'E',
        scope: {
            activeLib:"=",
            recipeFermentables:"="
        },
        templateUrl: 'templates/ingredients/fermentables.html',
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

            this.lib = this.load();


        },
        controllerAs:'fermCtrl'
    }
});
