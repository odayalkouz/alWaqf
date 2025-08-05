// swiper slider configuration
const sliderData = [
    {
        text: "<b>تمكين الفئات المحتاجة</b> بما يحقق الحياة الكريمة والفرص المستدامة للنمو والتطور",
        image: "assets/img/banner/small-image-slider1.svg",
        backgroundColor: "assets/img/banner/bg-slider1.jpg",
        style:"custom-slider1",
    },
    {
        text: "<b>استدامة العطاء لأجيال المستقبل </b>من خلال توفير بيئة مستدامة للأجيال القادمة",
        image: "assets/img/banner/small-image-slider1.svg",
        backgroundColor: "assets/img/banner/bg-slider1.jpg",
        style:"custom-slider2",
    },
    {
        title: "<b>-</b>رؤيـتـنـا<b>-</b>",
        text: "<b>الريادة في العمل الخيري</b> والتنمية المستدامة، لتحقيق أثر إيجابي ومستدام يعزز قيم التكافل ورفاهية المجتمع.",
        image: "assets/img/banner/small-image-slider3.png",
        backgroundColor: "assets/img/banner/bg-slider1.jpg",
        style:"custom-slider3",
    },
    {
        text: "<b> تعزيز التنمية الاجتماعية والاقتصادية</b> وتحقيق الأثر الإيجابي في مختلف مجالات </br>الحياة",
        backgroundColor: "assets/img/banner/bg-slider4.svg",
        style:"custom-slider4",
    },
    {
        text: "<b>التعاون مع الجهات الخيرية والتنموية</b> لتحقيق أهداف مشتركة",
        image: "assets/img/banner/small-image-slider5.png",
        backgroundColor: "assets/img/banner/bg-slider5.jpg",
        style:"custom-slider5",
    }
];
const swiperWrapper = document.getElementById('swiper-wrapper');

sliderData.forEach((slide) => {
    const slideElement = document.createElement('div');
    slideElement.className = 'swiper-slide';

    // Set the background image
    slideElement.style.backgroundImage = `url(${slide.backgroundColor})`;
    slideElement.style.backgroundSize = 'cover';
    slideElement.style.backgroundPosition = 'center';

    slideElement.innerHTML = `
    <div class="row w-100 align-items-center">
  <div class="col-12 col-md-5 my-sm-3 my-md-3">
    <div class="left ${slide.style}">
      ${slide.image ? `<img class="" src="${slide.image}" style="width:80%" data-swiper-parallax="-150" alt="Logo" />` : ''}
    </div>
  </div>
  <div class="col-12 col-md-7 my-sm-3 my-md-3">
    <div class="right ${slide.style}">
      ${slide.title ? `<div class="title" data-swiper-parallax="-300">${slide.title}</div>` : ''}
      <div class="text" data-swiper-parallax="-300">
        <p>${slide.text}</p>
      </div>
    </div>
  </div>
</div>`;

    swiperWrapper.appendChild(slideElement);
});
var swiper = new Swiper(".mySwiper", {
    speed: 600,

    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 30000000
    },
    
});



// run the counter script if is in Viewport 
const counters = document.querySelectorAll('.counter');
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const runCounter = (counter) => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText.replace(/,/g, '');
        const increment = target / 200;
        if (current < target) {
            counter.innerText = Math.ceil(current + increment).toLocaleString();
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    updateCounter();
};

const handleScroll = () => {
    counters.forEach(counter => {
        if (isInViewport(counter) && !counter.classList.contains('counted')) {
            runCounter(counter);
            counter.classList.add('counted');
        }
    });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);



//projects swiper project

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.60": {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

//news swiper project

var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.60": {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 70,
        },
    },
});

// partners swiper project

var swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.65": {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@1.50": {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});


//WhatClienSay swiper project
var swiper = new Swiper(".WhatClienSay", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "@1.50": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    on: {
        slideChange: function () {
            var activeSlide = swiper.slides[swiper.activeIndex];
            var name = activeSlide.querySelector("p").getAttribute("data-name");
            var position = activeSlide.querySelector("p").getAttribute("data-position");
            var imgSrc = activeSlide.querySelector("p").getAttribute("data-img");
            if (name && position && imgSrc) {
                document.querySelector(".white-container h4").textContent = name;
                document.querySelector(".white-container p").textContent = position;
                document.querySelector(".container-with-bg-border img").src = imgSrc;
            }
        },
    },
});