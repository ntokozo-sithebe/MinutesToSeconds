

/*
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

*/

let btnSubmit = document.getElementById('submit')

function min2Sec(){  

    let minutes = +document.querySelector('[data-min]').value
    let results = document.querySelector('[data-display]')
    //minutes = minutes.value;
//let min = parseInt(Input.value);         // takes the input and converts it
let seconds = minutes * 60;
results.textContent = `${minutes} minutes is equal to ${seconds} seconds`;
}

btnSubmit.addEventListener('click', min2Sec);


