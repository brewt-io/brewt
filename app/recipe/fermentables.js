angular.module("brewt").directive('recipeFermentables', function() {
    return {
        restrict: 'E',
        scope: {
            recipeFermentables:"="
        },
        templateUrl:'app/recipe/fermentables.html',
        controller: function($scope){
            this.getFermentables = function(){
                return $scope.recipeFermentables;
            };
            this.remove = function(i){
                console.log(i);
                $scope.recipeFermentables.splice(i,1);
            };
        },
        controllerAs:'fermCtrl'
    };
});

