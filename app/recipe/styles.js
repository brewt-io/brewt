angular.module('brewt').directive('recipeStyle', function($http) {
    return {
        restrict: 'E',
        templateUrl:'app/recipe/style.html',
        controller: function(Recp){
            this.selectActive = false;

            this.getRecipe = function(){
                return Recp;
            };

            this.toggleActive = function(){
                this.selectActive = !this.selectActive;
            };

            this.select = function(i){
                Recp.style = this.list[i];
                this.toggleActive();
            };

            this.load = function(){
                styles = [];
                $http.get("data/styles.json").
                    success(function(res){
                        for (var i = 0; i < res.STYLES.length; i++){
                            var s = {
                                name: res.STYLES[i].NAME,
                                version: parseInt(res.STYLES[i].VERSION),
                                category: res.STYLES[i].CATEGORY,
                                categoryNumber: parseInt(res.STYLES[i].CATEGORY_NUMBER),
                                styleLetter: res.STYLES[i].STYLE_LETTER,
                                styleGuide: res.STYLES[i].STYLE_GUIDE,
                                type: res.STYLES[i].TYPE,
                                notes: res.STYLES[i].NOTES,
                                profile: res.STYLES[i].PROFILE,
                                ingredients: res.STYLES[i].INGREDIENTS,
                                examples: res.STYLES[i].EXAMPLES,

                                ogMin: parseFloat(res.STYLES[i].OG_MIN),
                                ogMax: parseFloat(res.STYLES[i].OG_MAX),
                                fgMin: parseFloat(res.STYLES[i].FG_MIN),
                                fgMax: parseFloat(res.STYLES[i].FG_MAX),
                                ibuMin: parseFloat(res.STYLES[i].IBU_MIN),
                                ibuMax: parseFloat(res.STYLES[i].IBU_MAX),
                                colorMin: parseFloat(res.STYLES[i].COLOR_MIN),
                                colorMax: parseFloat(res.STYLES[i].COLOR_MAX),
                                carbMin: parseFloat(res.STYLES[i].CARB_MIN),
                                carbMax: parseFloat(res.STYLES[i].CARB_MAX),
                                abvMin: parseFloat(res.STYLES[i].ABV_MIN),
                                abvMax: parseFloat(res.STYLES[i].ABV_MAX)
                            };
                            styles.push(s);
                        }
                    }).
                    error(function(msg){
                        console.log(msg);
                    });
                return styles;
            };

            this.list = this.load();


        },
        controllerAs:'styleCtrl'
    };
});
