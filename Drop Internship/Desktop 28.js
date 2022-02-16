let w = window.innerWidth;
gsap.registerPlugin(ScrollTrigger);

if(w>600){
    gsap.to(".parcel",{
        y:850,
        duration:4,
        scrollTrigger:{
            trigger:".parcel",
            start:"top 20% center",
            scrub:4,
            toggleActions:"restart none none reverse",
            
        },
        
    })
}
else if(w<600) {
    gsap.to(".parcel",{
        y: 230,
        duration:4,
        scrollTrigger:{
            trigger:".parcel",
            start:"top 20% center",
            scrub:4,
            toggleActions:"restart none none reverse",
            
        },
        
    })
}
