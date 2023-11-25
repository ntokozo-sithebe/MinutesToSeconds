


let minutes = document.getElementsByTagName('input')
let results = document.querySelector('[data-display]')
let btnSubmit = document.getElementById('submit')

let min2Sec = function(){       

    //minutes = minutes.value;
let seconds = minutes * 60
results.textContent = seconds

}

console.log(min2Sec)

btnSubmit.addEventListener('click', min2Sec);






// ---- {seconds / 60 = <minutes>  |----|  minutes * 60 = <seconds></seconds>}

