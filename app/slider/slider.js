angular.module('brewt').directive('slider', function(){
    return {
        restrict: 'E',
        scope: {
            propMin:"=",
            propMax:"=",
            styleMin:"=",
            styleMax:"=",
            recipeVal:"="
        },
        templateUrl: 'app/slider/slider.html',
        controller:function($scope){

            var scale = $scope.propMax - $scope.propMin;

            var updateStyle = function(){
                $scope.leftStyle = {'left': 'calc(' + 100*($scope.styleMin - $scope.propMin)/scale+'% - 1.25em)'};
                $scope.rightStyle = {'left': 'calc(' + 100*($scope.styleMax - $scope.propMin)/scale+'% - 1.25em)'};
                $scope.rangeStyle = {
                    'left': 100 * ($scope.styleMin - $scope.propMin) / scale + '%',
                    'width': 100 * ($scope.styleMax - $scope.styleMin) / scale + '%'
                };
            };

            var updateVal = function(){
                $scope.currentStyle = {'left': 100*($scope.recipeVal- $scope.propMin)/scale+'%'};

            };

            $scope.$watch(function(){return $scope.styleMin;}, function(){updateStyle()});
            $scope.$watch(function(){return $scope.styleMax;}, function(){updateStyle()});
            $scope.$watch(function(){return $scope.recipeVal;}, function(){updateVal()});
        },
        controllerAs: 'sliderCtrl'
    }
});