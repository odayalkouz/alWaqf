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