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