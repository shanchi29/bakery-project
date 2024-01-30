let menu = document.getElementById("nav-toggle");
let headerInner = document.getElementById("header__nav");
let bannerClose = document.getElementById("bannerClose")
let banner = document.querySelector(".banner__inner")

/* Menu nav toggle */
menu.addEventListener("click", function (event){
    event.preventDefault();

    menu.classList.toggle("active");
    headerInner.classList.toggle("active");
});

/* banner */
bannerClose.addEventListener("click", function (event) {
    event.preventDefault();
    banner.classList.toggle("bannerHide")
});

/* slider */

const wrapper = document.querySelector('.cards-wrapper');
const dots = document.querySelectorAll('.dot');
let activeDotNum = 0;

dots.forEach((dot, idx) => {
    dot.setAttribute('data-num', idx);
    dot.addEventListener('click', (e) => {
        let clickedDotNum = e.target.dataset.num;
        if (clickedDotNum === activeDotNum) {
            return false;
        } else {
            let displayArea = wrapper.parentElement.clientWidth;
            let pixels = -displayArea * clickedDotNum
            wrapper.style.transform = 'translateX('+ pixels + 'px)';
            dots[activeDotNum].classList.remove('active');
            dots[clickedDotNum].classList.add('active');
            activeDotNum = clickedDotNum;
        }
    });
});




