//---------------- BG Sounds ----------------
const environmentIsPressed = [
    forestIsPressed = false,
    rainIsPressed = false,
    cafeteriaIsPressed = false,
    fireIsPressed = false
]
const environments = [
    forestBtn = document.querySelector('#forestBtn'),
    rainBtn = document.querySelector('#rainBtn'),
    cafeteriaBtn = document.querySelector('#cafeteriaBtn'),
    fireBtn = document.querySelector('#fireBtn')
]
const sounds = [
forestSound = new Audio("assets/Floresta.wav"),
rainSound = new Audio("assets/Chuva.wav"),
cafeteriaSound = new Audio("assets/Cafeteria.wav"),
fireSound = new Audio("assets/Lareira.wav")
]

function clearSelection(){
    for (const i of environments) {
        i.classList.add('unpressed')
        i.classList.remove('pressed')        
    }
    
    for (const j of sounds) {
        j.pause()
    }

    forestIsPressed = false
    rainIsPressed = false
    cafeteriaIsPressed = false
    fireIsPressed = false
}
function toggleSelection(environment, isPressed, sound){
    if(isPressed){
        environment.classList.remove('pressed')
        environment.classList.add('unpressed')
        
        isPressed = false

        sounds[sound].pause()
        
    } else{
        clearSelection()

        environment.classList.add('pressed')
        environment.classList.remove('unpressed')
        
        isPressed = true    

        sounds[sound].play()
        sounds[sound].loop = true
    }

    return isPressed
}

forestBtn.addEventListener('click', function(){     
    forestIsPressed = toggleSelection(forestBtn, forestIsPressed, 0)
})
rainBtn.addEventListener('click', function(){
    rainIsPressed = toggleSelection(rainBtn, rainIsPressed, 1)
})
cafeteriaBtn.addEventListener('click', function(){
    cafeteriaIsPressed = toggleSelection(cafeteriaBtn, cafeteriaIsPressed, 2)
})
fireBtn.addEventListener('click', function(){
    fireIsPressed = toggleSelection(fireBtn, fireIsPressed, 3)
})


