const lazyImages = document.querySelectorAll('[loading="lazy"]');
lazyImages.forEach((image) => {
    image.addEventListener("load", (events) => {
        events.target.classList.add("show");
        console.log("test")
    }), { once: true }

})