function swiperWrapper(
    swiper: any,
    options: IntersectionObserverInit | undefined
) {
    if (swiper instanceof Array) {
        swiper.forEach((instance) => {
            swiperWrapper(instance, options);
        });
    }

    if (swiper.params === undefined) {
        return;
    }

    const element: Element = swiper.params.el;

    if (element === undefined) {
        return;
    }

    options = {
        rootMargin: '200px',
        ...options,
    };

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry, 'init');
                swiper.init();
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
}

export default swiperWrapper;
