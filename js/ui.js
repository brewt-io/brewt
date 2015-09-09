$(document).ready( function(){
    fermentablesList = $("#fermentables-list-content").find("> ul");
    yeastList = $("#yeast-list-content").find("> ul");
    hopsList = $("#hops-list-content").find("> ul");
    var i;
    for (i = 0; i<grains.length; i++){
        fermentablesList.append('<li>' + grains[i].name + '</li>');
    }

    for (i = 0; i<hops.length; i++){
        hopsList.append('<li>' + hops[i].name + '</li>');
    }

    for (i = 0; i<yeast.length; i++){
        yeastList.append('<li>' + yeast[i].name + '</li>');
    }

});
