let w = window.innerWidth;

console.log(w)
document.getElementById("parcel").addEventListener("click",()=>{
    if(w>600){
    gsap.to(".parcel",{
        x:720,
        duration:3
    })  
}
else if(w<600){
  console.log("hy")
}
})

