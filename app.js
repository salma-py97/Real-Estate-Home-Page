const header = document.querySelector('header');
const logo = document.querySelector('#logo');
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const active = document.querySelector('li a.active');
const close = document.getElementById("close-flyout");


navToggle.addEventListener('click', () => {
    navMenu.style.right = 0;
})
close.addEventListener('click', () => {
    navMenu.style.right = "-100%";
})


document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navMenu.classList.add('is-sticky');
        logo.style.color='#000';
        header.style.backgroundColor='#fff';
        active.style.color="#000";
        navToggle.style.borderColor = '#000';
        Array.from(navToggle.children).forEach((strip) => {
            strip.style.backgroundColor='#000';
        })        
    } else {
        // navMenu.classList.remove('is-sticky');
        logo.style.color='#fff';
        header.style.backgroundColor='transparent';
        active.style.color="#fff";
        navToggle.style.borderColor = '#fff';
        Array.from(navToggle.children).forEach((strip) => {
            strip.style.backgroundColor='#fff';
        })
    }

//     window.scrollY>=200 ? {header.style.padding= "5rem", header.style.boxShadow="0 0.4px 10px 1px #000"} : {header.style.padding= "5rem" , header.style.boxShadow="none"};

    if (window.scrollY >= 200){
        header.style.padding= "0.5rem";
        header.style.boxShadow="0 0.4px 10px 1px #999";
    }else{
        header.style.padding= "1rem";
        header.style.boxShadow="none";
    }

})



$(function () {
   $('#properties-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
   });

   $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
   });
});