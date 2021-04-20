let animationImage = document.getElementById('profile-animation');

// For animation behind profile pic
// this will rotate a png image behind profile pic
var profileAnimation = function(){
    let angle = 0;
    let flag = true;
    setInterval(function(){
        if(flag){
            angle += 5;
        }else{
            angle -= 5;
        }
        
        if(angle >= 355){
            flag = false
        }else if(angle <= 5){
            flag = true;
        }
        animationImage.setAttribute("style", "transform: rotate(" + angle + "deg)");
    }, 200);
}

profileAnimation();
