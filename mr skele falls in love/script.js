var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("score")
var yourScore = 0

block.addEventListener('animationiteration', () => { yourScore++; 
    document.getElementById("score").textContent = yourScore;
});


function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate")
    character.style.background="url(jumpskele.png)"
    setTimeout(function(){
        character.classList.remove("animate");
        character.style.background="url(strandskele.png)"
    },500);
    
}


var checkDead = setInterval(function(){
    let characterTop =parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<50 && blockLeft>30 && characterTop>=130){
        block.style.animation="none"
        alert("Oh no! Mr. Skele fell in love! But at least he held off for" + " " + yourScore + " " + "days.");
    }
}, 10);

// this is supposed to make the block enemy go faster
var speedUp = setInterval(function(){
    if (yourScore<5){return}
   
    if (yourScore>=5){
        block.style.animationDuration ="1.2s";
        }
    if (yourScore>=10){
        block.style.animationDuration ="3.2s";
        }
    if (yourScore>=13){
        block.style.animationDuration ="600ms";
    }
   
}, 20);