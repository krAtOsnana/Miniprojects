var timer=6;
var newHit;
var score=0;


function makeBubble(){
    var temp=""
for(var i=0;i<18*8;i++){
    var num=Math.floor((Math.random())*10)
    temp+=`<div class="bubble">${num}</div>`
}
document.querySelector("#bottompanel").innerHTML=temp
}

function runtimer()
{
    var timerint=setInterval(function(){
            if(timer>0){
                timer--;
                document.querySelector("#timerval").textContent=timer
            }
            else{
                clearInterval(timerint);
                document.querySelector("#bottompanel").innerHTML=`game over <br> final score ${score}`

                
            }
    },1000)

}

function getNewHit(){
    newHit=Math.floor(Math.random()*10)
    document.querySelector("#newHit").textContent=newHit
}

function incScore(){
    score+=10
    document.querySelector("#score").textContent=score
    
}

function hitOperation(){
   var pbtm= document.querySelector("#bottompanel");
    pbtm.addEventListener("click",function(dets){
      var hitBubble= Number(dets.target.textContent)
      if(hitBubble===newHit){
        makeBubble();
        getNewHit();
        incScore();
      }
    })
}

hitOperation();
getNewHit();
runtimer();
makeBubble();