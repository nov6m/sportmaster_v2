<template>
  <section class="swiper__section">
    <v-container>
      <div class="swiper__title primaryText--text">
        {{ CONFIG.title }}
      </div>
      <div class="swiper mt-2 mt-sm-4 d-flex justify-center">
        <img :src="CONFIG.background" class="swiper__background" />
        <div class="swiper-wrapper">
          <div v-for="(slide, idx) in CONFIG.slides" :key="idx" class="swiper-slide">
            <div class="slide contrast d-flex flex-column justify-space-between justify-sm-start py-7 px-5 py-sm-10 px-sm-8">
              <div v-html="slide.text" />
              <div class="mt-6 d-flex">
                <img :src="slide.photo" class="slide-photo mr-2" />
                <div>
                  <div class="quaternary--text slide-name">
                    {{ slide.name }}
                  </div>
                  <div class="slide-type">
                    {{ slide.type }}
                  </div>
                  <div class="slide-time">
                    {{ slide.time }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import Swiper from 'swiper';
// Import Swiper styles
import 'swiper/css';

const CONFIG = Object.freeze({
  title: 'Что о нас говорят партнёры ',
  background: require('@/assets/images/background/review-background.png'),
  slides: [
    {
      text: 'Работаю со Спортмастером с 2022 года. Поддержка работает отлично, отвечают всегда оперативно, если есть какие-то проблемы или нужна дополнительная информация – всегда помогают. Честная, удобная партнерка.',
      name: 'Дмитрий Данилов',
      type: 'фитнес-тренер',
      time: '2 февраля 2024',
      photo: require('@/assets/images/review/avatar1.png')
    },
    {
      text: 'Как блогер стилист, я часто делаю подборки товаров для своей аудитории в соц сетях. И в Спортмастере я нашла очень много клевой, стильной и современной одежды! <br><br> Я в восторге от возможности получать хороший дополнительный доход благодаря партнерской программе Спортмастера 🤟',
      name: 'Диана Петрова',
      type: 'стилист, блогер',
      time: '23 июня 2024',
      photo: require('@/assets/images/review/avatar2.png')
    },
    {
      text: 'Я участвую в этой партнёрке уже несколько месяцев и могу сказать, что это просто бомба! 💣💣💣 <br><br> Всё работает чётко, деньги приходят без задержек. Поддержка отвечает быстро, если есть какие-то вопросы. Рекомендую всем, кто хочет заработать!',
      name: 'Kristina Coss',
      type: 'инструктор по йоге',
      time: '17 марта 2024',
      photo: require('@/assets/images/review/avatar3.png')
    }
  ]
})

export default {
  name: 'ReviewSwiper',
  data() {
    return {
      CONFIG,
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper('.review-swiper .swiper', {
      slidesPerView: 1.2,
      spaceBetween: 10,
      breakpoints: {
        481 :{
          spaceBetween: 24,
        },
        640: {
          slidesPerView: 1.3,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          centeredSlides: false, 
        }
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  width: 100%;
  z-index: 10;
  padding: 15px;
  margin: -15px;
  overflow: unset;

  @media(min-width: map-get($grid-breakpoints, 'lg')) {
    overflow: hidden;
  }

  &__section {
    overflow: hidden;
  }

  &__background {
    position: absolute;
    height: 100%;
    top: 0;
    bottom: 0;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 48px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 54px;
    }
  }

  &-slide {
    height: auto;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      height: min-content;
    }
  }

  & .slide {
    border: 1px solid #E8EEFD;
    box-shadow: 2px 10px 20px 0px #051E5B12;
    border-radius: 20px;
    height: 100%;
    box-sizing: border-box;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      border-radius: 40px;
      height: unset;
    }
  }


  & .slide {
    &-photo {
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }

    &-name {
      font-weight: 500;
      font-size: 14px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        font-size: 16px;
      }
    }

    &-type {
      color: #676767;
      font-weight: 400;
      font-size: 10px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        font-size: 13px;
      }
    }

    &-time {
      font-weight: 400;
      font-size: 8px;
      color: #BABABA;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        font-size: 11px;
      }
    }
  }
}
</style>