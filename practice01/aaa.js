function playSound(e){
    const keyCode=e.keyCode;
    const key = document.querySelector(`div[data-key='${keyCode}']`)
    const audio = document.querySelector(`audio[data-key='${keyCode}']`)
    console.log(key);
    key.classList.add('playing');
    audio.play();
}
function play(e){
    const key = document.querySelector(`div[data-key='${e}']`)
    const audio = document.querySelector(`audio[data-key='${e}']`)
    console.log(key);
    key.classList.add('playing');
    audio.play();
}
function removePlaying(e){
    if(e.propertyName == "transform"){
        this.classList.remove('playing');
    }
}
const keys = document.querySelectorAll('.key');
keys.forEach(function(key){key.addEventListener('transitionend',removePlaying)})


window.addEventListener('keydown',playSound)




