angular.module("brewt").directive('recipeFermentables', function() {
    return {
        restrict: 'E',
        templateUrl:'app/recipe/fermentables.html',
        controller: function(Recp){
            this.getFermentables = function(){
                return Recp.grains;
            };
            this.remove = function(g){
                ferms = Recp.grains;
                i = ferms.indexOf(g);
                ferms.splice(i,1);
            };
        },
        controllerAs:'fermCtrl'
    };
});

