


document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href"); // Get section ID
        let targetSection = document.querySelector(targetId);

        if (targetSection) {
            gsap.to(window, { duration: 1.5, scrollTo: targetSection, ease: "power2.inOut" });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".footer-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove #
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut", duration: 1.5 } });
tl.to(".project-card", {
    scale: 0.75,
    opacity: 0.7,
    stagger: { each: 1, repeat: -1, yoyo: true }
}).to(".project-card:nth-child(3)", {
    scale: 1,
    opacity: 1,
}, "-=1.5");


