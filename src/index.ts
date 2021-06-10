import Swiper, { SwiperOptions } from 'swiper/core';

import createSwiperInstance from './createSwiperInstance';

interface ISwiperWrapperOptions {
    swiper: Swiper;
    lazyInit: boolean;
}

function swiperGlobalFactory(globalOptions: ISwiperWrapperOptions) {
    return function (
        element: HTMLElement | string,
        options: SwiperOptions,
        intersectionObserverOptions: IntersectionObserverInit = {
            rootMargin: '200px',
        }
    ) {
        return createSwiperInstance(
            element,
            {
                ...options,
                init: !globalOptions.lazyInit,
            },
            intersectionObserverOptions
        );
    };
}

export default swiperGlobalFactory;
