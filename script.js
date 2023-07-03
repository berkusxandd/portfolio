var frame = 0;
document.getElementById("linkstab").style.display = "none";

let beSprites = ["dino_be/me.png" , "dino_be/me1.png" , "dino_be/me2.png" , "dino_be/me.png"];

let character = document.getElementById("character");


setInterval(changeSprite , 100);

function changeSprite(){
    
    if(frame !== 3)
    {
    frame += 1;
    }else{
        frame = 0;
    }
    
    setSprite(frame);

}

function setSprite(currentFrame){
    character.src = beSprites[currentFrame];
}

function linksTab(){
        var x = document.getElementById("linkstab");

        if(x.style.display ==="none"){
          x.style.display="block";
        }else{
          x.style.display="none";
        }
}