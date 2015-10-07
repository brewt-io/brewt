angular.module("brewt").directive('recipeMiscs', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/recipe/miscs.html',
        controller:function(Recp){
            this.getMiscs = function(){
                return Recp.miscs;
            };
            this.remove = function(i){
                Recp.miscs.splice(i,1);
            }
        },
        controllerAs:'miscsCtrl'

    };

});