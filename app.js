// Burger menu 
const links = document.querySelectorAll('#links > li');
// console.log(links);

for(let link of links) {
  link.addEventListener("click", () => {
    location.href = (link.firstChild.getAttribute("href"));
  })
}

// Scroll Up 
document.addEventListener("scroll", scrolling);

let scrollUpButton = document.querySelector("#scrollUpButton");

function scrolling() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

scrollUpButton.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// Mobile menu 
let mobileMenuButton = document.querySelector('#mobile_menu_button')
mobileMenuButton.addEventListener('click', () => {
  
  let navlinks = document.querySelector("#links");
    if(navlinks.className === "links") {
      navlinks.classList.add("active")
    } else {
      navlinks.classList.remove("active")
    }
})


