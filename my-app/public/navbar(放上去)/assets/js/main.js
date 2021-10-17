function scrollHeader() {
  const header = document.getElementById("nav__header");
  if (this.scrollY >= 1 && screen.width > 767) {
    header.classList.add("nav__scroll-header");
  } else {
    header.classList.remove("nav__scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
