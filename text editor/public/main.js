// defining the functionality of buttons
let leftButton = document.getElementById('left');
let centerBotton = document.getElementById('center');
let rightBotton = document.getElementById('right');

// target to make changes on 
let target = document.getElementById('myTextarea');

// align text left
const alignLeft = function () {
    target.style.textAlign = 'left';
}
leftButton.addEventListener('click', alignLeft);

// align text center
const alignCenter = function () {
    target.style.textAlign = 'center';
}
centerBotton.addEventListener('click', alignCenter);

// align text right
const alignRight = function () {
    target.style.textAlign = 'right';
}
rightBotton.addEventListener('click', alignRight);

// bold button functionality
let boldButton = document.getElementById('bold');
let isBold = false;

const bold = function () {
    isBold = !isBold;
    target.style.fontWeight = isBold ? 'bold' : 'normal';
}
boldButton.addEventListener('click', bold);

// italic button functionality
let italicButton = document.getElementById('italic');
let isItalic = false;

const italic = function () {
    isItalic = !isItalic;
    target.style.fontStyle = isItalic ? 'italic' : 'normal';
}
italicButton.addEventListener('click', italic);

// font dropdown menu functionality
let arial = document.getElementById('Arial');

const arialFont = function () {
    target.style.fontFamily = 'Arial';
}
arial.addEventListener('click', arialFont);

let verdana = document.getElementById('Verdana');

const verdanaFont = function () {
    target.style.fontFamily = 'Verdana';
}
verdana.addEventListener('click', verdanaFont);

let tahoma = document.getElementById('Tahoma');

const tahomaFont = function () {
    target.style.fontFamily = 'Tahoma';
}
tahoma.addEventListener('click', tahomaFont);

let ms = document.getElementById('Trebuchet MS');

const msFont = function () {
    target.style.fontFamily = 'Trebuchet MS';
}
ms.addEventListener('click', msFont);

let times = document.getElementById('Times New Roman');

const timesFont = function () {
    target.style.fontFamily = 'Times New Roman';
}
times.addEventListener('click', timesFont);

let georgia = document.getElementById('Georgia');

const georgiaFont = function () {
    target.style.fontFamily = 'Georgia';
}
georgia.addEventListener('click', georgiaFont);

let sansSerif = document.getElementById('sans-serif');

const sansSerifFont = function () {
    target.style.fontFamily = 'sans-serif';
}
sansSerif.addEventListener('click', sansSerifFont);

let serif = document.getElementById('serif');

const serifFont = function () {
    target.style.fontFamily = 'serif';
}
serif.addEventListener('click', serifFont);

let courier = document.getElementById('courier New');

const courierFont = function () {
    target.style.fontFamily = 'courier New';
}
courier.addEventListener('click', courierFont);

let brush = document.getElementById('Brush Script MT');

const brushFont = function () {
    target.style.fontFamily = 'Brush Script MT';
}
brush.addEventListener('click', brushFont);

let helvetica = document.getElementById('Helvetica');

const helveticaFont = function () {
    target.style.fontFamily = 'Helvetica';
}
helvetica.addEventListener('click', helveticaFont);

let arialBlack = document.getElementById('Arial Black');

const arialBlackFont = function () {
    target.style.fontFamily = 'Arial Black';
}
arialBlack.addEventListener('click', arialBlackFont);

let impact = document.getElementById('Impact');

const impactFont = function () {
    target.style.fontFamily = 'Impact';
}
impact.addEventListener('click', impactFont);

let grill = document.getElementById('Grill Sans');

const grillFont = function () {
    target.style.fontFamily = 'Grill Sans';
}
grill.addEventListener('click', grillFont);

// size button functionality
let eleven = document.getElementById('11');
let fifteen = document.getElementById('15');
let eighteen = document.getElementById('18');
let twenty = document.getElementById('20');
let twentyFour = document.getElementById('24');
let twentySeven = document.getElementById('27');
let thirty = document.getElementById('30');
let thirtyFour = document.getElementById('34');
let thirtyEight = document.getElementById('38');
let fourty = document.getElementById('40');

const elevenSize = function () {
    target.style.fontSize = '11px';
}
eleven.addEventListener('click', elevenSize);

const fifteenSize = function () {
    target.style.fontSize = '15px';
}
fifteen.addEventListener('click', fifteenSize);

const eighteenSize = function () {
    target.style.fontSize = '18px';
}
eighteen.addEventListener('click', eighteenSize);

const twentySize = function () {
    target.style.fontSize = '20px';
}
twenty.addEventListener('click', twentySize);

const twentyFourSize = function () {
    target.style.fontSize = '24px';
}
twentyFour.addEventListener('click', twentyFourSize);

const twentySevenSize = function () {
    target.style.fontSize = '27px';
}
twentySeven.addEventListener('click', twentySevenSize);

const thirtySize = function () {
    target.style.fontSize = '30px';
}
thirty.addEventListener('click', thirtySize);

const thirtyFourSize = function () {
    target.style.fontSize = '34px';
}
thirtyFour.addEventListener('click', thirtyFourSize);

const thirtyEightSize = function () {
    target.style.fontSize = '38px';
}
thirtyEight.addEventListener('click', thirtyEightSize);

const fourtySize = function () {
    target.style.fontSize = '40px';
}
fourty.addEventListener('click', fourtySize);

const fontSizeInput = document.getElementById('size-number');

fontSizeInput.addEventListener('keyup', (event) => {
if (event.key === 'Enter') {
    const fontSize = fontSizeInput.value;
    target.style.fontSize = fontSize + 'px';
}
});

// colors buttons functionality
let blue = document.getElementById('blue');
let red = document.getElementById('red');
let green = document.getElementById('green');
let isBlue = false;
let isRed = false;
let isGreen = false;

const blueColor = function () {
    isBlue = !isBlue;

    target.style.color = isBlue ? 'blue' : 'black';
}
blue.addEventListener('click', blueColor);

const redColor = function () {
    isRed = !isRed;

    target.style.color = isRed ? 'red' : 'black';
}
red.addEventListener('click', redColor);

const greenColor = function () {
    isGreen = !isGreen;

    target.style.color = isGreen ? 'green' : 'black';
}
green.addEventListener('click', greenColor);

let inputColor = document.getElementById('color-input');

const colorInput = function (event) {
    if (event.key === 'Enter') {
        const inputColorValue = inputColor.value;
        target.style.color = inputColorValue;
    }
}
inputColor.addEventListener('keyup', colorInput);