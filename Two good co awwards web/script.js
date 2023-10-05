function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();
function videoAnimation() {
    let videocon = document.querySelector("#video-container")
    let playbtn = document.querySelector("#play")

    videocon.addEventListener("mouseenter", function (){
    gsap.to(playbtn, {
    scale:1,
    opacity:1
    })
    })
    videocon.addEventListener("mouseleave", function (){
    gsap.to(playbtn, {
    scale:0,
    opacity:0
    })
    })
    videocon.addEventListener("mousemove", function (dets){
    gsap.to(playbtn, {
    left:dets.x,
    top:dets.y
    })
    })  
}
function loadingAnimation() {
    gsap.from("#page1 h1", {
        y:100,
        delay:0.5,
        stagger:0.2,
        opacity: 0,
        duration:0.8
    })
    gsap.from("#page1 #video-container", {
        scale:.9,
        delay:1,
        opacity: 0,
        duration:.5
    })

    gsap.from(".element",{
        top:"100px",
        opacity:0,
        stagger:0.5,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:".container",
            // markers:true,
            start:"top 70%",
            end:"top 60%"
        }
    })
    gsap.from(".child",{
        top:"100px",
        opacity:0,
        stagger:0.5,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:".container",
            // markers:true,
            start:"top 70%",
            end:"top 60%"
        }
    })
    gsap.from(".imgcon1",{
        scale:1,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page5",
            scroller:".container",
            // markers:true,
            start:"top 70%",
            end:"top 60%"
        }
    })
    gsap.from(".foot2 svg",{
        height:"100vw",
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page6",
            scroller:".container",
            // markers:true,
            start:"top 70%",
            end:"top 50%",
            scrub:true
        }
    })
    gsap.from(".foot1 a",{
        x:100,
        opacity:0,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
            trigger:"#page6",
            scroller:".container",
            // markers:true,
            start:"top 50%",
            end:"top 30%"
        }
    })

}
function cursorAnimation(){
    document.addEventListener("mousemove", function (dets){
        gsap.to(".cursor",{
            left: dets.x,
            top: dets.y
        })
    })
    
    
    document.querySelectorAll("#child1").forEach(function(elem){
        elem.addEventListener("mouseenter",function (){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(2)',
                background:"lightblue"
            })
        })
        elem.addEventListener("mouseleave",function (){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
    document.querySelectorAll("#child2").forEach(function(elem){
        elem.addEventListener("mouseenter",function (){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(2)',
                background:"blanchedalmond"
            })
        })
        elem.addEventListener("mouseleave",function (){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
    document.querySelectorAll("#child3").forEach(function(elem){
        elem.addEventListener("mouseenter",function (){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(2)',
                background:"lightgreen"
            })
        })
        elem.addEventListener("mouseleave",function (){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
    
    
    document.querySelectorAll("#child4").forEach(function(elem){
        elem.addEventListener("mouseenter",function (){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(2)',
                background:"lightpink"
            })
        })
        elem.addEventListener("mouseleave",function (){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
}
function navbarAnimation(){
    gsap.to(".menu1 svg",{
        transform:"translateY(-140%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:".container",
            start:"top 0",
            end:"top -2%",
            scrub:true
        }
    })
    gsap.to(".links",{
        transform:"translateY(-150%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:".container",
            start:"top 0",
            end:"top -2%",
            scrub:true
        }
    })
}
navbarAnimation();
videoAnimation();
loadingAnimation();
cursorAnimation();