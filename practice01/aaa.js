let score=0;
let colorButton=0;

(function changeScore(p){
    score +=p;
    document.querySelector('.score').innerHTML = ''+score;
})(0)

function play_Keyboard(e){
    const keyCode=e.keyCode;
    const key = document.querySelector(`div[data-key='${keyCode}']`)
    const audio = document.querySelector(`audio[data-key='${keyCode}']`)
    console.log(key);
    key.classList.add('playing');
    key.classList.add('playing2');
    audio.play();
    setTimeout(()=>key.classList.remove('playing','playing2'),1000)
    if(key.classList.contains('colorI')&& colorButton<9 ){
        key.classList.remove('colorI');
        colorButton-=1   
    }  
}
window.addEventListener('keydown',play_Keyboard)


function play_Click(e){
    const key = document.querySelector(`div[data-key='${e}']`)
    const audio = document.querySelector(`audio[data-key='${e}']`) 
    key.classList.add('playing');
    key.classList.add('playing2');
    audio.play();
    setTimeout(()=>key.classList.remove('playing','playing2'),1000)
    if(key.classList.contains('colorI')&& colorButton<9 ){
        key.classList.remove('colorI');
        colorButton-=1
    }
}



function gameStart(){

    const rands =[81,87,69,65,83,68,90,88,67];
    let index;
    let key;
    var start = setInterval(function(){
        // index = Math.random() * 100 % 9;
        // index = Math.floor(index)
        // key = document.querySelector(`div[data-key='${rands[index]}'`)
        // key.classList.add('colorI');
        do{
            index = Math.random() * 100 % 9;
            index = Math.floor(index)
            key = document.querySelector(`div[data-key='${rands[index]}'`)

        }while(key.classList.contains("colorI") );
        key.classList.add('colorI');

        colorButton+=1;
        
        if(colorButton==9){
            myStopFunction(start);
        }
        
    },500)


}

function myStopFunction(s) {

    clearInterval(s);
}

// function myrefresh()
// {
//      window.location.reload();
// }


// var run =self.setInterval("getIndex()",50)
// function getIndex(rands){
//     const rands =[81,87,69,65,83,68,90,88,67];
//     let index = Math.random * 100 % 9
//     return rands[index]; 
// }

// function removePlaying(e){
//     if(e.propertyName == 'box-shadow'){
//         this.classList.remove('playing');
//         this.classList.remove('playing2');
//     console.log(e.propertyName);
    
//     }

// }
// const keys = document.querySelectorAll('.key');
// keys.forEach(function(key){key.addEventListener('transitionend',removePlaying)})













// function play_Keyboard(e){
//     const keyCode=e.keyCode;
//     const key =document.querySelector(div[data-key='${keyCode}']);
//     const audio =document.querySelector(audio[data-key='${keyCode}']);
//     if(!audio){return;}
//     console.log(key);
//     key.classList.add('playing');
//     audio.currentTime=0;
//     audio.play();
//    }
   
//    function removePlaying(e){
//      if(e.propertyName=="transform"){
//        this.classList.remove('playing');
//      }
//    }
//    const keys=document.querySelectorAll('.key');
//    keys.forEach(function(key){
//      key.addEventListener('transitionend',removePlaying)
//    })
//      window.addEventListener('keydown',play_Keyboard);