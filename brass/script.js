var count = document.querySelectorAll(".drum").length;

for (var index = 0; index < count; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",function(){
        var buttoninnerHTML = this.innerHTML;
        makesound(buttoninnerHTML);
        buttonanimation(buttoninnerHTML);
    } 
        
    );
    
}

document.addEventListener("keydown", function(e){
    makesound(event.key);
    buttonanimation(event.key);

})

function makesound(key){
    
    console.log(key);
   switch (key) {
       case "w":
           var tom1 = new Audio("cornet.mp3");
           tom1.play();
           
           break;
        
       case "a":
        var tom2 = new Audio("French.mp3");
        tom2.play();
           
           break;
           
        case "s":
            var tom3 = new Audio("Trombon.mp3");
           tom3.play();
           
           break;

        case "d":
            var tom4 = new Audio("Trumpet.mp3");
           tom4.play();
           
           break;

        case "j":
            var crash = new Audio("Tuba.mp3");
           crash.play();
           
           break;

       default:
           console.log("Wrong Input");
           
   };
}

function buttonanimation(currentkey) {
    var activebutton = document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function (){
        activebutton.classList.remove("pressed");

    } , 100);
    
}