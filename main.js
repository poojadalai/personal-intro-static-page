const navIcon = document.querySelector('.icons');


navIcon.addEventListener("click", function(){
    var mobileLinks = document.querySelector(".mobile-links");
    if (mobileLinks.style.display == "block") {
        mobileLinks.style.display = "none";
    } else {
        mobileLinks.style.display = "block";
    }
});

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }