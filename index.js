// window.addEventListener('keydown',function(e){
//     const audio = this.document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
//     if(!audio) return;
//     audio.currentTime = 0;
//     audio.play();
// });

// const drums =document.querySelectorAll(".drum");
// drums.forEach(function (drum){
//     drum.addEventListener("click",function (){
//         const key = drum.getAttribute("data-key");
//         playSound(key);
//     });
// });



function playSound(key){
const audio = document.querySelector(`audio[data-key="${key}"]`);
console.log(key);
console.log("audio found: "+ audio);

if(!audio) return;
audio.currentTime =0;
audio.play();
} 

document.addEventListener("keydown",function(e){
    playSound(e.key.toLowerCase())
});

const drums = document.querySelectorAll(".drum");
drums.forEach(function(drum) {
    drum.addEventListener("click",function(){
        const key = drum.getAttribute("data-key");
        console.log("clicked key:" , key);
        playSound(key);
    });
});

