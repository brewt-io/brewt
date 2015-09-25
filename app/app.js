angular.module('brewt', []).controller('RecipeController', function($scope) {
    $scope.activeLibrary = 0;
    $scope.recipeFermentables = [];
    $scope.recipeHops = [];
    $scope.recipeYeast = false;
    $scope.recipeMiscs = [];
});