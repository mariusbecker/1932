//Random Movement

$(document).ready(function(){
    animateDiv('.emu');
});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $('.playground').height() - 300;
    var w = $('.playground').width() - 300;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 400,   function(){
      animateDiv(myclass);
    });

};
