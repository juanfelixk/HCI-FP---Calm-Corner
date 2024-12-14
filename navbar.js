// remove navigation bar menus for mobile screen and add a dropdown button
const barIcon = document.getElementById("bar-icon");
const dropdownMenu = document.getElementById("dropdown-menu");
window.addEventListener("resize", function() {
    if (window.innerWidth > 800) {
        dropdownMenu.style.display = "none";
        barIcon.classList.remove("fa-times");  
        barIcon.classList.add("fa-bars");
        barIcon.classList.remove("open");
    }
});

// add animation and display the dropdown
barIcon.addEventListener("click", function() {
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
        barIcon.classList.remove("fa-bars");
        barIcon.classList.add("fa-times");
        barIcon.classList.add("open");
    } else {
        dropdownMenu.style.display = "none";
        barIcon.classList.add("fa-bars");
        barIcon.classList.remove("fa-times");
        barIcon.classList.remove("open");
    }
});

// nested dropdown for screening options for mobile screen
const dropdownBtn = document.querySelector(".dropdown-mobile");
const dropdownContent = dropdownBtn.nextElementSibling;
dropdownBtn.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
});