function adjustMainHeightAndCheckZoom() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const main = document.querySelector("main");
  if (!header || !footer || !main) return;

  const windowHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;
  const footerHeight = footer.offsetHeight;
  const mainHeight = windowHeight - headerHeight - footerHeight;
  main.style.height = mainHeight + "px";

  const zoom = Math.round(window.devicePixelRatio * 100);

  if (zoom === 125 || zoom > 63) {
    alert("Browser zoom is 100%");
    main.style.height = "auto";
  } 
}

window.addEventListener("load", adjustMainHeightAndCheckZoom);
window.addEventListener("resize", adjustMainHeightAndCheckZoom);

// css change ->
//-> move bg from .main-sub-content to main tag

// Hamburger menu slideToggle
$('.navbar-toggler').click(function () {
    $('#navbarNav').slideToggle();
});

// scroll up icon show if scroll > 0
const scrollUpBtn = document.getElementById("scrollUpBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};
scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// lazy load images
function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        observer.observe(img);
    });
}
lazyLoad()

// animate-on-scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 150 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function handleScroll() {
        animatedElements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

animateOnScroll();