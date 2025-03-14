const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links

// Open menu
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
        sideMenu.classList.remove('-translate-x-full');
    }, 10);
});

// Close menu function
function closeMenu() {
    sideMenu.classList.add('-translate-x-full');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
}

// Close on clicking the close button
closeBtn.addEventListener('click', closeMenu);

// Close when clicking outside the menu (on overlay)
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMenu();
    }
});

// Close menu when clicking on a navigation link
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});


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


const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.remove("hidden");
        scrollBtn.classList.add("opacity-100");
    } else {
        scrollBtn.classList.add("hidden");
        scrollBtn.classList.remove("opacity-100");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});