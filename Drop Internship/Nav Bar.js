let w = outerWidth;
let h=outerHeight
let nw=(45*h)/100
console.log(w)
console.log(h)
console.log(nw)

let nw2=(25*w)/100
console.log(nw2)
let newWidth=w-nw2
console.log(newWidth)
function parcelMove(){
    if(w>600){
        gsap.to(".parcel",{
            x:700,
            duration:3
        })  
    }
    else{
      console.log("hy")
      gsap.to(".parcel",{
        y:-nw,
        duration:3
    })  
    }
    

}

