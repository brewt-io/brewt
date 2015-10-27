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

// INJECTED CODE //

// These are the vars

var left = 25; // min
var current = 65.5; // current tooltip
var right = 75; // max

var range = right - left; // range value

// This does the things

$(".btn1").click(function() {
  $(".left").text(left).css("left", "calc(" + left + "% - .75em)");
  $(".current").text(current).css("left", "calc(" + current + "% - 1.5%)");
  $(".right").text(right).css("left", "calc(" + right + "% - 1.25em)");

  $(".range").css("left", left + "%").css("width", range +'%');
});

// Maybe I'll do more things
