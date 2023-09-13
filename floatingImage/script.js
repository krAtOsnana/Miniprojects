
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

function getImage(){
  var arr=[
    "https://images.unsplash.com/photo-1682685797736-dabb341dc7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://plus.unsplash.com/premium_photo-1694074422763-9ddc6d3ae085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1694309984301-60e69e095ae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1694501898581-49fd192e65fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1694057442309-bfe467bff9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1694501898553-5e8ee216012c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1694164108456-e21c7e575a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1694587971464-0c03c44e2899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1694428344133-f3f35568ceb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1694098679485-fdaeb20aadde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  ]
  var num=Math.floor(Math.random()*10)
  return arr[num]
}

document.querySelector("#box").
addEventListener("mousemove", throttleFunction((dets)=>{
   var div= document.createElement("div")
   div.classList.add("imagediv")
   div.style.left=dets.clientX+"px"
   div.style.top=dets.clientY+"px" 

   var img=document.createElement("img")
   img.setAttribute("src",getImage())
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

