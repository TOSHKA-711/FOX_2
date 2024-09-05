// handle toggle layer

const barsIcon = document.querySelector(".toggle-icon");

barsIcon.addEventListener("click", () => {
  let layer = document.querySelector(".toggle-layer");

  layer.style.display = "flex";
  layer.style.width = "70vw";
  layer.style.opacity = "0.9";
});
const xIcon = document.querySelector(".x-icon");

xIcon.addEventListener("click", () => {
  let layer = document.querySelector(".toggle-layer");

  layer.style.width = "";
  layer.style.opacity = "";
});

// gsap animation

gsap.from(".logo", {
  x: 800,
  duration: 1,
});

gsap.from(".sections", {
  y: -100, // Start 50px above the original position
  duration: 1, // Each animation lasts 1 second
  // stagger: 0.25,       // 0.25-second delay between each section's animation
  ease: "power1.out", // Smooth easing function
});
gsap.from(".about-text", {
  opacity: 0,
  y: 200,
  duration: 2,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    markers: false,
    // start:"top center",
    start: "top 50%",
    end: "top 20%",
    scrub: true,
    // pin: true,
  },
});

gsap.from(".about-img", {
  opacity: 0,
  scale: 0.5,
  duration: 2,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    markers: false,
    // start:"top center",
    start: "top 50%",
    end: "top 20%",
    scrub: true,
    // pin: true,
    once: true,
  },
});

gsap.from(".book", {
  opacity: 0.6,
  y: 200,
  duration: 2,
  scrollTrigger: {
    trigger: ".book",
    scroller: "body",
    markers: false,
    // start:"top center",
    start: "top 100%",
    end: "top 50%",
    scrub: true,
    // pin: true,
    once: true,
  },
});

gsap.from(".advertise-img", {
  opacity: 0,
  scale: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".advertise1",
    scroller: "body",
    markers: false,
    // start:"top center",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    // pin: true,
    once: true,
  },
});

gsap.from(".advertise-text2", {
  opacity: 0,
  x: 200,
  duration: 2,
  scrollTrigger: {
    trigger: ".advertise2",
    scroller: "body",
    markers: false,
    // start:"top center",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
    // pin: true,
    // once: true,
  },
});




// -----------------------


const introHome = document.querySelector('.intro-home');
const introText = document.querySelector('.intro-text');

introHome.addEventListener('mousemove', (e) => {
  const rect = introHome.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;


  const tiltX = (deltaY / rect.height) * 60; 
  const tiltY = (deltaX / rect.width) * -60; 

  introText.style.transform = `translate(-50%, -50%) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
});


gsap.to(".gsap-text p", {
  x: () => {
    const vw = window.innerWidth;
    // Adjust the value based on the viewport width or other conditions
    return vw > 768 ? "-55%" : "-55%"; 
  },
  scrollTrigger: {
    trigger: ".gsap-text",
    scroller: "body",
    // markers: true,
    start: "top 150",
    end: "bottom top",
    scrub: true,
    pin: true,
  }
});