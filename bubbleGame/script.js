function makeBubble(){
    var temp=""
for(var i=0;i<18*8;i++){
    var num=Math.floor((Math.random())*10)
    temp+=`<div class="bubble">${num}</div>`
}
document.querySelector("#bottompanel").innerHTML=temp
}
makeBubble()