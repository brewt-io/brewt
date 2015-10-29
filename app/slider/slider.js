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
        link:function(scope, elem){
            elem.find(".current").text = scope.val; //.css("left", "calc(" + current + "% - 1.5%)");
            elem.find(".left").text = scope.styleMin;
            elem.find(".right").text = scope.styleMax;

            console.log(elem.find(".right"));

            //elem.find(".left").css["left"] = "calc(" + scope.styleMin/(scope.propMax - scope.propMin) + "% - .75em)" ;
            //elem.find(".right").css["left"] = "calc(" + scope.styleMax/(scope.propMax - scope.propMin) + "% - .75em)";
            //elem.find(".left").css("left", "10%" );
            //elem.find(".right").css("left", "78%");

            //console.log(elem.find(".left"));
            //elem.find(".right").css = {"left": scope.styleMax/(scope.propMax - scope.propMin) + "%"};
            //elem.find(".range")

            //elem[".btn1"].click(function () {
            //    elem(".left").text(left).css("left", );
            //    elem(".right").text(right).css("left", "calc(" + right + "% - 1.25em)");
            //    elem(".range").css("left", left + "%").css("width", range + '%');
            //});
        }
    }
});