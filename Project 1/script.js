var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
var imgDiv = document.querySelector('#img')


main.addEventListener('mousemove', function(dets){
    console.log(dets)
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})

//mouseenter means div er moddhe mouse enter korle e changes hobe
imgDiv.addEventListener('mouseenter', function(){
    gsap.to(cursor, {
        scale: 4
    })
})
imgDiv.addEventListener('mouseleave', function(){
    gsap.to(cursor, {
        scale: 1,
    })
})