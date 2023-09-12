var rect=document.querySelector("#rect")
rect.addEventListener("mousemove",function(dets){
    var rectangleLocation =rect.getBoundingClientRect();
    // console.log(rectangleLocation);
    var insideRectval=dets.clientX - rectangleLocation.left;
     if(insideRectval < rectangleLocation.width/2){
        var redColor=gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insideRectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4
        })
     }
     else{
        var blueColor=gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insideRectval);
        gsap.to(rect,{
            backgroundColor:`rgb(rgb(0,0,${blueColor})`,
            ease : Power4,
        })
     }
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
    })
})