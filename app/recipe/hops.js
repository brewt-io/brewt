angular.module("brewt").directive('recipeHops', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/recipe/hops.html',
        controller: function(Recp){
            this.getHops = function(){
                return Recp.hops;
            };
            this.remove = function(i){
                Recp.hops.splice(i,1);
            }
        },
        controllerAs:'hopsCtrl'
    };
});
