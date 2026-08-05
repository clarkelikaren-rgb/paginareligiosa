var glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 3,
    breakpoints: {
        800: {
            perView: 2,
        }
    },
    480: {
        perView: 1,
    }
});
glide.mount();