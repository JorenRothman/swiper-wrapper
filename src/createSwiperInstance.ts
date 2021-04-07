import Swiper from 'swiper/bundle';
import { SwiperOptions } from 'swiper';

function createSwiperInstance(
    element: HTMLElement | string,
    options: SwiperOptions,
    intersectionObserverOptions: IntersectionObserverInit
): Swiper | Swiper[] {
    if (!(element instanceof HTMLElement)) {
        document.querySelectorAll(element).forEach((el) => {
            return createSwiperInstance(
                el as HTMLElement,
                options,
                intersectionObserverOptions
            );
        });
    }

    if (typeof element === 'string') {
        // Wtf happened i don't know
        return new Swiper(element, options);
    }

    let swiperContainer = element;

    if (!swiperContainer.classList.contains('swiper-container')) {
        const potentialSwiperContainer = element.querySelector(
            '.swiper-container'
        );

        if (potentialSwiperContainer === null) {
            throw new Error(
                `No .swiper-container class found in ${element.classList}`
            );
        }

        swiperContainer = potentialSwiperContainer as HTMLElement;
    }

    const instance = new Swiper(swiperContainer, options);

    let observer = null;

    if (!options.init) {
        observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    instance.init();
                    observer.unobserve(element);
                }
            });
        }, intersectionObserverOptions);

        observer.observe(element as Element);
    }

    return instance;
}

export default createSwiperInstance;
