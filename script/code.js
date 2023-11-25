//const input = document.querySelector['data-min']

let minutes = document.getElementsByTagName('input')
let results = document.querySelector('[data-display]')
let btnSubmit = document.getElementById('submit')

let min2Sec = function(){       

let min = minutes.value;
let seconds = min*60;
results.textContent = seconds

}

btnSubmit.addEventListener('click', min2Sec)






// ---- {seconds / 60 = <minutes>  |----|  minutes * 60 = <seconds></seconds>}
