//const input = document.querySelector['data-min']

let minutes = +document.getElementsByTagName('input').value
console.log(Math.floor(minutes/60))

function min2Sec(minutes){             
    
//let seconds = (minutes * 60)
//minutes = (seconds / 60)

return(minutes * 60)
}

const input = document.querySelector('[data-display]')
input.addEventListener('input',()=>{ 
    min2Sec()
    
})
min2Sec()


// ---- {seconds / 60 = <minutes>  |----|  minutes * 60 = <seconds></seconds>}
