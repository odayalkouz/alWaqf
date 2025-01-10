// swiper slider configuration
const sliderData = [
    {
        title: "رؤيتنا",
        text: "الريادة في العمل الخيري والتنمية المستدامة، لتحقيق أثر إيجابي ومستدام يعزز قيم التكافل ورفاهية المجتمع.",
        image: "assets/img/slider1-right.png",
        backgroundColor: "assets/img/bg-slider.jpg"
    },
    {
        title: "مهمتنا",
        text: "تقديم المبادرات التنموية التي تحقق التغيير المستدام في حياة الأفراد والمجتمعات.",
        image: "assets/img/slider1-right.png",
        backgroundColor: "assets/img/bg-slider.jpg"
    },
    {
        title: "قيمنا",
        text: "الشفافية، المسؤولية، التكاتف، الإبداع.",
        image: "assets/img/slider1-right.png",
        backgroundColor: "assets/img/bg-slider.jpg"
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
      <div class="col-12 col-md-6 my-sm-4 my-md-4">
        <div class="left">
          <img class="w-75" src="${slide.image}" data-swiper-parallax="-150" alt="Logo">
        </div>
      </div>
      <div class="col-12 col-md-6 my-sm-4 my-md-4">
        <div class="right">
          <div class="title" data-swiper-parallax="-300">${slide.title}</div>
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
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
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
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
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
            spaceBetween: 70,
        },
    },
});

// partners swiper project

var swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@1.50": {
            slidesPerView: 5,
            spaceBetween: 40,
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