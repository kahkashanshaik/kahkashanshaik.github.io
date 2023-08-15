var emptyresult = `<div class="line-bars">
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>`;
const yearDiv = document.querySelector('.year-res');
const monthDiv = document.querySelector('.month-res');
const daysDiv = document.querySelector('.days-res');


const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const dayDivBox = document.querySelector('#day-div');
const monthDivBox = document.querySelector('#month-div');
const yearDivBox = document.querySelector('#year-div');

const dayErrorMsg = document.querySelector('.day-error-message');
const monthErrorMsg = document.querySelector('.month-error-message');
const yearErrorMsg = document.querySelector('.year-error-message');


yearDiv.innerHTML = emptyresult;
monthDiv.innerHTML = emptyresult;
daysDiv.innerHTML = emptyresult;

var days;
var months;
var years;

function ValidateAge() {
    let checkresult =  ValidateInputs();
    if(checkresult) {
        let dateofbirth = new Date(yearInput.value+'-'+monthInput.value+'-'+dayInput.value);
        let currentDate = new Date();
        calculate(currentDate,dateofbirth);
        yearDiv.innerHTML = "<h1>"+(years != NAN) ? years : emptyresult+"</h1>";
        monthDiv.innerHTML = "<h1>"+months+"</h1>";
        daysDiv.innerHTML = "<h1>"+days+"</h1>";
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
function ValidateInputs () {
    let checkresult = true;
    if(dayInput.value<=0 || dayInput.value > 31) {
        dayDivBox.classList.add('day-error');
        dayErrorMsg.innerHTML = "Must be a valid day";
        checkresult = false;
    }else {
        dayDivBox.classList.remove('day-error');
        dayErrorMsg.innerHTML = "";
    }
    if(monthInput.value<=0 || monthInput.value > 12) {
        monthDivBox.classList.add('month-error');
        monthErrorMsg.innerHTML = "Must be a valid month";
    }else {
        monthDivBox.classList.remove('month-error');
        monthErrorMsg.innerHTML = "";
        checkresult = false;
    }
    if(yearInput.value<=0 || yearInput.value > currentYear) {
        yearDivBox.classList.add('year-error');
        yearErrorMsg.innerHTML = "Must be in the past";
        checkresult = false;
    } else {
        yearDivBox.classList.remove('year-error');
        yearErrorMsg.innerHTML = "";
    }
    return checkresult;
}

function calculate(currentDate, pastDate) {
    var diff = Math.floor(currentDate.getTime() - pastDate.getTime());
    var day = 1000 * 60 * 60 *24;
    days = Math.floor(diff/day);
    months = Math.floor(days/31);
    years = Math.floor(months/12);
}

