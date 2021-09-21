
var start = document.getElementById('Start');
var reset = document.getElementById('Reset');
var stop = document.getElementById('Stop');
var resume = document.getElementById('Resume');



var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;


start.addEventListener('click', function(){
  //initialize the variable
  function startInterval(){

      startTimer = setInterval(function() {
          timer();
      }, 1000);
  }
  startInterval();
});


reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})


stop.addEventListener('click', function(){

    stopInterval()
})

resume.addEventListener('click', function(){
  //initialize the variable
  function startInterval(){

      startTimer = setInterval(function() {
          timer();
      }, 1000);
  }
  startInterval();
});

function timer(){
    if(s.value != 59){
        s.value++;
    } else if(s.value == 59 && m.value !=59 ){
        s.value=0;
        m.value++;
    } else if(s.value == 59 && m.value == 59){
        s.value = 0;
        m.value=0;
        h.value++;
    }
    return;
}


function stopInterval() {
    clearInterval(startTimer);
}
