var set = document.getElementById('Set');
var del = document.getElementById('Delete');
var reset = document.getElementById('Reset');
var add = document.getElementById('Add');


var h1 = document.getElementById("hour1");
var m1 = document.getElementById("minute1");
var s1 = document.getElementById("sec1");

var h2 = document.getElementById("hour2");
var m2 = document.getElementById("minute2");
var s2 = document.getElementById("sec2");

//store a reference to the startTimer variable
var startTimer = null;


set.addEventListener('click', function(){
  //initialize the variable
  function startInterval(){

    h1.value = h2.value;
    m1.value = m2.value;
    s1.value = s2.value;

      startTimer = setInterval(function() {
          timer();
      }, 1000);
  }
  startInterval();
})


del.addEventListener('click', function(){

    h1.value = 0;
    m1.value = 0;
    s1.value = 0;
    stopInterval();
})

reset.addEventListener('click', function(){

    h2.value = 0;
    m2.value = 0;
    s2.value = 0;


})

add.addEventListener('click', function(){
  //initialize the variable
    h1.value = parseInt(h1.value) + parseInt(h2.value);
    m1.value = parseInt(m1.value) + parseInt(m2.value);
    s1.value = parseInt(s1.value) + parseInt(s2.value);

})


function timer(){
    if(h1.value == 0 && m1.value == 0 && s1.value == 0){
        h1.value = 0;
        m1.value = 0;
        s1.value = 0;
    } else if(s1.value != 0){
        s1.value--;
    } else if(m1.value != 0 && s1.value == 0){
        s1.value = 59;
        m1.value--;
    } else if(h1.value != 0 && m1.value == 0){
        m1.value = 60;
        h1.value--;
    }
    return;
}


function stopInterval() {
    clearInterval(startTimer);
}
