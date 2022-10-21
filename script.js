let big_nav = document.querySelector(".big_nav");
let btn = document.querySelector(".botton");

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
