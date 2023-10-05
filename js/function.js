var countDownDate = new Date('2024-01-01 01:59:59'.replace(/\s/, 'T')+'Z').getTime();

var countdown = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    var colons = document.querySelectorAll(".colon");

    if (days <= 9) {
        var days = "0" + String(days);
    }

    if (hours <= 9) {
        var hours = "0" + String(hours);
    }

    if (minutes <= 9) {
        var minutes = "0" + String(minutes);
    }

    if (seconds <= 9) {
        var seconds = "0" + String(seconds);
    }




    document.getElementById("days").innerHTML = days + " :";
    document.getElementById("hours").innerHTML = hours + " :";
    document.getElementById("mins").innerHTML = minutes + " :";
    document.getElementById("secs").innerHTML = seconds;

    for(var i = 0; i < colons.length; i++) {
        colons[i].innerHTML = ":";
    }

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("mins").innerHTML = "";
        document.getElementById("secs").innerHTML = "";
        document.getElementById("end").innerHTML = "TIME UP!!";
    }

    }, 100)

    