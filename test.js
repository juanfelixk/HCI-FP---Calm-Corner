// animation to mark the option chosen by the user
document.querySelectorAll(".question-container input").forEach(input => {
    input.addEventListener("change", function() {
        const question = this.closest(".question");
        question.querySelectorAll('label').forEach(label => {
            label.style.background = "none";
        });
        this.parentElement.style.background = "#E0E0E0";
    });
});