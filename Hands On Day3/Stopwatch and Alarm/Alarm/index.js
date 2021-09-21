let hours = document.getElementById('hrs');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('sec');


let once = document.getElementById('Once');
let daily = document.getElementById('Daily');
let weekly = document.getElementById('Weekly');

let audio = new Audio('alarm.mp3')



let set = document.getElementById('Set');
let stop = document.getElementById('Stop');
let snooze = document.getElementById('Snooze');

function ringAlarm()
{
  audio.play();

  if(daily.checked)
  {
    setInterval(function() {
          audio.play();
      }, 86400000);
  }

  else if(weekly.checked)
  {
    setInterval(function() {
          audio.play();
      }, 604800000);
  }
}

set.addEventListener('click', function(){

  let alarmTime = new Date();
  alarmTime.setHours(hours.value);
  alarmTime.setMinutes(minutes.value);
  alarmTime.setSeconds(seconds.value);

  let presentTime = new Date();

  let differenceTime = alarmTime-presentTime;

  if(differenceTime>=0)
  {
    setTimeout(() => {
        ringAlarm();
    },differenceTime);
  }

  else {
    {
      alert('Please enter Valid Time');
    }
  }

});

stop.addEventListener('click', function(){

  audio.pause();

});

snooze.addEventListener('click', function(){

  audio.pause();

  setTimeout(() => {
      ringAlarm();
  },120000);

});
