import SwiperCore, {
    A11y,
    Autoplay,
    Controller,
    EffectCoverflow,
    EffectCube,
    EffectFade,
    EffectFlip,
    HashNavigation,
    History,
    Keyboard,
    Lazy,
    Mousewheel,
    Navigation,
    Pagination,
    Parallax,
    Scrollbar,
    Thumbs,
    Virtual,
    Zoom,
} from 'swiper/core';

import { SwiperOptions } from 'swiper';
import createSwiperInstance from './createSwiperInstance';

SwiperCore.use([
    Virtual,
    Keyboard,
    Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
    Parallax,
    Zoom,
    Lazy,
    Controller,
    A11y,
    History,
    HashNavigation,
    Autoplay,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs,
]);

interface ISwiperWrapperOptions {
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
