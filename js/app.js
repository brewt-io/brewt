(function (){
    var app = angular.module('brewt', []);

    var activeLib = 0;

    var recipeFermentables = [];
    var recipeHops = [];
    var recipeYeast;
    var recipeMiscs = [];

    app.controller('StyleController', function($scope, $http) {
        var activeStyle = 0;
        this.selectActive = false;


        this.getActiveStyle = function(){
          return this.styles[activeStyle];
        };

        this.toggleSelectActive = function(){
          this.selectActive = !this.selectActive;
        };

        this.select = function(i){
            activeStyle = i;
            this.toggleSelectActive();
        };
        this.loadStyles = function(){
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

        this.styles = this.loadStyles();

    });

    app.controller('FermentablesLibraryController', function($scope, $http) {
        this.active = function(){
            return activeLib == 1;
        };

        this.toggleActive = function(){
            if (activeLib == 1){
              activeLib = 0;
            }else{
              activeLib = 1;
            }
        };

        this.load = function(){
            fermentables = [];
            $http.get("data/fermentables.json").
                success(function(res){
                    for (var i = 0; i < res.FERMENTABLES.length; i++){
                        var ferm = {
                            name: res.FERMENTABLES[i].NAME,
                            version: parseInt(res.FERMENTABLES[i].VERSION),
                            type: res.FERMENTABLES[i].TYPE,
                            amount: parseFloat(res.FERMENTABLES[i].AMOUNT),
                            yieldPer: parseFloat(res.FERMENTABLES[i].YIELD),
                            color: parseFloat(res.FERMENTABLES[i].COLOR),
                            addAfterBoil: "TRUE" == res.FERMENTABLES[i].ADD_AFTER_BOIL,
                            origin: res.FERMENTABLES[i].ORIGIN,
                            supplier: res.FERMENTABLES[i].SUPPLIER,
                            notes: res.FERMENTABLES[i].NOTES,
                            coarseFineDiff: parseFloat(res.FERMENTABLES[i].COARSE_FINE_DIFF),
                            moisture: parseFloat(res.FERMENTABLES[i].MOISTURE),
                            diastaticPower: parseFloat(res.FERMENTABLES[i].DIASTATIC_POWER),
                            protein: parseFloat(res.FERMENTABLES[i].PROTEIN),
                            maxInBatch: parseFloat(res.FERMENTABLES[i].MAX_IN_BATCH),
                            recommendedMash: "TRUE" == res.FERMENTABLES[i].RECOMMEND_MASH,
                            ibuGalPerLb: parseFloat(res.FERMENTABLES[i].IBU_GAL_PER_LB),
                            inventory: parseFloat(res.FERMENTABLES[i].INVENTORY),
                            potential: parseFloat(res.FERMENTABLES[i].POTENTIAL),
                            displayAmount: res.FERMENTABLES[i].DISPLAY_AMOUNT,
                            displayColor: res.FERMENTABLES[i].DISPLAY_COLOR
                        };
                        fermentables.push(ferm);
                    }
                }).
                error(function(msg){
                    console.log(msg);
                });

            return fermentables;
        };

        this.addFermentable = function(i){
            var fermentable = this.lib[i];
            fermentable.timeCreated = Date.now();
            recipeFermentables.push(fermentable);
        };

        this.lib = this.load();

    });

    app.controller('YeastLibraryController', function($scope, $http) {
        this.active = function(){
            return activeLib == 2;
        };

        this.toggleActive = function(){
            if (activeLib == 2){
              activeLib = 0;
            }else{
              activeLib = 2;
            }
        };



        this.load = function(){
            yeasts = [];
            $http.get("data/yeasts.json").
                success(function(res){
                    for (var i = 0; i < res.YEASTS.length; i++){
                        var s = {
                            name: res.YEASTS[i].NAME,
                            version: parseInt(res.YEASTS[i].VERSION),
                            type: res.YEASTS[i].TYPE,
                            form: res.YEASTS[i].FORM,
                            amount: parseFloat(res.YEASTS[i].AMOUNT),
                            amountIsWeight: "TRUE"==res.YEASTS[i].AMOUNT_IS_WEIGHT,
                            laboratory: res.YEASTS[i].LABORATORY,
                            productId: res.YEASTS[i].PRODUCT_ID,
                            minTemp: parseFloat(res.YEASTS[i].MIN_TEMPERATURE),
                            maxTemp: parseFloat(res.YEASTS[i].MAX_TEMPERATURE),
                            flocculation: res.YEASTS[i].FLOCCULATION,
                            attenuation: parseFloat(res.YEASTS[i].ATTENUATION),
                            notes: res.YEASTS[i].NOTES,
                            bestFor: res.YEASTS[i].BEST_FOR,
                            maxReuse: parseInt(res.YEASTS[i].MAX_REUSE),
                            timesCultured: parseInt(res.YEASTS[i].TIMES_CULTURED),
                            addToSecondary: "TRUE"==res.YEASTS[i].ADD_TO_SECONDARY,
                            inventory: res.YEASTS[i].INVENTORY,
                            cultureDate: res.YEASTS[i].CULTURE_DATE

                        };
                        yeasts.push(s);
                    }
                }).
                error(function(msg){
                    console.log(msg);
                });
            return yeasts;
        };

        this.setYeast = function(i){
            newYeast = this.lib[i];
            newYeast.timeCreated = Date.now();
            recipeYeast = newYeast;
        };

        this.lib = this.load();

    });

    app.controller('HopsLibraryController', function($scope, $http) {
        this.active = function(){
            return activeLib == 3;
        };

        this.toggleActive = function(){
            if (activeLib == 3){
              activeLib = 0;
            }else{
              activeLib = 3;
            }
        };

        this.load = function(){
            hops = [];
            $http.get("data/hops.json").
                success(function(res){
                    for (var i = 0; i < res.HOPS.length; i++){
                        var s = {
                            name: res.HOPS[i].NAME,
                            version: parseInt(res.HOPS[i].VERSION),
                            origin: res.HOPS[i].ORIGIN,
                            alpha: parseFloat(res.HOPS[i].ALPHA),
                            amount: parseFloat(res.HOPS[i].AMOUNT),
                            use: res.HOPS[i].USE,
                            time: parseFloat(res.HOPS[i].TIME),
                            notes: res.HOPS[i].NOTES,
                            type: res.HOPS[i].TYPE,
                            form: res.HOPS[i].FORM,
                            beta: parseFloat(res.HOPS[i].BETA),
                            hsi: parseFloat(res.HOPS[i].HSI),
                            inventory: parseFloat(res.HOPS[i].INVENTORY)
                        };
                        hops.push(s);
                    }
                }).
                error(function(msg){
                    console.log(msg);
                });
            return hops;
        };

        this.addHop = function(i){
            recipeHops.push(this.lib[i]);
        };

        this.lib = this.load();

    });

    app.controller('MiscLibraryController', function($scope, $http) {
        this.active = function(){
            return activeLib == 4;
        };

        this.toggleActive = function(){
            if (activeLib == 4){
              activeLib = 0;
            }else{
              activeLib = 4;
            }
        };

        this.load = function(){
            miscs = [];
            $http.get("data/misc.json").
                success(function(res){
                    for (var i = 0; i < res.MISCS.length; i++){
                        var s = {
                            name: res.MISCS[i].NAME,
                            version: parseInt(res.MISCS[i].VERSION),
                            type: res.MISCS[i].TYPE,
                            use: res.MISCS[i].USE,
                            amount: parseFloat(res.MISCS[i].AMOUNT),
                            time: parseFloat(res.MISCS[i].TIME),
                            amountIsWeight: "TRUE" == res.MISCS[i].AMOUNT_IS_WEIGHT,
                            useFor: res.MISCS[i].USE_FOR,
                            notes: res.MISCS[i].NOTES,
                            inventory: parseFloat(res.MISCS[i].INVENTORY)
                        };
                        miscs.push(s);
                    }
                }).
                error(function(msg){
                    console.log(msg);
                });
            return miscs;

        };

        this.addMisc = function(i){
            recipeMiscs.push(this.lib[i]);
        };

        this.lib = this.load();

    });

    app.controller('FermentablesRecipeController', function() {

        this.getFermentables = function(){
            return recipeFermentables;
        };

    });

    app.controller('HopsRecipeController', function() {

        this.getHops = function(){
            return recipeHops;
        };

    });

    app.controller('YeastRecipeController', function() {
        this.getYeast = function(){
            return recipeYeast;
        };
    });

    app.controller('MiscRecipeController', function() {
        this.getMiscs = function(){
            return recipeMiscs;
        };
    });


})();
