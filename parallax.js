document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function() {
                ScrollTrigger.create({
                    trigger: ".ring-section",
                    start: "top top",
                    endTrigger: "#team-members",
                    end: "top 80%",
                    pin: ".pin-box",
                    pinSpacing: false,
                    scrub: false,
                    markers: false 
                });
            },
            "(max-width: 767px)": function() {
            }
        });
    } else {
        console.error("GSAP or ScrollTrigger not loaded");
    }
});