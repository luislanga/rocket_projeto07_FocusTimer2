//---------------- Timer ----------------
import { Timer } from "./timer.js"

let time = 1000
let counter
let mm = 25
let ss = 0
let setMin = 25

const minutes = document.querySelector('#minutes'),
      seconds = document.querySelector('#seconds'),
      addBtn = document.querySelector('#addBtn'),
      subtractBtn = document.querySelector('#subtractBtn'),
      playBtn = document.querySelector('#playBtn'),
      stopBtn = document.querySelector('#stopBtn')


const timer = Timer({        
    mm,
    ss,
    playBtn, 
    counter, 
    time, 
    setMin, 
    minutes, 
    seconds
})

addBtn.addEventListener('click', function(){
    timer.add5()
})
subtractBtn.addEventListener('click', function(){
    timer.subtract5()
})
playBtn.addEventListener('click', function(){ 
    timer.start()
} )
stopBtn.addEventListener('click', function(){ 
    timer.stop()
} )
