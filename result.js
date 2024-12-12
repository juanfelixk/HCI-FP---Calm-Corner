document.querySelectorAll(".learn-more-btn").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({behavior:"smooth"});
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", function escListener(event) {
        if (event.key === "Escape") {
            closeModal(modalId);
            document.removeEventListener("keydown", escListener); 
        }
    });
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal(modalId);
        }
    };
};

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
};

document.addEventListener("DOMContentLoaded", function() {
    const mobileAnimation = document.getElementById("mobileAnimation");
    if (window.innerHeight <= 725) {
        mobileAnimation.setAttribute("data-aos", "fade-up");
        mobileAnimation.setAttribute("data-aos-duration", "1000");
    }
    AOS.init();
});