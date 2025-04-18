document.addEventListener('DOMContentLoaded', function() {

    const checkGSAP = setInterval(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            clearInterval(checkGSAP);
            initAnimation();
        }
    }, 100);
});

function initAnimation() {
    const text = document.querySelector('.animate-text');
    if (!text) return;

    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(".animate-text span", {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".text-container",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
            markers: false
        }
    });
}