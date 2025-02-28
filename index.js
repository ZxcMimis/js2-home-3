const imagesArr = document.querySelectorAll('.img')
const observer = new IntersectionObserver(observerImages)

function loadImage(image) {
    const dataSrc = image.getAttribute('data-src')
    image.src = dataSrc
    image.classList.add('animation-image')
}

function observerImages(imagesArr) {
    imagesArr.forEach((entry) => {

        if (entry.isIntersecting) {
            loadImage(entry.target)
            observer.unobserve(entry.target)
        }
    });
}

imagesArr.forEach((imageEl) => {
    observer.observe(imageEl)
    imageEl.classList.remove('animation-image')
})