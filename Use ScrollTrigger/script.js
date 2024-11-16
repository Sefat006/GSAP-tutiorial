gsap.from('#page1 #box', {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,
    
})
gsap.from('#page2 #box', {
    scale: 0,
    duration: 2,
    rotate: 360,
    //scrollTrigger: '#page2 #box', // page er samne asle e move korbe, no delay time
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: 'body',
        markers: true, //show the start and ending trigger point
        start: "top 60%" // show the trigger point at 60% top of the page
    }
})
gsap.from('#page3 #box', {
    scale: 0,
    opacity: 0,
    rotate: 720,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: 'body',
        markers: true, //show the start and ending trigger point
        start: "top 50%", // show the trigger point at 60% top of the page,
        scrub: 2, // scroll korar somoy e move korbe
    }
})
