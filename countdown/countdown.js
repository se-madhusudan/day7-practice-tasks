let inp = document.getElementById('seconds');
let setBtn = document.getElementById('setTimer');
let resetBtn = document.getElementById('resetTimer');
let countDown = document.getElementById('countDown');
let seconds;
let interval;
setBtn.addEventListener('click', () => {
    seconds = parseInt(inp.value)
    countDown.innerText = seconds; //display initial value;
    startTimer(); // to start interval
    
});

resetBtn.addEventListener('click', () => {
    countDown.innerText = '';
    stopTimer(); //to clear interval 
});

const startTimer = () => {
    interval = setInterval(() => {
        seconds -= 1;
        if(seconds > 0) {
            countDown.innerText = seconds;
        } else {
            countDown.innerText = "Time's up!";
            clearInterval(interval);  //clear interval after time up
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval); //clear interval when reset btn clicked
}