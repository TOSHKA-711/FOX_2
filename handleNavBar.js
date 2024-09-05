window.addEventListener("scroll", () => {
    const navBar = document.querySelector(".navBar");
    const logo = document.querySelector(".navBar .logo");
  
    if (window.scrollY > 50) {
      navBar.style = "background:#000";
      logo.style = "width :6rem ";
    } else {
      navBar.style = "background:";
      logo.style = "width :";
    }
  });