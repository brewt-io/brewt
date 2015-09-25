angular.module("brewt").directive('recipeYeast', function() {
    return {
        restrict: 'E',
        scope:{
            recipeYeast:"="
        },
        templateUrl: 'app/recipe/yeast.html',
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