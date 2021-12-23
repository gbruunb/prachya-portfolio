const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('.vid-h1')
// end
const section = document.querySelector('.vid-section')
const end = section.querySelector('.vid-h1')
// scroll 
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration:31500,
    triggerElement:intro,
    triggerHook:0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);



    //video animation
let accelamount=0.01;
let scrollpos=0;
let delay=0;

scene.on('update',e=> {
    scrollpos=e.scrollPos/1000;
    console.log(e);
});

setInterval(()=>{
    delay+=(scrollpos - delay)*accelamount;
    console.log(scrollpos,delay);

    video.currentTime=scrollpos;
}, 17.67);
