<template>
  <section>
    <v-container>
      <div class="banner">
        <div class="container-title d-flex flex-column align-sm-center flex-lg-row justify-lg-center">
          <div class="banner__title contrast--text text-sm-center">
            {{ CONFIG.title.line1 }}
          </div>
          <div class="banner__title container-line contrast--text ml-lg-5 text-sm-center">
            {{ CONFIG.title.line2 }}
            <span class="banner__title-line d-none d-md-block">
              <img :src="CONFIG.textLine" />
            </span>
          </div>
        </div>
        <div class="banner__subtitle mt-2 mt-sm-9 contrast--text text-sm-center" v-html="CONFIG.subtitle" />
        <div class="banner__chips d-flex justify-sm-center flex-wrap mt-4 mt-sm-9">
          <div
            v-for="(link, idx) in CONFIG.chips"
            :key="idx"
            class="banner__chip contrast--text"
          >
            {{ link.text }}
          </div>
        </div>
       <div class="d-flex flex-column align-center">
        <RouterLink :to="CONFIG.buttonLink" class="text-decoration-none">
          <v-button
            :large="isTablet"
            :x-large="!isMobile && !isTablet"
            :block="isMobile"
            class="mt-6 mt-sm-14 quaternary--text banner__button"
          >
            {{ CONFIG.buttonText }}
          </v-button>
        </RouterLink>
       </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import { VButton } from '@/components/ui';
import { size } from '@/core/mixins';

const CONFIG = Object.freeze({
  title: {
    line1: 'Как зарабатывать',
    line2: 'больше'
  },
  subtitle: 'Делитесь ссылками в социальных сетях и мессенджерах. <br> Больше охват — выше заработок',
  chips: [
    {
      text: 'VK'
    },
    {
      text: 'Telegram'
    },
    {
      text: 'WhatsApp'
    },
    {
      text: 'Viber'
    },
    {
      text: 'TikTok'
    },
    {
      text: 'YouTube'
    },
    {
      text: 'Дзен'
    },
    {
      text: 'LiveJournal'
    },
    {
      text: 'Одноклассники'
    },
    {
      text: 'RuTube'
    },
  ],
  buttonText: 'Присоединиться',
  buttonLink: '/#form',
  textLine: require('@/assets/images/background/line.png')
})

export default {
  name: 'HowEarnBanner',
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
  padding: 20px;
  background: linear-gradient(259.64deg, #5418A1 5.33%, #FF3B7F 99.15%),
              radial-gradient(37.5% 57.76% at 47.58% 35.36%, rgba(149, 49, 151, 0.6) 0%, rgba(149, 49, 151, 0) 100%),
              radial-gradient(42.6% 42.6% at 15.22% 0%, rgba(251, 110, 190, 0.5) 0%, rgba(251, 110, 190, 0) 100%);
  border-radius: 36px;

  @media(min-width: map-get($grid-breakpoints, 'sm')) {
    padding: 40px 32px;
    border-radius: 60px;
  }
  @media(min-width: map-get($grid-breakpoints, 'md')) {
    padding: 68px;
  }
  @media(min-width: map-get($grid-breakpoints, 'lg')) {
    padding: 68px 101px;
  }

  & .container {
    &-line {
      position: relative;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 24px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 54px;
    }

    &-line {
      position: absolute;
      top: 80%;
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
    font-weight: 500;
    font-size: 16px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 28px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 32px;
    }
  }

  &__chips {
    row-gap: 6px;
    column-gap: 4px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      column-gap: 6px;
      row-gap: 12px;
    }
    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      padding: 0 108px;
    }
    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      padding: 0 148px;
    }
  }

  &__chip {
    opacity: 0.5;
    border: 1px solid #FFFFFF;
    padding: 2px 8px;
    transition: opacity 0.3s;
    border-radius: 16px;
    font-weight: 400;
    font-size: 12px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 20px;
    }
  }

  &__button {
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      width: 344px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      width: 408px;
    }
  }
}
</style>