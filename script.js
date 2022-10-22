let big_nav = document.querySelector(".big_nav");
let btn = document.querySelector(".botton");
let navbar_toggler = document.querySelector(".navbar-toggler");
navbar_toggler.onclick = function () {
  big_nav.classList.toggle("scrolled");
};

window.onscroll = function () {
  if (window.scrollY >= 50) {
    big_nav.classList.add("scrolled");
    btn.style.display = "block";
  } else {
    big_nav.classList.remove("scrolled");
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("open");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const sectionAll = document.querySelectorAll("section[id]");
console.log(sectionAll);

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 300;
    const sectionId = current.getAttribute("id");
    console.log(sectionId);
    console.log(
      document.querySelector('li a[href*="' + sectionId + '"]').classList
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.add("on");
    } else {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.remove("on");
    }
  });
});
