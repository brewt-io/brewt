(function (){
    var app = angular.module('brewt', []);

    app.controller('StyleController', function() {
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
            return [
                {name:'American Pale Ale', description:"Usually moderate to strong hop aroma from dry hopping or late kettle additions of American hop varieties. A citrusy hop character is very common, but not required. Low to moderate maltiness supports the hop presentation, and may optionally show small amounts of specialty malt character (bready, toasty, biscuity). Fruity esters vary from moderate to none. No diacetyl. Dry hopping (if used) may add grassy notes, although this character should not be excessive.Pale golden to deep amber. Moderately large white to off-white head with good retention. Generally quite clear, although dry-hopped versions may be slightly hazy.Usually a moderate to high hop flavor, often showing a citrusy American hop character (although other hop varieties may be used). Low to moderately high clean malt character supports the hop presentation, and may optionally show small amounts of specialty malt character (bready, toasty, biscuity). The balance is typically towards the late hops and bitterness, but the malt presence can be substantial. Caramel flavors are usually restrained or absent. Fruity esters can be moderate to none. Moderate to high hop bitterness with a medium to dry finish. Hop flavor and bitterness often lingers into the finish. No diacetyl. Dry hopping (if used) may add grassy notes, although this character should not be excessive.Medium-light to medium body. Carbonation moderate to high. Overall smooth finish without astringency often associated with high hopping rates.Refreshing and hoppy, yet with sufficient supporting malt. An American adaptation of English pale ale, reflecting indigenous ingredients (hops, malt, yeast, and water). Often lighter in color, cleaner in fermentation by-products, and having less caramel flavors than English counterparts."},
                {name:'Barleywine', description:"Very rich and intense maltiness. Hop character moderate to assertive and often showcases citrusy or resiny American varieties (although other varieties, such as floral, earthy or spicy English varieties or a blend of varieties, may be used). Low to moderately strong fruity esters and alcohol aromatics. Malt character may be sweet, caramelly, bready, or fairly neutral. However, the intensity of aromatics often subsides with age. No diacetyl.Color may range from light amber to medium copper; may rarely be as dark as light brown. Often has ruby highlights. Moderately-low to large off-white to light tan head; may have low head retention. May be cloudy with chill haze at cooler temperatures, but generally clears to good to brilliant clarity as it warms. The color may appear to have great depth, as if viewed through a thick glass lens. High alcohol and viscosity may be visible in 'legs' when beer is swirled in a glass. Strong, intense malt flavor with noticeable bitterness. Moderately low to moderately high malty sweetness on the palate, although the finish may be somewhat sweet to quite dry (depending on aging). Hop bitterness may range from moderately strong to aggressive. While strongly malty, the balance should always seem bitter. Moderate to high hop flavor (any variety). Low to moderate fruity esters. Noticeable alcohol presence, but sharp or solventy alcohol flavors are undesirable. Flavors will smooth out and decline over time, but any oxidized character should be muted (and generally be masked by the hop character). May have some bready or caramelly malt flavors, but these should not be high. Roasted or burnt malt flavors are inappropriate. No diacetyl.Full-bodied and chewy, with a velvety, luscious texture (although the body may decline with long conditioning). Alcohol warmth should be present, but not be excessively hot. Should not be syrupy and under-attenuated. Carbonation may be low to moderate, depending on age and conditioning.A well-hopped American interpretation of the richest and strongest of the English ales. The hop character should be evident throughout, but does not have to be unbalanced. The alcohol strength and hop bitterness often combine to leave a very long finish. Usually the strongest ale offered by a brewery, and in recent years many commercial examples are now vintage-dated. Normally aged significantly prior to release. Often associated with the winter or holiday season."},
                {name:'Extra Special Bitter', description:"Hop aroma moderately-high to moderately-low, and can use any variety of hops although UK hops are most traditional. Medium to medium-high malt aroma, often with a low to moderately strong caramel component (although this character will be more subtle in paler versions). Medium-low to medium-high fruity esters. Generally no diacetyl, although very low levels are allowed.  May have light, secondary notes of sulfur and/or alcohol in some examples (optional).Golden to deep copper. Good to brilliant clarity. Low to moderate white to off-white head. A low head is acceptable when carbonation is also low.Medium-high to medium bitterness with supporting malt flavors evident. Normally has a moderately low to somewhat strong caramelly malt sweetness. Hop flavor moderate to moderately high (any variety, although earthy, resiny, and/or floral UK hops are most traditional). Hop bitterness and flavor should be noticeable, but should not totally dominate malt flavors. May have low levels of secondary malt flavors (e.g., nutty, biscuity) adding complexity. Moderately-low to high fruity esters. Optionally may have low amounts of alcohol, and up to a moderate minerally/sulfury flavor. Medium-dry to dry finish (particularly if sulfate water is used). Generally no diacetyl, although very low levels are allowed.Medium-light to medium-full body. Low to moderate carbonation, although bottled commercial versions will be higher. Stronger versions may have a slight alcohol warmth but this character should not be too high.An average-strength to moderately-strong English ale. The balance may be fairly even between malt and hops to somewhat bitter. Drinkability is a critical component of the style; emphasis is still on the bittering hop addition as opposed to the aggressive middle and late hopping seen in American ales. A rather broad style that allows for considerable interpretation by the brewer. Strong bitters can be seen as a higher-gravity version of best bitters (although not necessarily 'more premium' since best bitters are traditionally the brewer's finest product). Since beer is sold by strength in the UK, these beers often have some alcohol flavor (perhaps to let the consumer know they are getting their due). In England today, 'ESB' is a brand unique to Fullers; in America, the name has been co-opted to describe a malty, bitter, reddish, standard-strength (for the US) English-type ale. Hopping can be English or a combination of English and American." },
                {name:'Witbier', description:"Moderate sweetness (often with light notes of honey and/or vanilla) with light, grainy, spicy wheat aromatics, often with a bit of tartness. Moderate perfumy coriander, often with a complex herbal, spicy, or peppery note in the background. Moderate zesty, citrusy orangey fruitiness.  A low spicy-herbal hop aroma is optional, but should never overpower the other characteristics. No diacetyl. Vegetal, celery-like, or ham-like aromas are inappropriate. Spices should blend in with fruity, floral and sweet aromas and should not be overly strong.Very pale straw to very light gold in color. The beer will be very cloudy from starch haze and/or yeast, which gives it a milky, whitish-yellow appearance. Dense, white, moussy head. Head retention should be quite good.Pleasant sweetness (often with a honey and/or vanilla character) and a zesty, orange-citrusy fruitiness. Refreshingly crisp with a dry, often tart, finish. Can have a low wheat flavor. Optionally has a very light lactic-tasting sourness. Herbal-spicy flavors, which may include coriander and other spices, are common should be subtle and balanced, not overpowering. A spicy-earthy hop flavor is low to none, and if noticeable, never gets in the way of the spices. Hop bitterness is low to medium-low (as with a Hefeweizen), and doesn't interfere with refreshing flavors of fruit and spice, nor does it persist into the finish. Bitterness from orange pith should not be present. Vegetal, celery-like, ham-like, or soapy flavors are inappropriate. No diacetyl. Medium-light to medium body, often having a smoothness and light creaminess from unmalted wheat and the occasional oats. Despite body and creaminess, finishes dry and often a bit tart. Effervescent character from high carbonation. Refreshing, from carbonation, light acidity, and lack of bitterness in finish. No harshness or astringency from orange pith. Should not be overly dry and thin, nor should it be thick and heavy.A refreshing, elegant, tasty, moderate-strength wheat-based ale. A 400-year-old beer style that died out in the 1950s; it was later revived by Pierre Celis at Hoegaarden, and has grown steadily in popularity over time."}
            ];
        };

        this.styles = this.loadStyles();

    });

    var recipeFermentables = [];
    var recipeHops = [];

    app.controller('FermentablesLibraryController', function() {
        this.active = false;

        this.toggleActive = function(){
            this.active = !this.active;
        };

        this.load = function(){
            return [
                {name:'Crystal 20L', yieldDec:0.75, color:20},
                {name:'Pale 2-Row', yieldDec:0.79, color:2},
                {name:'Vienna', yieldDec:0.78, color:4},
                {name:'Rauch', yieldDec:0.81, color:2},
                {name:'Black', yieldDec:0.55, color:500}
            ];
        };

        this.addFermentable = function(i){
          recipeFermentables.push(this.lib[i]);
        };

        this.lib = this.load();

    });

    app.controller('HopsLibraryController', function() {
        this.active = false;

        this.toggleActive = function(){
            this.active = !this.active;
        };

        this.load = function(){
            return [
                {name:'Fuggles', alphaAcidDec: 0.15},
                {name:'Cascade', alphaAcidDec: 0.15},
                {name:'Amarillo', alphaAcidDec: 0.15},
                {name:'Victory', alphaAcidDec: 0.15},
                {name:'Saaz', alphaAcidDec: 0.15}
            ];
        };

        this.addHop = function(i){
            recipeHops.push(this.lib[i]);
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


})();

