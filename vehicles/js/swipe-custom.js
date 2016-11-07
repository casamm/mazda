var galleryTop = new Swiper('.gallery-top', {
    nextButton: '.right-arrow',
    prevButton: '.left-arrow',
    spaceBetween: 0,
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    slidesPerView: 3,
    touchRatio: 0.2,
    initialSlide: 0,
    slideToClickedSlide: true
});

var galleryTopDesktop = new Swiper('.gallery-top-desktop', {
    nextButton: '.right-arrow',
    prevButton: '.left-arrow',
    spaceBetween: 0,
});
var galleryThumbsDesktop = new Swiper('.gallery-thumbs-desktop', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    slidesPerView: 6,
    touchRatio: 0.2,
    initialSlide: 0,
    slideToClickedSlide: true
});

galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;

galleryTopDesktop.params.control = galleryThumbsDesktop;
galleryThumbsDesktop.params.control = galleryTopDesktop;