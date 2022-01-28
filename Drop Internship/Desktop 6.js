const flightPath={
    curviness:1,
    autoRotate:true,
    values:[

        {x:100,y:-100},
        {x:200,y:-200},
        {x:300,y:-300},
        {x:600,y:-330},
        {x:700,y:-330},
       
        {x:1000,y:-300},
        
        {x:1200,y:-200},
        {x:1400,y:-100},
        
        
    ]
}
const tween=new TimelineLite();

tween.add(
    TweenLite.to(".sun",8,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
);