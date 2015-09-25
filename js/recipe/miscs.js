angular.module("brewt").directive('recipeMiscs', function() {
    return {
        restrict: 'E',
        scope:{
            recipeMiscs:"="
        },
        templateUrl: 'templates/recipe/miscs.html',
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