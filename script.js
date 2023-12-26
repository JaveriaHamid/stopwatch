let minutes = document.querySelector('.mins');
let seconds = document.querySelector('.secs');
let milliSeconds = document.querySelector('.msecs');
let stopBtn = document.querySelector('.stop');
let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');

let mins = 0;
let secs = 0;
let msecs = 0;

let timer = null;

startBtn.addEventListener('click', function(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 10); 
});

stopBtn.addEventListener('click', function(){
    clearInterval(timer); 
});

resetBtn.addEventListener('click', function(){
    clearInterval(timer);
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milliSeconds.innerHTML = "00";
    msecs = secs = mins = 0;
});


function startTimer(){
   msecs++;
   if(msecs == 100){
      msecs = 0;
      secs++;

      if(secs == 60){
        secs = 0;
        mins++;
      };
   }
   
   let msecsOutput = msecs < 10 ? `0${msecs}` : msecs; 
   let secsOutput = secs < 10 ? `0${secs}` : secs; 
   let minsOutput = mins < 10 ? `0${mins}` : mins; 

   milliSeconds.innerHTML = msecsOutput;
   seconds.innerHTML = secsOutput;
   minutes.innerHTML = minsOutput;

}