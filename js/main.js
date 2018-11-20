//Random Movement

$(document).ready(function () {
    animateDiv('.a');
});

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 40;
    var w = $(window).width() - 40;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv(myclass) {
    var newq = makeNewPosition();
    $(myclass).animate({top: newq[0], left: newq[1]}, 1000, function () {
        animateDiv(myclass);
    });

};
