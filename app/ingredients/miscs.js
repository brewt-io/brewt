angular.module('brewt').directive('libraryMiscs', function(){
    return {
        restrict: 'E',
        scope: {
            activeLib:"=",
            recipeMiscs:"="
        },
        templateUrl: 'app/ingredients/miscs.html',
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
                                //amount: parseFloat(res.MISCS[i].AMOUNT),
                                amount: 1,
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
