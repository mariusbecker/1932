//Click Counter

var clickCounter = 0;
var anywhereClickCounter = 100;

function updateClickCounter(status) {
    if (status === 'hit' && anywhereClickCounter >= 0) {
        clickCounter += 1;
        $('.click-counter').html(clickCounter);
    }

    anywhereClickCounter -= 1;

    if (anywhereClickCounter >= 0) {
        $('.anywhere-click-counter').html(anywhereClickCounter);
    }
}

$(document).on("click", function (e) {

    var targetElementClicked =
        $(e.target).closest('.target-element').length ||
        $(e.target).is('.target-element');

    if (!targetElementClicked) {
        updateClickCounter();
    } else {
        updateClickCounter('hit');
    }

});