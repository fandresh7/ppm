import { SwiperOptions } from 'swiper/types'

const defaultOptions: SwiperOptions = {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 20,
  navigation: true,
  injectStyles: [
    `.swiper-button-next, .swiper-button-prev {
      width: 20px !important;
      height: 20px !important;
      color: #000000 !important;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    
    .swiper-button-next {
      right: 0 !important;
    }
    
    .swiper-button-prev {
      left: 0 !important;
    }`
  ]
}

export const homeSliderOptions: SwiperOptions = {
  ...defaultOptions,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    1060: {
      slidesPerView: 3
    },
    1360: {
      slidesPerView: 3
    }
  }
}

export const testSliderOptions: SwiperOptions = {
  ...defaultOptions,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: false
}

export const certificateSliderOptions: SwiperOptions = {
  ...defaultOptions,
  spaceBetween: 5,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    1060: {
      slidesPerView: 3
    },
    1360: {
      slidesPerView: 5
    }
  }
}

export const completeCoursesSliderOptions: SwiperOptions = {
  ...defaultOptions,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    1060: {
      slidesPerView: 3
    },
    1360: {
      slidesPerView: 4
    }
  }
}
