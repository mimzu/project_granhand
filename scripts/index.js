
document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const mainBnr = document.querySelector(".main_brn_swiper");
    const logoImg = header.querySelector('.logo img');
    const icons = header.querySelectorAll('.right_icons img');

    const bannerHeight = mainBnr.offsetHeight;
    const scrollTop = window.scrollY;

    if (scrollTop > bannerHeight - 50) {
        header.classList.add("scroll");

        logoImg.src = './images/logo_scroll.png';
        icons[0].src = './images/search_scroll.png';
        icons[1].src = './images/profile_scroll.png';
        icons[2].src = './images/bag_scroll.png';

    } else {
        header.classList.remove("scroll");

        logoImg.src = './images/logo.png';
        icons[0].src = './images/search_icon.png';
        icons[1].src = './images/profile_icon.png';
        icons[2].src = './images/bag_icon.png';
    }
});

// 모든 a 태그 클릭 시 기본 동작 막기
const allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});


/* 저널 부분 카드 클릭하면 이벤트 발생하는 거 */
const cards = document.querySelectorAll('.card');
console.log(cards);
cards.forEach(card => {
    card.addEventListener('click', function() {
        // 기존 action 클래스 제거
        const activeCard = document.querySelector('.card.action');
        if (activeCard) {
            activeCard.classList.remove('action');
        }

        // 클릭한 카드에 action 추가
        this.classList.add('action');
    });
});


const monthlySwiper = new Swiper("#monthly_swiper", {
    loop:true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed:5000,
    autoplay:{
        delay:0,
        disableOnInteraction: false,
    },
});
const categorySwiper = new Swiper("#category_swiper", {
    loop:false,
    slidesPerView: "auto",
});
const mainbnrSwiper = new Swiper(".main_brn_swiper", {
    loop:true,
    pagination : {
        el:'.swiper-pagination',
        clickable:true,
    },
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }
});