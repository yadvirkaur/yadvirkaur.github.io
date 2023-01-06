var sound = new Audio("tink.wav");
sound.loop = true;

const displayTime = document.querySelector(".clock_time_display");
const stopwatchDisplayTime = document.querySelector(".stop_time_display");
const formGroup = document.querySelector(".form-group");
const displayhour = document.querySelector('.hour');
const displaymin = document.querySelector(".min");
const displaysec = document.querySelector(".sec");
const displaymillisec = document.querySelector(".millisec");
const displayunits = document.querySelectorAll(".units");
const displayampm = document.querySelector(".ampm");
const clockBtn = document.querySelector(".Clock_btn");
const alarmBtn = document.querySelector(".alarm_btn");

const clock=document.querySelector('.Clock');
const timer=document.querySelector('.Timer');
const alarm=document.querySelector('.Alarm');
const stopwatch=document.querySelector('.Stopwatch');
const startBtn = document.querySelector('.start_btn');
const stopBtn = document.querySelector('.stop_btn');

let selectHour= document.querySelector('.Alarm_hour');
let selectMin= document.querySelector('.Alarm_min');
let selectAmpm=  document.querySelector('.Alarm_ampm');

const timerStartBtn = document.querySelector('.timer_start_btn');
const timerStopBtn = document.querySelector('.timer_stop_btn');
const timerDisplay = document.querySelector('.display__time-left');
let SelectTimerHour= document.querySelector('.timer_hour');
let SelectTimerMin= document.querySelector('.timer_min');
let SelectTimersec=  document.querySelector('.timer_sec');


function color(){
    document.querySelector('.clock_block').style.display='none';
    document.querySelector('.alarm_block').style.display='none';;
    document.querySelector('.stop_block').style.display='none';
    document.querySelector('.timer_block').style.display='none';

    document.querySelector('.icon-alarm ').style.fill= 'grey';
    document.querySelector('.icon_name_alarm ').style.color= 'grey';
    document.querySelector('.icon-clock ').style.fill= 'grey';
    document.querySelector('.icon_name_clock ').style.color= 'grey';
    document.querySelector('.icons-icon ').style.fill= 'grey';
    document.querySelector('.icon_name_stopwatch ').style.color= 'grey';
    document.querySelector('.icon-timer ').style.fill= 'grey';
    document.querySelector('.icon_name_timer ').style.color= 'grey';
    }

//Alarm select options:-----------------------------------------------------------

for (let i = 12; i >0; i--) {
    i = i < 10 ? `0${i}` : i;
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    document.querySelector('.Alarm_hour').append(option);
}
for (let i = 59; i >=0; i--) {
    i = i < 10 ? `0${i}` : i;
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    document.querySelector('.Alarm_min').append(option);
  }

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    const option = document.createElement("option");
    option.value = ampm;
    option.innerText = ampm;
    document.querySelector('.Alarm_ampm').append(option);    
}




 //Clock function------------------------------------------------------------------------
 window.onload = onloadClock;
 
 clock.addEventListener('click', onloadClock)
 
 function onloadClock(){
    color();
    document.querySelector('.clock_block').style.display='block';
    clockBtn.style.opacity=0;
    document.querySelector('.icon-clock ').style.fill= '#1a73e8';
    document.querySelector('.icon_name_clock ').style.color= '#1a73e8';
}

 setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    displayTime.innerText = `${h}:${m}:${s} ${ampm}`;
    let match=`${h}:${m}:${ampm}`;
    if (alarmTime === match){
        sound.play();
    }
});


//Alarm function----------------------------------------------------------------------------------

alarm.addEventListener('click',()=>{
    color();
    document.querySelector('.alarm_block').style.display='block';
    document.querySelector('.icon-alarm ').style.fill= '#1a73e8';
    document.querySelector('.icon_name_alarm ').style.color= '#1a73e8';
    alarmBtn.innerText = "Set Alarm"; 
    alarmBtn.style.color= '#1a73e8';
    alarmBtn.addEventListener("click", setAlarm);
 });

let alarmTime, isAlarmSet;

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = ""; //set alarmtime to empty
        sound.pause();
        selectHour.disabled = false;
        selectMin.disabled = false;
        selectAmpm.disabled = false;
        alarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }
    
    let time = `${selectHour.value}:${selectMin.value}:${selectAmpm.value}`;
    alarmTime = time;
    isAlarmSet = true;

    selectHour.disabled = true;
    selectMin.disabled = true;
    selectAmpm.disabled = true;
   alarmBtn.innerText = "Clear Alarm";
}


// Function for Stopwatch--------------------------------------------------------

stopwatch.addEventListener('click',stopwatchStart);
 
function stopwatchStart(){
  color();
  document.querySelector('.stop_block').style.display='block';
  document.querySelector('.icons-icon ').style.fill= '#1a73e8';
  document.querySelector('.icon_name_stopwatch ').style.color= '#1a73e8';
  startBtn.style.background= '#1a73e8';
  startBtn.style.color= '#fff';
  stopBtn.style.color= '#1a73e8';
  let [milliseconds,seconds,minutes,hours] = [0,0,0,0];

  let int = null;
  startBtn.addEventListener("click", () =>{
      if (startBtn.textContent === "START") {
        if(int!==null){
            clearInterval(int);
        }
        startBtn.textContent = "STOP";
        stoptimer=true;
        //stopwatch();
        int= setInterval(stopwatch, 10);
     } 
      else {
        startBtn.textContent = "START";
        stoptimer=false;
      }
  });

  stopBtn.addEventListener('click', ()=>{
      startBtn.textContent = "START";   
      stoptimer=false;
      [milliseconds,seconds,minutes,hours] = [0,0,0,0];
      stopwatchDisplayTime.innerHTML = '00:00:00:00 ';
    });
  
  function stopwatch(){
     if(stoptimer){
        milliseconds++;
      if(milliseconds == 100){
          seconds++;
          milliseconds = 0;
          if(seconds == 60){
              seconds = 0;
              minutes++;
              if(minutes == 60){
                  minutes = 0;
                  hours++;
              }
          }
      }
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        stopwatchDisplayTime.innerHTML = ` ${h}:${m}:${s}:${ms}`;
        //timerRef.innerHTML=`${displayhour.value=h}:${displaymin.value=m}:${displaysec.value=s}:${displaymillisec.value=ms}`
        //setTimeout(stopwatch, 10);  
        }
    } 
}
    

//Timer select options----------------------------------------------------------

for (let i = 0; i <=99; i++) {
    i = i < 10 ? `0${i}` : i;
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    SelectTimerHour.append(option);
}
for (let i = 0; i <=59; i++) {
    i = i < 10 ? `0${i}` : i;
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    SelectTimerMin.append(option);
  }
for (let i = 0; i <=59; i++) {
    i = i < 10 ? `0${i}` : i;
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    SelectTimersec.append(option);
  }


//Timer functions--------------------------------------------------------------------

timer.addEventListener('click',()=>{ 
    color();
    document.querySelector('.timer_block').style.display='block';

  document.querySelector('.icon-timer ').style.fill= '#1a73e8';
  document.querySelector('.icon_name_timer ').style.color= '#1a73e8';
  timerStartBtn.style.color= '#1a73e8';
  timerStopBtn.style.color= '#1a73e8';

  timerStartBtn.addEventListener("click", () =>{
    if (timerStartBtn.textContent === "START") {
      startTimer();
      if(seconds){ //Start button will change to pause only if user enter time
        timerStartBtn.textContent = "PAUSE";
    }
  } 
    else if (timerStartBtn.textContent === "PAUSE"){
      sound.pause();
      if(remainingTime){ 
        timerStartBtn.textContent = "RESUME";
      }
      else{
        timerStartBtn.textContent = "START";
      }
      clearInterval(countdown);
    }
    else if (timerStartBtn.textContent === "RESUME"){
      timerStartBtn.textContent = "PAUSE";
      timers(remainingTime);
    }
  });

  timerStopBtn.addEventListener('click', ()=>{
    timerStartBtn.textContent = "START";   
    SelectTimerHour.value=`00`;
    SelectTimerMin.value=`00`;
    SelectTimersec.value=`00`;
    timerDisplay.textContent = `00:00:00`;
    seconds=0;
    clearInterval(countdown);
    sound.pause();
  });
});

let seconds=0;
function startTimer(){
  let h=SelectTimerHour.value*60*60;
  let m=SelectTimerMin.value*60;
  let s=SelectTimersec.value*1;
  seconds =  h+m+s; 
  timers(seconds);
}


let countdown;
let remainingTime;

function timers(seconds) {
    if(seconds===0){
      alert('Enter a valid value!');
    }
    else{
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we should stop it!
      if(secondsLeft < 0) {
        clearInterval(countdown);
        sound.play();
        return;
      }
      // display it
      displayTimeLeft(secondsLeft);
      remainingTime =secondsLeft;
     }, 1000);
}}


function displayTimeLeft(secondss) {
  const hours = Math.floor(secondss / 3600);
  const remainderminutes = Math.floor((secondss % 3600)/60);
  const remainderSeconds = secondss % 60;
  const display = `${hours < 10 ? '0' : '' }${hours}:${ remainderminutes < 10 ? '0' : '' }${remainderminutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  timerDisplay.textContent = display;
 }
