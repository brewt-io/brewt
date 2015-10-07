angular.module("brewt").directive('recipeYeast', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/recipe/yeast.html',
        controller: function(Recp){
            this.getYeast = function(){
                return Recp.yeast;
            };
            this.remove = function(){
                Recp.yeast = false;
            }
        },
        controllerAs: 'yeastCtrl'
    };
});