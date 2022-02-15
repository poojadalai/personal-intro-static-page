const navIcon = document.querySelector('.icons');
const items = document.querySelectorAll('.item a');
var mobileLinks = document.querySelector(".mobile-links");
   

navIcon.addEventListener("click", function(){
     if (mobileLinks.style.display == "block") {
        mobileLinks.style.display = "none";
    } else {
        mobileLinks.style.display = "block";
    }
});

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}

for(let  i =0 ; i<items.length; i++){
    let item = items[i];
    item.addEventListener('click', function(){
        mobileLinks.style.display = "none";
    })
}



