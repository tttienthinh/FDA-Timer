elem = document.getElementById("timer")
elem_used_time = document.getElementById("used_time")
time = 0;
running = false;
time_6 = [60, 5*60, 6*60, 6*60+15];
time_5 = [60, 4*60, 5*60, 5*60+15];
used_time = 6;
liste_time = time_6;
const audio = new Audio();
audio.src = "./bell.mp3";

change = function () {
    running = !(running);
};
restart = function() {
    running = false;
    time = 0;
    elem.innerHTML =  "0:00";
};
change_used_time = function() {
    if (used_time == 6) {
        used_time = 5;
        liste_time = time_5;
    } else {
        used_time = 6;
        liste_time = time_6;
    }
    elem_used_time.innerHTML = used_time + " mins"
};

document.body.onkeyup = function(e) {
    if (e.key == "Enter"   
    ) {
      change()
    }
  }

setInterval(function () {
    if (running) {
        time += 1;
        mins = Math.floor(time/60);
        if (liste_time.includes(time) || time > liste_time[3]) {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        };
        if ((time%60) < 10) {
            secs = "0" + (time%60)
        } else {
            secs = time%60

        }
        elem.innerHTML =  mins + ":" + secs
    }
}, 1000);

