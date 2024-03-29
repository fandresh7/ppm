import { SwiperOptions } from 'swiper/types'

export const defaultOptions: SwiperOptions = {
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

export const ProfileCustomSliderOptions: SwiperOptions = {
  ...defaultOptions,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1000: {
      slidesPerView: 2
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

export const certificateCoursesSliderOptions: SwiperOptions = {
  ...defaultOptions,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1060: {
      slidesPerView: 2
    },
    1360: {
      slidesPerView: 3
    }
  }
}

export const pilarsSliderOptions: SwiperOptions = {
  ...defaultOptions,
  injectStyles: [
    `.swiper-button-next, .swiper-button-prev {
      width: 20px !important;
      height: 20px !important;
      color: #FFFFFF !important;
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
  ],
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    420: {
      slidesPerView: 2
    },
    620: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1060: {
      slidesPerView: 5
    },
    1360: {
      slidesPerView: 6
    }
  }
}
