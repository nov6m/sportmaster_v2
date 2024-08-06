<template>
  <header class="header header__divider_max">
    <div :class="{ 'container-secondary': isDesktop }" class="header__container d-flex flex-column flex-lg-row justify-lg-space-between">
      <div class="header__divider_min d-flex justify-center pt-5 pb-3 py-md-3 py-lg-6">
        <img :src="CONFIG.logoMain" class="header__logo" />
      </div>
      <div class="header__divider_min py-lg-6 d-lg-flex align-lg-center">
        <nav :class="{ 'container-secondary': !isDesktop }" class="header__navigation d-flex justisfy-space-between pt-2 pb-3 py-md-3 py-lg-0">
          <RouterLink v-for="(item, key) in CONFIG.nav" :key="key" :to="item.link" class="header__navigation_item primaryText--text">
            {{ item.text }}
          </RouterLink>
        </nav>
        <v-button
          v-if="isDesktop"
          :href="CONFIG.buttonLink"
          x-small
          outlined
          color="primary"
          class="ml-10"
        >
          {{ CONFIG.buttonText }}
        </v-button>
      </div>
    </div>
  </header>
</template>

<script>
import { size } from '@/core/mixins'
import { CONFIG_LAYOUT as CONFIG } from '@/core/constants'
import { VButton } from '@/components/ui' 

export default {
  name: 'HeaderDefault',
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
.header {
  &__logo {
    height: 45px;

    @media(min-width: map-get($grid-breakpoints, 'md')) {
      height: 62px;
    }
  }

  &__divider {
    &_min  {
      border-bottom: 1px solid #E3E3E3;
      @media(min-width: map-get($grid-breakpoints, 'lg')) {
        border-bottom: unset;
      }
    }

    &_max {
      @media(min-width: map-get($grid-breakpoints, 'lg')) {
        border-bottom: 1px solid #E3E3E3;
      }
    }
  }

  &__navigation {
    column-gap: 14px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      column-gap: 32px;
    }


    &_item {
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }

      @media(min-width: map-get($grid-breakpoints, 'md')) {
        font-size: 16px;
      }
    }
  }
}
</style>