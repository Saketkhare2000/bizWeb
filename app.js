const srcBtn = document.querySelector('.srcBtn')


srcBtn.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'circ' } })

tl.from('body', {
    opacity: 0,
}).from('.navbar', {
    y: '-100%',

}).from('.logo', {
    opacity: 0
})
    .from('.navbar .navLink', {
        opacity: 0,
        stagger: 0.3
    })

    .from('.hero .title', {
        y: '50px',
        opacity: 0
    }).from('.hero .text', {
        y: '50px',
        opacity: 0
    }).from('.hero .btn', {
        y: '50px',
        opacity: 0
    }).to('.hero .btn', {
        y: '50px',
        repeat: -1,
        yoyo: true
    })



const tlScrol = gsap.timeline({
    scrollTrigger: {
        trigger: '.services',

        start: "300px bottom",
        end: "top 35%",
    }
})


tlScrol.from('.services .title', {
    opacity: 0,
    x: '-200%'
}).from('.services .card', {
    opacity: 0,
    y: '50%',
    stagger: .3
})