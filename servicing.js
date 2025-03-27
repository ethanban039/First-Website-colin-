function animateCounter(element, target) {
    let start = 0;
    let duration = 3000; // 2 seconds
    let stepTime = duration / target;
    
    let timer = setInterval(() => {
        start += Math.ceil(target / 900);
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        element.innerText = start;
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".number");
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        animateCounter(counter, target);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".option-btn");
    const texts = document.querySelectorAll(".text-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons and text
            buttons.forEach(btn => btn.classList.remove("active"));
            texts.forEach(text => text.classList.remove("active"));

            // Add active class to clicked button and corresponding text
            this.classList.add("active");
            document.getElementById(this.dataset.text).classList.add("active");
        });
    });
});



