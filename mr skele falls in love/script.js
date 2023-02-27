//sets variables and then getElementById to link them to their elements on the stylesheet
var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("score")
var yourScore = 0

//listens for the block to do it's animation and every time it does, adds one to yourScore
block.addEventListener('animationiteration', () => { yourScore++; 
//makes the textContent of the element score display yourScore 
    document.getElementById("score").textContent = yourScore;
});

//function jump checks to see if the class animate is added, adds if it isn't, changes to jump sprite image, then removes it after 500ms and changes to stand sprite, miss-spelled "strand" in the files
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate")
    character.style.background="url(jumpskele.png)"
    setTimeout(function(){
        character.classList.remove("animate");
        character.style.background="url(strandskele.png)"
    },500);
    
}

//var checkDead determines if the character and block are touching and ends the game if they are
var checkDead = setInterval(function(){
    let characterTop =parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<50 && blockLeft>30 && characterTop>=130){
        block.style.animation="none"
        alert("Oh no! Mr. Skele fell in love! But at least he held off for" + " " + yourScore + " " + "days.");
    }
}, 10);

// this is supposed to make the block enemy go faster, there's a better way to do this.
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