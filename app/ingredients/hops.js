angular.module('brewt').directive('libraryHops', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/ingredients/hops.html',
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
                                //amount: parseFloat(res.HOPS[i].AMOUNT),
                                amount: 0.05,
                                use: res.HOPS[i].USE,
                                //time: parseFloat(res.HOPS[i].TIME),
                                time: 60,
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
