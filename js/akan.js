function getAkan() {
    /*Validates the day input*/
    let validateDay = Number(document.getElementById("day").value);
    let validDay;
    if (validateDay < 1 || validateDay > 31) {
        alert("Enter A Valid Day");
    } else {
        validDay = validateDay;
    }
    /*Validates the month input*/
    let validateMonth = Number(document.getElementById('month').value);
    let validMonth;
    if (validateMonth < 1 || validateMonth > 12) {
        alert("Enter A Valid Month");
    } else {
        validMonth = validateMonth;
    }
    /*Extracts the first 2 number in year input*/
    let year = document.getElementById('year').value;
    let cc = year.slice(0, 2);
    let yy = year.slice(2, 4);
    /*This on find the day of the week*/
    let dayOfTheWeek = Math.floor((((Number(year.slice(0, 2)) / 4) - 2 * Number(year.slice(0, 2)) - 1) +
        ((5 * Number(year.slice(2, 4)) / 4)) + ((26 * (validMonth + 1) / 10)) + validDay) % 7);
    /*Validates the gender*/
    let male;
    let female;
    if (document.getElementById("male-gender").checked) {
        male = true;
    } else if (document.getElementById("female-gender").checked) {
        female = true;
    } else {
        alert("You didn't input any gender value");
    }

    /*List of Akan Name*/
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    /*Assign the input to their outputs*/
    if (male && validMonth && validDay) {
        switch (dayOfTheWeek) {
            case 1:
                alert(`You were born on a Sunday: your Akan name is ${maleNames[0]}`);
                return false;
                break;
            case 2:
                alert(`You were born on a Monday: your Akan name is ${maleNames[1]}`);
                return false;
                break;
            case 3:
                alert(`You were born on a Tuesday: your Akan name is ${maleNames[2]}`);
                return false;
                break;
            case 4:
                alert(`You were born on a Wednesday: your Akan name is ${maleNames[3]}`);
                return false;
                break;
            case 5:
                alert(`You were born on a Thursday: your Akan name is ${maleNames[4]}`);
                return false;
                break;
            case 6:
                alert(`You were born on a Friday: your Akan name is ${maleNames[5]}`);
                return false;
                break;
            case 7:
                alert(`You were born on a Saturday: your Akan name is ${maleNames[6]}`);
                return false;
                break;
            case 0:
                alert(`You were born on a Sunday: your Akan name is ${maleNames[0]}`);
                return false;
                break;
            default:
                alert("Sorry we can't find your name");

        }
    } else if (female && validMonth && validDay) {
        switch (dayOfTheWeek) {
            case 1:
                alert(`You were born on a Sunday: your Akan name is ${femaleNames[0]}`);
                return false;
                break;
            case 2:
                alert(`You were born on a Monday: your Akan name is ${femaleNames[1]}`);
                return false;
                break;
            case 3:
                alert(`You were born on a Tuesday: your Akan name is ${femaleNames[2]}`);
                return false;
                break;
            case 4:
                alert(`You were born on a Wednesday: your Akan name is ${femaleNames[3]}`);
                return false;
                break;
            case 5:
                alert(`You were born on a Thursday: your Akan name is ${femaleNames[4]}`);
                return false;
                break;
            case 6:
                alert(`You were born on a Friday: your Akan name is ${femaleNames[5]}`);
                return false;
                break;
            case 7:
                alert(`You were born on a Saturday: your Akan name is ${femaleNames[6]}`);
                return false;
                break;
            case 0:
                alert(`You were born on a Sunday: your Akan name is ${femaleNames[0]}`);
                return false;
                break;
            default:
                alert("Sorry we can't find your name");
        }
    } else {
        alert("You entered invalid month or day");
    }
}