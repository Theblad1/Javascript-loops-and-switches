for (var i = 1; i <= 100; i++) {
    document.write(i + " ");
}

var day = new Date().getDay();
var day_in_text;

switch (day) {
    case 0:
        day_in_text = "Sunday";
        break;
    case 1:
        day_in_text = "Monday";
        break;
    case 2:
        day_in_text = "Tuesday";
        break;
    case 3:
        day_in_text = "Wednesday";
        break;
    case 4:
        day_in_text = "Thursday";
        break;
    case 5:
        day_in_text = "Friday";
        break;
    case 6:
        day_in_text = "Saturday";
        break;
    default:
        day_in_text = "Invalid day";
}

document.getElementById("display_day").innerHTML = day_in_text;


