var emptyresult = `<div class="line-bars">
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>`;
const resutls = {"years" : '.year-res', "months" : ".month-res","days" : ".days-res", }
const errors = {"years" : '.years-error-message', "months" : ".months-error-message","days" : ".days-error-message", }
const inputs = {"years" : '#year', "months" : "#month","days" : "#day", }
const highligher = {"years" : '#year-div', "months" : "#month-div","days" : "#day-div", }
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();


for(var key in resutls) {
    document.querySelector(resutls[key]).innerHTML = emptyresult;
}

function ValidateAge() {
    const Isvalidationtrue = validateInputs();
    if(Isvalidationtrue) {
        const dateofbirth = new Date(si(inputs["years"])+'-'+si(inputs["months"])+'-'+si(inputs["days"]));
        const currentDate = new Date();
        const result = calculate(currentDate, dateofbirth);
        qs(resutls["days"]).innerHTML = "<h1>"+result["days"]+"</h1>";
        qs(resutls["months"]).innerHTML = "<h1>"+result["months"]+"</h1>";
        qs(resutls["years"]).innerHTML = "<h1>"+result["years"]+"</h1>";

    }
}

function validateInputs() {
     let checkresult = false;
     const days = si(inputs["days"]);
     const months = si(inputs["months"]);
     const years = si(inputs["years"]);   

     if(days <= 0 || days > 31) {
        qs(highligher["days"]).classList.add('error');
        qs(errors["days"]).innerHTML = "Must be a valid day";
     } else {
        qs(highligher["days"]).classList.remove('error');
        qs(errors["days"]).innerHTML = "";
        checkresult = true;
    }
    if(months <= 0 || months > 12 || months == '') {
        qs(highligher["months"]).classList.add('error');
        qs(errors["months"]).innerHTML = "Must be a valid month";
    } else {
        qs(highligher["months"]).classList.remove('error');
        qs(errors["months"]).innerHTML = "";
        checkresult = true;
    }
    
    if(years <= 0 || years > currentYear) {
        qs(highligher["years"]).classList.add('error');
        qs(errors["years"]).innerHTML = "Must be in the past";
    } else {
        qs(highligher["years"]).classList.remove('error');
        qs(errors["years"]).innerHTML = "";
        checkresult = true;
    }

    return checkresult;

}

function qs( element ) {
    return document.querySelector(element);
}

function si( element ) {
    var selectedElement =  document.querySelector(element);
    return selectedElement.value;
}

function calculate(currentDate, pastDate) {
    var diff = Math.floor(currentDate.getTime() - pastDate.getTime());
    var day = 1000 * 60 * 60 *24;
    days = Math.floor(diff/day);
    months = Math.floor(days/31);
    years = Math.floor(months/12);
    return { "days": days, "months": months, "years":years };
}



