function generateAkanName() {
    let birthDay = Number(document.getElementById("day").value);
    let birthMonth = Number(document.getElementById("month").value);
    let birthYear = document.getElementById("year").value;
    let genderChoice = document.getElementsByName("gender");


    function dayValid() {
        if (birthMonth === 2 && Number(birthYear) % 4 === 0) {
            if (birthDay > 28 || birthDay < 1) {
                return false;
            } else if (birthMonth === 2 && birthDay > 29) {
                return false;
            } else if (birthMonth === 2 && birthDay < 1) {
                return false;
            } else {
                return true;
            }
        } else if (birthDay < 1 || birthDay > 31) {
            return false;
        } else {
            return true;
        }
    }
    let validDay = dayValid();

    function monthValid() {
        if (birthMonth < 1 || birthMonth > 12) {
            return false;
        } else {
            return true;
        }
    }

    let validMonth = monthValid();

    function getGender() {
        for (let gender of genderChoice) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
    let genderValue = getGender();
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let dayOfTheWeek = Math.floor((((Number(birthYear.slice(0, 2)) / 4) - 2 * Number(birthYear.slice(0, 2)) - 1) +
        ((5 * Number(birthYear.slice(2, 4)) / 4)) + ((26 * (birthMonth + 1) / 10)) + birthDay) % 7);

    if (genderValue == "male" && validMonth && validDay) {
        switch (dayOfTheWeek) {
            case 1:
                document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleNames[0];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 2:
                document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + maleNames[1];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 3:
                document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + maleNames[2];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 4:
                document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + maleNames[3];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 5:
                document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + maleNames[4];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 6:
                document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + maleNames[5];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 7:
                document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + maleNames[6];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 0:
                document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleNames[0];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            default:
                alert("Sorry we can't find your name");

        }
    } else if (genderValue == "female" && validMonth && validDay) {
        switch (dayOfTheWeek) {
            case 1:
                document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleNames[0];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 2:
                document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + femaleNames[1];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                alert("Kwadwo");
                break;
            case 3:
                document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + femaleNames[2];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 4:
                document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + femaleNames[3];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 5:
                document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + femaleNames[4];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 6:
                document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + femaleNames[5];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 7:
                document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + femaleNames[6];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            case 0:
                document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleNames[0];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
            default:
                alert("Sorry we can't find your name");
        }
    } else {
        alert("You entered invalid month or day");
    }
}