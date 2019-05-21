function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
    var colors = new Array(2);
    var colorIndex = getRandomInt(colors.length) + 1;
    var className = "color-" + colorIndex;
    
    return className;
}

function appendThreeOneDigitProblem(jQueryElement) {
    $(jQueryElement).append(`
        <div class="column-5">
            <span class=""></span>
            <span class=""></span>
            <span class="first-number"></span>
            <span class="number"></span>
            <span class="number"></span>
        </div>
        <div class="column-5 bottom">
            <span class="sign"></span>
            <span class=""></span>
            <span class=""></span>
            <span class=""></span>
            <span class="first-number"></span>
        </div>
    `);
}

function appendTwoTwoDigitProblem(jQueryElement) {
    $(jQueryElement).append(`
        <div class="column-5">
            <span class=""></span>
            <span class=""></span>
            <span class=""></span>
            <span class="first-number"></span>
            <span class="number"></span>
        </div>
        <div class="column-5 bottom">
            <span class="sign"></span>
            <span class=""></span>
            <span class=""></span>
            <span class="first-number"></span>
            <span class="number"></span>
        </div>
    `);
}

function appendThreeTwoDigitProblem(jQueryElement) {
    $(jQueryElement).append(`
        <div class="column-5">
            <span class=""></span>
            <span class=""></span>
            <span class="first-number"></span>
            <span class="number"></span>
            <span class="number"></span>
        </div>
        <div class="column-5 bottom">
            <span class="sign"></span>
            <span class=""></span>
            <span class=""></span>
            <span class="first-number"></span>
            <span class="number"></span>
        </div>
    `);
}

function appendFourDigitProblem(jQueryElement) {
    $(jQueryElement).append(`
        <div class="column-5">
            <span class=""></span>
            <span class="first-number top-number"></span>
            <span class="number"></span>
            <span class="number"></span>
            <span class="number"></span>
        </div>
        <div class="column-5 bottom">
            <span class="sign"></span>
            <span class="first-number bottom-number"></span>
            <span class="number"></span>
            <span class="number"></span>
            <span class="number"></span>
        </div>
    `);
}

$('.copies-7').each(function(index) {
    var copy = $(this).clone();
    for(var count = 1; count <= 7; count++) {
        var copy = $(this).clone();
        $(copy).appendTo('body');    
    }
});

$('.add-four').each(function(index) {
    appendFourDigitProblem(this);
    $(this).find('.sign').text('+');
});

$('.sub-four').each(function(index) {
    var top = getRandomInt(8) + 2; //eliminate 0 and 1
    var bottom = getRandomInt(top - 1) + 1; //eliminate 0

    appendFourDigitProblem(this);
    $(this).find('.sign').text('-');
    $(this).find('.top-number').text(top);
    $(this).find('.bottom-number').text(bottom);
});

$('.multiply-three-one').each(function(index) {
    appendThreeOneDigitProblem(this);
    $(this).find('.sign').text('x');
});

$('.multiply-two-two').each(function(index) {
    appendTwoTwoDigitProblem(this);
    $(this).find('.sign').text('x');
});

$('.multiply-three-two').each(function(index) {
    appendThreeTwoDigitProblem(this);
    $(this).find('.sign').text('x');
});

$('.first-number').each(function(index) {
    var number = getRandomInt(9) + 1; //eliminate 0
    var numberToUse = $(this).text() || number; //allow for pre populated numbers
    $(this).text(numberToUse);

    var color = getRandomColor();
    $(this).addClass(color);
});

$('.number').each(function(index) {
    var number = getRandomInt(10);
    $(this).text(number);

    var color = getRandomColor();
    $(this).addClass(color);
});

$('.sign').each(function(index) {
    var color = getRandomColor();
    $(this).addClass(color);
});