const flightPath={
    curviness:1.5,
    autoRotate:true,
    values:[

        {x:200,y:50},
      
        {x:400,y:200},
       
       
        
        
    ]
}
const tween=new TimelineLite();

tween.add(
    TweenLite.to(".sun",8,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
);