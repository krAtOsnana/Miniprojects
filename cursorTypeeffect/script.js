var maindiv= document.querySelector("#main")
// var rect=document.querySelector("rect")
maindiv.addEventListener("mousemove",function(dets){
    // console.log(dets);
    gsap.to('#rect',{
        left:dets.clientX -35 +"px",
        top:dets.clientY-40 + "px",
        ease: Power3
    })
})  