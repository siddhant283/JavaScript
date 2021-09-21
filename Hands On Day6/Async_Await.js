//Promise Declaration;

const myFirstPromise1 = new Promise((resolve, reject) => {
    const condition = true;
    if(condition) {
         setTimeout(function(){
             resolve("Promise1 with a timeout of 3-seconds is resolved!"); // fulfilled
        }, 3000);
    } else {
        reject('Promise2 is rejected!');
    }
});

const myFirstPromise2 = new Promise((resolve, reject) => {
    const condition = true;
    if(condition) {

      setTimeout(function(){
          resolve("Promise2 with a timeout of 2-seconds is resolved!"); // fulfilled
     }, 2000); // fulfilled

    } else {
        reject('Promise2 is rejected!');
    }
});

const myFirstPromise3 = new Promise((resolve, reject) => {
    const condition = true;
    if(condition) {

             resolve("Promise3 with no timeout is resolved!"); // fulfilled

    } else {
        reject('Promise2 is rejected!');
    }
});

//Executing using promise

const demoPromise1= function() {


  //Promise1 called
  myFirstPromise1
  .then((successMsg) => {
      console.log("Asynchronous:" + successMsg + "\n \n");
  })
  .catch((errorMsg) => {
      console.log("Error:" + errorMsg);
  })

//Promise2 called
  myFirstPromise2
  .then((successMsg) => {
      console.log("Asynchronous:" + successMsg);
  })
  .catch((errorMsg) => {
      console.log("Error:" + errorMsg);
  })

//Promise3 Called
  myFirstPromise3
  .then((successMsg) => {
      console.log("Asynchronous:" + successMsg);
  })
  .catch((errorMsg) => {
      console.log("Error:" + errorMsg);
  })
}

console.log('Execution using Promises \n \n');
demoPromise1();


//Async-Await


const demoPromise2= async function() {

  try {

    //Promise1 called
    result1 = await myFirstPromise1;
    console.log("Execution using Async/Await \n \nSynchonous: " + result1);

   //Promise2 called
    result2 = await myFirstPromise2;
    console.log("Synchronous: "+result2);

  //Promise3 called
    result3 = await myFirstPromise3;
    console.log("Synchronous: "+result3);

  } catch (e) {

    console.log(e.message);

  } finally {
    console.log('Executed in Synchronous Way');
  }


}

demoPromise2();
