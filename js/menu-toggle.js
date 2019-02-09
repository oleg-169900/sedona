{
  const navMain = document.querySelector(".main-nav");
  const navToggle = document.querySelector(".menu-toggle");

  const toggle = () => {
    if (navMain.classList.contains("hidden")) {
      navMain.classList.remove("hidden");
      navToggle.classList.add("menu-toggle--close");
    } else {
      navMain.classList.add("hidden");
      navToggle.classList.remove("menu-toggle--close");
    }
  }

  navMain.classList.add("hidden");

  if (window.innerWidth >= "768") {
    navMain.classList.remove("hidden");
  }

  navToggle.addEventListener("click", toggle);
};
