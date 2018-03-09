$(document).ready(function(){
    animateFlyers($('.flyer1'), 100 + Math.random()*150);
    animateFlyers($('.flyer2'), 100 + Math.random()*150);
    animateFlyers($('.flyer3'), 100 + Math.random()*150);
    animateFlyers($('.flyer4'), 100 + Math.random()*150);

});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateFlyers(a, b){
    var newq = makeNewPosition();
    a.animate({ top: newq[0], left: newq[1] },b, function(){
      animateFlyers(a,b);        
    });
    
};
