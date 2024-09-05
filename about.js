// handle navBar scroll changing



// handle carousel

const myslide = document.querySelectorAll(".myslide"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}



// swiper js 
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      scrollbar: {
          el: '.swiper-scrollbar',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
    
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
    
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      autoplay:{
        delay: 2500,
      }
  });
});


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
gsap.from(".book-cards", {
  y:200,
  duration: 2,
  scrollTrigger: {
    trigger: ".book",
    scroller: "body",
    markers: false,
    // start:"top center",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    // pin: true,
    once: true,
  },
});
gsap.from(".info-child", {
scale:0.2,
  duration: 2,
  // stagger:0.5,
  scrollTrigger: {
    trigger: ".book",
    scroller: "body",
    markers: false,
    start:"top center",
    // start: "top 80%",
    // end: "top 50%",
    scrub: true,
    // pin: true,
    once: true,
  },
});








// --------------------
// gsap.from(".box1", {
//   x: 800,
//   duration: 5,
//   borderRadius: 50,
//   rotate: 360,
//   yoyo: true,
// });
// gsap.from(".box2", {
//   opacity: 0,
//   x: "50vw",
//   duration: 2,
//   borderRadius: 80,
//   rotate: 360,
//   // repeat : -1,
//   yoyo: true,
//   scrollTrigger: {
//     trigger: ".box2",
//     scroller: "body",
//     markers: false,
//     // start:"top center",
//     start: "top 50%",
//     end: "top 20%",
//     scrub: true,
//     pin: true,
//   },
// });
// gsap.from(".box3", {
//   x: 800,
//   duration: 5,
//   borderRadius: 50,
//   rotate: 360,
//   yoyo: true,
// });
// gsap.to(".text p", {
//   transform: "translate(-275%)",
//   scrollTrigger: {
//     trigger: ".text",
//     scroller: "body",
//     markers: false,
//     start: "top 0%",
//     end: "top -150%",
//     scrub: true,
//     pin: true,
//   },
// });
