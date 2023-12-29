function gsapLoco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

gsapLoco()

function loader() {
  var tl = gsap.timeline()
  tl.from("#loader h3", {
    x:40,
    opacity: 0,
    duration: 1.3,
    stagger: 0.1,
  })
  tl.to("#loader h3", {
     x: -40,
     opacity: 0,
     duration: 1,
     stagger: 0.1,
   });
   tl.to("#loader", {
     opacity: 0,
   });
   tl.from(".page1-content h1 span",{
    y:60,
    opacity:0,
    stagger:0.2,
    duration:1,
   })
   tl.to("#loader", {
     display:"none",
   });
}

loader()

function cursorEvent() {
  let crsr = document.querySelector(".cursor");
  let page = document.querySelector(".page-1");

  page.addEventListener("mousemove", (dets) => {
    gsap.to(crsr, {
      x: dets.x,
      y: dets.y,
    });
  });

  page.addEventListener("mouseenter", (dets) => {
    gsap.to(crsr, {
      scale: 1,
      opacity: 1,
    });
  });

  page.addEventListener("mouseleave", (dets) => {
    gsap.to(crsr, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEvent();

function page2() {
  gsap.from(".elem h4, .elem h1", {
    y: 120,
    duration: 1,
    scrollTrigger: {
      trigger: ".page-2",
      scroller: "#main",
      start: "top 40%",
      end: "top 30%",
      scrub: 2,
    },
  });
}

page2()

function page3() {
  gsap.from(".elem2 h1", {
    y: 120,
    duration: 1,
    scrollTrigger: {
      trigger: ".page-3",
      scroller: "#main",
      start: "top 40%",
      end: "top 30%",
      scrub: 2,
    },
  });

  let h1 = document.querySelector(".h1-cont");
  let lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    h1.addEventListener("mouseenter", () => {
      line.style.transform = "scaleX(1)";
      line.style.transformOrigin = "bottom left";
    });
    h1.addEventListener("mouseleave", () => {
      line.style.transform = "scaleX(0)";
      line.style.transformOrigin = "bottom right";
    });
  });
}

page3()

function page5() {
  gsap.from(".elem3 h4, .elem3 h1", {
    y: 120,
    duration: 1,
    scrollTrigger: {
      trigger: ".page-5",
      scroller: "#main",
      start: "top 40%",
      end: "top 30%",
      scrub: 2,
    },
  });
}

page5()


function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
  });
}
swiper()

function page8() {
  gsap.from(".upper-page8", {
    y: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: ".upper-page8",
      scroller: "#main",
      scrub: true,
      start: "top center",
      end: "top top"
    },
  });
  gsap.from(".lower-page8 h1 span", {
    y: -100,
    opacity:0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".lower-page8",
      scroller: "#main",
      scrub: 5,
      start: "top 90%",
      end: "bottom bottom",
    },
  });
}
page8()