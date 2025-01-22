//GSAP HORIZONTAL SCROLLER
let scroll_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.gsap_horizontal_scrolltrigger',
        start: "top center",
        scrub: true,
        end: "+=300",
    }
}),
facts = [...document.querySelectorAll('.gsap_card')]
scroll_tl.to('.gsap_horizontal_scrolltrigger .big', {
    scale: 1.5,
    duration: 1,
    ease: "slow"
})
scroll_tl.to(facts, {
    xPercent: -85 * (facts.length - 1),
    scrollTrigger: {
        trigger: ".gsap_cards",
        start: "center center",
        pin: true,
        scrub: 1,
        snap: 0 / (facts.length - 1),
        end: () => `+=4320`
    }
});
