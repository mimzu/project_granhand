

/* 스크롤 시 헤더 색 변경 */
document.addEventListener ("scroll",function() {
    const header = document.querySelector ("header");
    const mainBnr = document.querySelector (".main_brn_swiper");
    const logoImg = header.querySelector ('.logo img')
    const icons = header.querySelectorAll ('.right_icons img')

    const bannerHeight = mainBnr.offsetHeight;
    const scrollTop = window.scrollY;

    if (scrollTop > bannerHeight - 50) {
        header.classList.add ("scroll");
        logoImg.src = './images/logo_scroll.png';
        icons[0].src ='./images/search_scroll.png';
        icons[1].src ='./images/profile_scroll.png';
        icons[2].src ='./images/bag_scroll.png';
    } else {
        header.classList.remove ("scroll")
        logoImg.src = './images/logo.png';
        icons[0].src ='./images/search_icon.png';
        icons[1].src ='./images/profile_icon.png';
        icons[2].src ='./images/bag_icon.png';
    }
})

/* a태그 기본동작 막기 */
const links = document.querySelectorAll('a[href="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // 기본 동작 막기
    });
});