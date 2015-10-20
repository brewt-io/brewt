angular.module('brewt').directive('slider', function(){
    return {
        restrict: 'E',
        scope: {
            propMin:"=",
            propMax:"=",
            styleMin:"=",
            styleMax:"=",
            val:"="
        },
        templateUrl: 'app/slider/slider.html'
    }
});
