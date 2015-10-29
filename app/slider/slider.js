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
        templateUrl: 'app/slider/slider.html',
        controller:function($scope){
            this.update= function(){
                var scale = $scope.propMax - $scope.propMin;
                $scope.leftStyle = {'left': 'calc(' + 100*($scope.styleMin - $scope.propMin)/scale+'% - 1.25em)'};
                $scope.rightStyle = {'left': 'calc(' + 100*($scope.styleMax - $scope.propMin)/scale+'% - 1.25em)'};
                $scope.currentStyle = {'left': 100*($scope.val - $scope.propMin)/scale+'%'};
                $scope.rangeStyle = {
                    'left': 100*($scope.styleMin - $scope.propMin)/scale+'%',
                    'width': 100*($scope.styleMax - $scope.styleMin)/scale+'%'
                };
            }
        },
        controllerAs: 'sliderCtrl'
    }
});