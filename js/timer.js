export function Timer(
    {
        mm,
        ss,
        playBtn, 
        counter, 
        time, 
        setMin, 
        minutes, 
        seconds
    }) {

    
function start() {
        if(mm >= 1){
            mm--
            ss = 59
            
            setMinsAndSecs()
            playBtn.disabled = true;
            
            counter = setInterval(() => {timer()}, time)
        }
}
function stop(){
        clearInterval(counter)
        mm = setMin
        ss = 0
        
        setMinsAndSecs()
        playBtn.disabled = false;
}
function timeout(){
        clearInterval(counter)
        playBtn.disabled = false;
}
function timer(){
        ss--
        if (ss == -1){
            ss = 59
            mm--
        }
        
        if (ss == 0 && mm ==0){
        timeout()
    }
    
    setMinsAndSecs()
    
}
function setMinsAndSecs(){
    minutes.innerText = String(mm).padStart(2,"0")
    seconds.innerText = String(ss).padStart(2,"0") 
}
function add5(){
    mm = mm + 5
    setMinsAndSecs()
}
function subtract5(){
    if(mm>=5){
        mm = mm - 5
        
        setMinsAndSecs()
    }
}

return{
    start,
    stop,
    add5,
    subtract5
}

}