
const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}

document.querySelector("#box").
addEventListener("mousemove", throttleFunction((dets)=>{
   var div= document.createElement("div")
   div.classList.add("imagediv")
   div.style.left=dets.clientX+"px"
   div.style.top=dets.clientY+"px" 

   var img=document.createElement("img")
   img.setAttribute("src","https://images.unsplash.com/photo-1694309984301-60e69e095ae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60")
   div.appendChild(img)
 
   document.body.appendChild(div)
  
   gsap.to(img,{
    y:"0",
    ease:Power1,

    duration:.6,
  })

  gsap.to("img",{
    y:"100%",
    // duration:2,
    delay:.6,
    ease:Power2
  })

  setTimeout(function(){
    div.remove()
  },1000)


} , 500));  

