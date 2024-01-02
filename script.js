const WEEK = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    document.getElementById("time").innerText =
        zeroPadding(hours, 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2) + " " + ampm;

    document.getElementById("date").innerText =
        now.getFullYear() + "-" +
        zeroPadding(now.getMonth() + 1, 2) + "-" +
        zeroPadding(now.getDate(), 2) + " " +
        WEEK[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}
