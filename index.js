var allButtons=document.querySelectorAll(".drum");

for(i=0; i<allButtons.length; i++)
{
    allButtons[i].addEventListener("click", handleClick);
}


function handleClick()
{
    playSound(this.innerHTML);
    applyAnimation(this.innerHTML);
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    applyAnimation(event.key);
});

function playSound(keyPRESS)
{
    switch(keyPRESS)
    {
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        
    }
}

function applyAnimation(keyPRESS)
{
    var ele=document.querySelector('.'+keyPRESS);
    ele.classList.add("pressed");
    setTimeout(function(){
        ele.classList.remove("pressed");
    }, 250);
}