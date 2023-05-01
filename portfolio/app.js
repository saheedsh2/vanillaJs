


const timeDisplay = document.getElementById('time-display')

const text = 'Alert'

const time = 2000

function showAlert(){
    timeDisplay.style.marginTop = '150px'
}


setInterval(showAlert, time)