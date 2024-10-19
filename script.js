document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.2;

        if (position < screenHeight) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        } else {
            // Reset to the initial hidden state when the element is out of view
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
        }
    });
});
