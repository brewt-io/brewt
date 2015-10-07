angular.module('brewt').directive('libraryYeasts', function(){
    return {
        restrict: 'E',
        scope: {
            activeLib:"="
        },
        templateUrl: 'app/ingredients/yeasts.html',
        controller: function($scope, $http, Recp){

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
                Recp.yeast = newYeast;
            };

            this.lib = this.load();

        },
        controllerAs:'yeastsCtrl'
    }
});
