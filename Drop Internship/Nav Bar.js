let w = innerWidth;

console.log(w)

function parcelMove(){
    if(w>600){
        gsap.to(".parcel",{
            x:720,
            duration:3
        })  
    }
    else{
      console.log("hy")
      gsap.to(".parcel",{
        y:-380,
        duration:3
    })  
    }
    

}
  

