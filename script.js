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

function appendTwoTwoDigitProblemDecimal(jQueryElement) {
    $(jQueryElement).append(`
        <div class="column-5">
            <span class=""></span>
            <span class="first-number"></span>
            <span class="number"></span>
            <span class="decimal">.</span>
            <span class="number"></span>
            <span class="number"></span>
        </div>
        <div class="column-5 bottom">
            <span class="sign"></span>
            <span class="first-number"></span>
            <span class="number"></span>
            <span class="decimal">.</span>
            <span class="number"></span>
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

function appendDivisionProblem(jQueryElement) {
    $(jQueryElement).append(`
        <div class="">
            <span class="sign divisor"></span>
            <span class="sign dividend"></span>
        </div>
    `);
}

function division(quotient, divisor, self) {
    var dividend = divisor * parseInt(quotient)

    appendDivisionProblem(self);
    $(self).find('.divisor').text(divisor);
    $(self).find('.dividend').text(dividend);
}

function decimalDivision(quotient, self) {
    var divisor = getRandomInt(95) + 4; //eliminate 0 and 1
    var dividend = divisor * parseInt(quotient)

    divisor = divisor / (Math.random() < 0.5 ? 10 : 100);
    dividend = dividend / (Math.random() < 0.5 ? 10 : 100);
    appendDivisionProblem(self);
    $(self).find('.divisor').text(divisor);
    $(self).find('.dividend').text(dividend);
}

$('.copy').each(function(index) {
    var copy = $(this).clone();
    for(var count = 1; count < 4; count++) {
        var copy = $(this).clone();
        $(copy).appendTo('body');
    }
});

$('.add-four').each(function(index) {
    appendFourDigitProblem(this);
    $(this).find('.sign').text('+');
});

$('.divide-two').each(function(index) {
    var quotient = getRandomInt(8) + 2 + '' + getRandomInt(9)
    var divisor = getRandomInt(7) + 2; //eliminate 0 and 1
    division(quotient, divisor, this);
});

$('.divide-three').each(function(index) {
    var quotient = getRandomInt(8) + 2 + '' + getRandomInt(9)
    var divisor = getRandomInt(97) + 2; //eliminate 0 and 1
    division(quotient, divisor, this);
});

$('.divide-decimal').each(function(index) {
    var quotient = getRandomInt(99)
    decimalDivision(quotient, this);
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

$('.multiply-two-two-decimal').each(function(index) {
    appendTwoTwoDigitProblemDecimal(this);
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