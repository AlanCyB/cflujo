// Exercise #1

// Part 1 First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

var dayNumber = parseInt(prompt("Ingresa el número de día de la semana: "));
var hourNumber = Number(prompt("Ingresa la hora: "));

function businessHours(dayNumber, hourNumber) {
    if ((dayNumber >= 1 && dayNumber <=5) && (hourNumber >= 9 && hourNumber <= 18))
        return true;
    else
        return false;
    
}

console.log(businessHours(dayNumber, hourNumber));



// Part 2 Now, create the function getDayNumber.
//It should accept two parameters: janFirstDayNumber and yearDayNumber.

var janFirstDayNumber = parseInt(prompt("Ingresa el número de día de enero entre 0-6 "));
var yearDayNumber = parseInt(prompt("Ingresa el número de día del año entre 1-365: "));

function getDayNumber(janFirstDayNumber, yearDayNumber) {
    

    let divWeek = (yearDayNumber % 7) - 1;
    let day = janFirstDayNumber + divWeek;
    if (day > 6) {
        day -= 7;
    }

    console.log(day);

    switch (day) {
        case 0:
            return "Es Domingo!";

        case 1:
            return "Es Lunes!";

        case 2:
            return "Es Martes!";

        case 3:
            return "Es Miércoles!";

        case 4:
            return "Es Jueves!";

        case 5:
            return "Es Viernes!!!!";

        case 6:
            return "Es Sábado!";

        default:
            return "Es invalida la informacion"
    }
}

console.log(getDayNumber(janFirstDayNumber, yearDayNumber));

// Part 3

function businessHoursYearDay(yearDayNumber, hourNumber) {
    let hourNumber2 = Number(prompt("Ingresa la hora: "));

    let divWeek = (yearDayNumber % 7) - 1;
    let dayOfWeek = janFirstDayNumber + divWeek;
    if (dayOfWeek > 6) {
        dayOfWeek -= 7;
    }

    if ((dayOfWeek >= 1 && dayOfWeek <=5) && (hourNumber2 >= 9 && hourNumber2 <= 18))
    return true;
else
    return false;
    
}

console.log(businessHoursYearDay());