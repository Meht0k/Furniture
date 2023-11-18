gsap.to("#navbar", {
  top: 0,
  duration: .6,
  ease: "power1.inOut"
})
gsap.from('#footer .box, .copyright ', {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: .1,
  scrollTrigger: {
    trigger: '#footer .box',
    scroller: "Body",
  }
})
gsap.from('#newsletter .news-head', {
  opacity: 0,
  y: 20,
  duration: .5,
  scrollTrigger: {
    trigger: '#newsletter .news-head',
    scroller: "Body",
  }
})
gsap.from('.test-head', {
  opacity: 0,
  y: 20,
  duration: .5,
  scrollTrigger: {
    trigger: '.test-head',
    scroller: "Body",
  }
})
gsap.from('.shop-head', {
  opacity: 0,
  y: 20,
  duration: .5,
  scrollTrigger: {
    trigger: '.shop-head',
    scroller: "Body",
  }
})
gsap.from('.dis-head', {
  opacity: 0,
  y: 20,
  duration: .5,
  scrollTrigger: {
    trigger: '.dis-head',
    scroller: "Body",
  }
})
gsap.from('#main .main-text', {
  opacity: 0,
  y: 20,
  duration: .5,
  scrollTrigger: {
    trigger: '#main .main-text',
    scroller: "Body",
  }
})
gsap.from('#main .main-b-text', {
  opacity: 0,
  y: 20,
  duration: .5,
  scrollTrigger: {
    trigger: '#main .main-b-text',
    scroller: "Body",
  }
})
gsap.from('#gallery img', {
  opacity: 0,
  width:0,
  duration: .5,
  scrollTrigger: {
    trigger: '#gallery img',
    scroller: "Body",
  }
})
gsap.from('#discover .discover-card', {
  opacity: 0,
  y:20,
  duration: .5,
  stagger: .3,
  scrollTrigger: {
    trigger: '#discover .discover-card',
    scroller: "Body",
  }
})
gsap.from('#main .categories-card', {
  opacity: 0,
  y:20,
  duration: .5,
  stagger: .2,
  scrollTrigger: {
    trigger: '#main .categories-card',
    scroller: "Body",
  }
})


var dropdown = document.querySelector(".dropdown");
var dropdownMenu = document.querySelector(".dropdown-menu");
var navImg = document.querySelectorAll(".nav-img img");

dropdown.addEventListener('mouseenter', () => {
  dropdownMenu.style.height = "auto";
  dropdownMenu.style.display = "block";
  dropdownMenu.style.position = "absolute";
  dropdownMenu.style.top = 65 + "px";
  dropdownMenu.style.left = -95 + "px";
  gsap.to(dropdownMenu, {
    opacity: 1
  })
  navImg.forEach(element => {
    element.style.opacity = 1;
    element.style.width = "100%"
    element.style.height = "100%"
  })
})

dropdown.addEventListener('mouseleave', () => {
  dropdownMenu.style.height = 0 + "vh";
  dropdownMenu.style.opacity = 0;
  dropdownMenu.style.display = "none"
  // dropdownMenu.style.top = 65 + "px";
  // dropdownMenu.style.left = -350+ "px";

  gsap.to(dropdownMenu, {
    opacity: 0
  })
})


gsap.to('.inner-content', {
  top: 0,
  duration: 1,
  opacity: 1
})
gsap.to(".main-text", {
  opacity: 1,
  duration: .2,
  scrollTrigger: {
    trigger: "#main",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    scroller: "#smoothScroll"
  },
});


