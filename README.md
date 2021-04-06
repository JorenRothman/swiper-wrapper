# Swiper Wrapper
A super simple Swiper wrapper with extravaganza lazy initialize feature

## Install
Simple, just run
```
npm install swiper-wrapper
```

## Usage
First import swiper-wrapper
```js
import swiperGlobalFactory from 'swiper-wrapper';
```

Create a swiper factory instance
```js
const factory = swiperGlobalFactory({
    lazyInit: true,
})
```

Use your new factory to create Swiper instances
```js
const swiper = factory('.my-selector', {
    // all swiper options here baby
}, {
    // Intersection observer options
});
```
