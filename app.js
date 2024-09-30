//variable for buttons

const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

//variable to store time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// creating variables for leaing zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//creating variables for setinterval and timerStatus

let timerInterval = null;
let timerStatus = "stopped";

//creating stopwatch function 

function stopWatch(){
    
    

    seconds++;

    if(seconds/60 ===1){
        seconds=0;
        minutes++;
        if(minutes/60 ===1){
            minutes=0;
            hours++;
        }
    }

    if(seconds<10){
        leadingSeconds = '0'+ seconds.toString();
    }else{
        leadingSeconds = seconds;
    }

    if(minutes<10){
        leadingMinutes = '0'+ minutes.toString();
    }else{
        leadingMinutes = minutes;
    }

    if(hours<10){
        leadingHours = '0'+ hours.toString();
    }else{
        leadingHours = hours;
    }


    let displayTimer = document.getElementById('timer');
    displayTimer.innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

// window.setInterval(stopWatch, 1);

startBtn.addEventListener('click', ()=>{

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        startBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }else{
        //clear the intervals
        window.clearInterval(timerInterval);
        startBtn.innerHTML= `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus="stopped";
    }

});

resetBtn.addEventListener('click', ()=>{
    window.clearInterval(timerInterval);
    seconds= 0;
    minutes =0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
    startBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
});