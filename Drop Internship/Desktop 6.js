const flightPath={
    curviness:1.5,
    autoRotate:true,
    values:[

        {x:100,y:-100},
        {x:400,y:-250},
       
        
        
    ]
}
const tween=new TimelineLite();

tween.add(
    TweenLite.to(".sun",6,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
);