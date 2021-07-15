let h1 = document.querySelector(".Numbers h1");
let am_pm = document.querySelector("#am_pm");
let stopwatch = document.querySelector(".stopwatch");
let stopwatch_btn = document.querySelector("#stopwatch");
let countdown_btn = document.querySelector("#countdown");
let clock = document.querySelector("#clock");
let date_show = document.querySelector("#date");
let hr_btn = document.querySelector("#hr");
let hr_btn_two = document.querySelector("#hr_two");
let show_day = document.querySelector(".WeekDays");
let show_day_span = document.querySelector(".WeekDays span");
let barStatus = document.querySelector("#barStatus");
let seconds = document.querySelector("#seconds");
let tens = document.querySelector("#tens");
let minitue = document.querySelector("#minitues");
let type = document.querySelector(".Type");
let control = document.querySelector(".control");
let Start = document.querySelector(".Start");
let Pause = document.querySelector(".Pause");
let Stop = document.querySelector(".Stop");
let AlarmInput = document.querySelector(".AlarmInput");
let AlarmInput_input = document.querySelector("input");
let count_control = document.querySelector(".count-control");
let count_Start = document.querySelector(".count-Start");
let count_Pause = document.querySelector(".count-Pause");
let count_Stop = document.querySelector(".count-Stop");
let count = document.querySelector(".count");
let count_min = document.querySelector("#count_min");
let count_secs = document.querySelector("#count_sec");

// Date

let current_date = () => {
    let date;
    date = new Date();
    let Day;
    Day = date.getDay();
    let today_date;
    today_date = date.getDate();
    let Year = date.getFullYear();
    let Month = date.getMonth();

    return (date_show.innerHTML = `${today_date}/${Month}/${Year}`);
};

current_date();

// Day

let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI"];
let date;
date = new Date();
let Day;
Day = date.getDay();
let y = "";
let x = () => {
    day.map((val, index) => {
        if (index == Day) {
            y += `<span class="active">${val}</span>`;
        } else {
            y += `<span>${val}</span>`;
        }
    });

    return y;
};

show_day.innerHTML = x();

// Date Create

function clock12() {
    let date;
    date = new Date();
    let hours;
    hours = date.getHours();
    let Mins;
    Mins = date.getMinutes();
    let Sec;
    Sec = date.getSeconds();
    // Minites Set Up

    if (Mins < 10) {
        Mins = `0${Mins}`;
    }

    // Seconds Set Up

    if (Sec < 10) {
        Sec = `0${Sec}`;
    }

    // Hours Set Up
    if (hours > 12) {
        hours = hours - 12;
    } else {
        hours = hours;
    }

    return (h1.innerHTML = `${hours}:${Mins}:${Sec}`);
}

let sss;
let ss;
hr_btn.onclick = (event) => {
    event.preventDefault();
    hr_btn.classList.add("active");
    hr_btn_two.classList.remove("active");
    sss = setInterval(() => {
        clock12();
    }, 1000);
    clearInterval(ss);
};

clock.onclick = (event) => {
    event.preventDefault();
    hr_btn.classList.add("active");
    hr_btn_two.classList.remove("active");
    sss = setInterval(() => {
        clock12();
    }, 1000);
    clearInterval(ss);
};

// Stopwatch Clock

stopwatch_btn.onclick = (event) => {
    h1.replaceWith(stopwatch);
    type.replaceWith(control);
    stopwatch.style.display = "block";
    control.style.display = "block";
    Stop.style.color = "#064420";
    Start.style.color = "#064420";
    Pause.style.color = "#064420";
    clearInterval(sss);
    clearInterval(ss);
};

// Countdown Icon  Click

countdown_btn.onclick = (event) => {
    h1.replaceWith(AlarmInput);
    type.replaceWith(count_control);
    count_control.style.display = "block";
    AlarmInput.style.display = "block";
    count_Stop.style.color = "#064420";
    count_Start.style.color = "#064420";
    count_Pause.style.color = "#064420";
    clearInterval(sss);
    clearInterval(ss);
};

// Function will be exticute whene Start btn in click

let interval;
let ten = 00;
let second = 00;
let minit = 00;

let startTimer = () => {
    ten++;
    if (ten < 9) {
        tens.innerHTML = "0" + ten;
    }

    if (ten > 9) {
        tens.innerHTML = ten;
    }

    if (ten > 60) {
        second++;
        seconds.innerHTML = "0" + second;
        ten = 0;
        tens.innerHTML = "0" + ten;
    }

    if (second > 9) {
        seconds.innerHTML = second;
    }

    if (second > 60) {
        minit++;
        minitue.innerHTML = "0" + minit;
        second = 0;
        seconds.innerHTML = "0" + second;
    }

    if (minit > 9) {
        minitue.innerHTML = minit;
    }
};

Start.onclick = () => {
    interval = setInterval(startTimer);
};

Stop.onclick = () => {
    clearInterval(interval);
};

Pause.onclick = () => {
    clearInterval(interval);
    ten = 00;
    second = 00;
    tens.innerHTML = ten;
    seconds.innerHTML = second;
};

//  This function will exicute whene Countdown Start
count_Start.onclick = () => {
    AlarmInput_input.replaceWith(count);
    count_interval = setInterval(countDown, 1000);
};

let count_val = AlarmInput_input.value;

let countDown = () => {
    let count_sec = count_val * 60;
    if (count_val < 10) {
        count_min.innerHTML = "0" + count_val;
    }
    count_min.innerHTML = count_val;
    count_secs.innerHTML = count_sec;

    count_sec--;
};

// 12 Hours Clock

function clock24() {
    let date;
    date = new Date();
    let hours;
    hours = date.getHours();
    let Mins;
    Mins = date.getMinutes();
    let Sec;
    Sec = date.getSeconds();
    // Minites Set Up

    if (Mins < 10) {
        Mins = `0${Mins}`;
    }

    // Seconds Set Up

    if (Sec < 10) {
        Sec = `0${Sec}`;
    }
    return (h1.innerHTML = `${hours}:${Mins}:${Sec}`);
}

hr_btn_two.onclick = (event) => {
    event.preventDefault();
    hr_btn_two.classList.add("active");
    hr_btn.classList.remove("active");
    ss = setInterval(() => {
        clock24();
    }, 1000);
    clearInterval(sss);
};

clock12();
sss = setInterval(() => {
    clock12();
}, 1000);
clearInterval(ss);

// Am/Pm

let amPm = () => {
    let date;
    date = new Date();
    let hours;
    hours = date.getHours();
    // Hours Set Up
    if (hours > 12) {
        am = "PM";
        hours = hours - 12;
    } else {
        hours = hours;
        am = "AM";
    }

    return (am_pm.innerHTML = `${am}`);
};

// Progress bar

let progress = () => {
    let date;
    date = new Date();
    sec = date.getSeconds();

    sec++;
    barStatus.style.width = Math.floor((100 * sec) / 60) + "%";

    if (sec == 0) {
        barStatus.style.width = "0%";
    }
};

let prointerval = setInterval(progress);