window.onload = () => {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".strelka",
            prevEl: "",
        },
    });
    let brandSwiper = new Swiper(".brand-slider", {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".brand-prev-btn ",
            prevEl: ".brand-next-btn",
        },
    });
    reviewSlider()
}
function reviewSlider () {
    let reviewSwiper = new Swiper(".review-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".review-prev-btn",
            prevEl: ".review-next-btn",
        },
    });
}
let reviewBtn = document.querySelectorAll('.typeNav p');
let review = document.querySelectorAll('.review-slider .swiper-slide');
reviewBtn.forEach( btn => {
    btn.addEventListener('click', e => {
        let category = e.target.closest('.typeNav').getAttribute('data-nav');
        e.stopPropagation()
        reviewBtn.forEach( btn => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        review.forEach( rev => {
            if (category != 'clients') {
            rev.style.display = 'none'
            if(rev.getAttribute('data-nav') === category) {
                rev.style.display = 'flex'
            }} else {
                rev.style.display = 'flex'
            }
        })
        reviewSlider()
    })
})