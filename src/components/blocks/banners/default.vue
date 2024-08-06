<template>
  <section>
    <v-container>
      <div class="banner d-flex flex-column align-center">
        <div class="banner__title contrast--text text-center d-flex flex-column justify-center flex-lg-row flex-lg-wrap">
          <div class="banner__container-line">
            {{ CONFIG.title.line1 }}
            <span class="banner__title-line d-none d-md-block">
              <img :src="CONFIG.textLine" />
            </span>
          </div>
          <div class="ml-lg-8">
            {{ CONFIG.title.line2 }}
          </div>
        </div>
        <div class="banner__subtitle text-center contrast--text">
          <div>
            <b>
              {{ CONFIG.subtitle.line1 }}
            </b>
          </div>
          <div>
            {{ CONFIG.subtitle.line2 }}
          </div>
        </div>
        <div class="banner__container-action d-flex flex-column align-center">
          <RouterLink :to="CONFIG.connectButtonLink" class="text-decoration-none">
            <v-button
              :block="isMobile"
              :large="isTablet"
              :x-large="!isMobile && !isTablet"
              class="quaternary--text banner__button"
            >
              {{ CONFIG.connectButtonText }}
            </v-button>
          </RouterLink>
          <v-button
            :block="isMobile"
            :href="CONFIG.lkButtonLink"
            outlined
            :large="isTablet"
            :x-large="!isMobile && !isTablet"
            color="contrast"
            class="mt-4 mt-sm-5 d-lg-none banner__button"
          >
            {{ CONFIG.lkButtonText }}
          </v-button>
        </div>
        <img :src="CONFIG.background" class="banner__background-image" />
      </div>
    </v-container>
  </section>
</template>

<script>
import { VButton } from '@/components/ui'
import { size } from '@/core/mixins'

const CONFIG = Object.freeze({
  title: {
    line1: 'Партнёрская',
    line2: 'программа'
  },
  subtitle: {
    line1: 'Делитесь ссылкой и получайте 8%',
    line2: 'за онлайн-заказы новых клиентов'
  },
  connectButtonText: 'Присоединиться',
  connectButtonLink: '/#form',
  lkButtonText: 'Войти в личный кабинет',
  lkButtonLink: '/',
  background: require('@/assets/images/background/logo.png'),
  textLine: require('@/assets/images/background/line.png')
})

export default {
  name: 'MainBannerDefault',
  components: { VButton },
  mixins: [size],
  data() {
    return {
      CONFIG
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  border-radius: 36px;
  background: radial-gradient(45.45% 144.89% at 94.2% 85.57%, rgba(255, 90, 34, 0.7) 0%, rgba(255, 65, 0, 0) 100%),
              radial-gradient(81.5% 81.5% at 32.47% 12.5%, rgba(95, 7, 208, 0.5) 0%, rgba(95, 7, 208, 0) 100%),
              radial-gradient(67.4% 70.1% at -6.94% 2.58%, rgba(0, 71, 255, 0.5) 0%, rgba(0, 71, 255, 0) 100%),
              radial-gradient(26.74% 27.84% at 66.69% 9.28%, rgba(216, 35, 84, 0.5) 0%, rgba(216, 35, 84, 0) 100%),
              radial-gradient(77.16% 166.26% at 69.94% 37.5%, rgba(249, 6, 227, 0.5) 0%, rgba(249, 6, 227, 0) 100%),
              radial-gradient(87.88% 108.26% at 52.68% 26.8%, rgba(249, 6, 227, 0.5) 0%, rgba(249, 6, 227, 0) 100%),
              linear-gradient(81.65deg, rgba(64, 56, 235, 1) 6.18%, rgba(70, 48, 204, 1) 20.26%, rgba(207, 74, 26, 1) 79.9%);
  padding: 32px 16px;
  position: relative;

  @media(min-width: map-get($grid-breakpoints, 'sm')) {
    border-radius: 60px;
    padding: 80px 40px 88px;
  }

  @media(min-width: map-get($grid-breakpoints, 'md')) {
    padding: 132px 40px;
  }

  &__title {
    font-weight: 700;
    font-size: 36px;
    position: relative;
    width: min-content;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 48px;
    }
    @media(min-width: 560px) {
      font-size: 68px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 78px;
    }
    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      font-size: 90px;
      width: unset;
    }

    &-line {
      position: absolute;
      top: 100%;
      left: 0;
      @media(min-width: map-get($grid-breakpoints, 'lg')) {
        width: unset;
      }

      & > img {
        width: 105%;
      }
    }
  }

  &__subtitle {
    margin-top: 24px;
    font-size: 20px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      margin-top: 32px;
      font-size: 32px;
    }
    @media(min-width: 560px) {
      font-size: 44px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      margin-top: 84px;
      font-size: 48px;
    }
  }

  &__container {
    &-line {
      position: relative;
    }

    &-action {
      margin-top: 32px;
      width: 100%;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        margin-top: 80px;
      }

      @media(min-width: map-get($grid-breakpoints, 'md')) {
        margin-top: 96px;
      }
    }
  }

  &__background-image {
    position: absolute;
    height: 345px;
    left: 0;
    top: 22px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      height: 650px;
      top: 30px;
    }
  }

  &__button {
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      width: 410px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      width: 527px;
    }
    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      width: 408px;
    }
  }
}
</style>
