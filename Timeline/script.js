var tl = gsap.timeline()

tl.to('#box1', {
    x: 1500,
    rotate: 360,
    duration: 1.5,
    delay: 1
})
tl.to('#box2', {
    x: 1500,
    duration: 1.5,
})

var tl_1 = gsap.timeline()

tl_1.from('h2', {
    y: -30,
    opacity: 0, // invisible to visible
    duration: 1,
    delay: 0.5,
})
tl_1.from('h3', {
    y: -30,
    opacity: 0, // invisible to visible
    duration: 1,
    stagger: 0.3 // ekta ekta kore asbe
})


tl_1.from('h1',{
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2 //scale dile same line er thekei opacity ashe,
})