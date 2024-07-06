document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter span');
    const progressBars = document.querySelectorAll('.progress');

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.counter span');
                const target = +counter.getAttribute('data-target');
                const progressBar = entry.target.querySelector('.progress');
                const strokeValue = 427 - (427 * target) / 100;

                progressBar.style.strokeDashoffset = strokeValue;
                updateCounter(counter, target);

                observer.unobserve(entry.target); // Unobserve the target after animation
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    document.querySelectorAll('.skill').forEach(skill => {
        observer.observe(skill);
    });

    function updateCounter(counter, target) {
        let count = 0;
        const interval = setInterval(() => {
            count++;
            counter.textContent = count;
            if (count === target) {
                clearInterval(interval);
            }
        }, 20);
    }
});
