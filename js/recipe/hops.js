angular.module("brewt").directive('recipeHops', function() {
    return {
        restrict: 'E',
        scope:{
          recipeHops:"="
        },
        templateUrl: 'templates/recipe/hops.html',
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
