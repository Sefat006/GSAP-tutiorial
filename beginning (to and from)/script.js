gsap.to("#box1",{ // to means x:0 theke x:1000 e jabe
    x:1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%"
})
gsap.from("#box2",{ //from means x:1000 theke asbe z:0 te
    x:1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    repeat: -1, //it will continue the process(infinity)
    yoyo: true, // come and go
    // backgroundColor: "blue",
    // borderRadius: "50%"
})

gsap.from("h1",{
    // color: "red",
    opacity: 0, //invisible theke visible hobe
    y:50,
    duration: 2,
    delay: 1,
    stagger:1,
})