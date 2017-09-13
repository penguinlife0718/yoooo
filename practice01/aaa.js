function playSound(e){
    const keyCode=e.keyCode;
    const key = document.querySelector(`div[data-key='${keyCode}']`)
    const audio = document.querySelector(`audio[data-key='${keyCode}']`)
    console.log(key);
    key.classList.add('playing');
    key.classList.add('playing2');
    audio.play();
    setTimeout(()=>key.classList.remove('playing'),1000)
    setTimeout(()=>key.classList.remove('playing2'),1000)
    
}
function play(e){
    const key = document.querySelector(`div[data-key='${e}']`)
    const audio = document.querySelector(`audio[data-key='${e}']`)
    console.log(key);
    key.classList.add('playing');
    audio.play();
}

function removePlaying(e){
    if(e.propertyName == "box-shadow"){
        this.classList.remove('playing');
    console.log(e.propertyName);
    
    }

}
const keys = document.querySelectorAll('.key');
// keys.forEach(function(key){key.addEventListener('transitionend',removePlaying)})



window.addEventListener('keydown',playSound)




