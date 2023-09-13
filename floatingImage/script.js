
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
addEventListener("mousemove", throttleFunction(()=>{
   var div= document.createElement("div")
    console.log(div);
} , 500));  