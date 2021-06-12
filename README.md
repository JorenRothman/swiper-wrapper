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
import swiperWrapper from 'swiper-wrapper';
```
P
Create a swiper instance and set init to false
```js
const swiper = new Swiper({
    init: false,
    ...more options
})
```

And then just wrap your instance with the wrapper
```js
swiperWrapper(swiper, {})
```
