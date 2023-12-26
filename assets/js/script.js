//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika Menu di klik
document.querySelector("#icon-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// sticky navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  const value = window.scrollY;
  return value > 0
    ? navbar.classList.add("active")
    : navbar.classList.remove("active");
});
//klik di luar sidebar untuk menghilangkan
const menu = document.querySelector("#icon-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
