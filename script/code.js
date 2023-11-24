//const input = document.querySelector['data-min']

let minutes = +document.getElementsByTagName('input')
console.log(Math.floor(minutes/60))

let results 

function min2Sec(minutes){             
    let min = minutes.value;
    // we need to convert age to days lived basically
    let seconds = min / 60

    results.textContent = daysLived
//let seconds = (minutes * 60)
//minutes = (seconds / 60)
}

const input = document.querySelector('[data-display]')
input.addEventListener('click', ()=>{ 
    min2Sec()
    
})

min2Sec()


// ---- {seconds / 60 = <minutes>  |----|  minutes * 60 = <seconds></seconds>}
