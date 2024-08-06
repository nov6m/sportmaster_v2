<template>
  <footer class="footer footer__divider py-5 py-sm-6 py-md-10">
    <div class="container-secondary footer__container d-flex flex-column flex-md-row justify-md-space-between">
      <div class="footer__container-left d-flex flex-column">
        <div class="d-flex flex-column flex-sm-row footer__container-logo">
          <div>
            <img :src="CONFIG.logoMainShort" class="footer__logo" />
          </div>
          <div>
            <img :src="CONFIG.logoParthner" class="footer__logo" />
          </div>
        </div>
        <div>
          <a :href="`mailto:${CONFIG.email}`" class="footer__email primary--text">{{ CONFIG.email }}</a>
        </div>
      </div>
      <div class="footer__container-right d-flex flex-column">
        <nav class="footer__navigation d-flex flex-column flex-sm-row">
          <RouterLink v-for="(item, key) in CONFIG.nav" :key="key" :to="item.link" class="footer__navigation_item primaryText--text text-md-center">
            {{ item.text }}
          </RouterLink>
        </nav>
        <div class="footer__additional d-flex flex-column flex-sm-row">
          <a v-for="(item, key) in CONFIG.additional" :key="key" :href="item.path" class="footer__additional_item secondaryText--text">{{ item.text }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { CONFIG_LAYOUT as CONFIG } from '@/core/constants'

export default {
  name: 'FooterDefault',
  data() {
    return {
      CONFIG
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  &__divider {
    border-top: 1px solid #E3E3E3;
  }

  &__container {
    row-gap: 32px;
    column-gap: 32px;

    &-logo {
      row-gap: 20px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        column-gap: 20px;
      }
    }

    &-left {
      row-gap: 20px;

      @media(min-width: map-get($grid-breakpoints, 'md')) {
        row-gap: 32px;
      }
    }

    &-right {
      row-gap: 32px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        row-gap: 20px;
      }

      @media(min-width: map-get($grid-breakpoints, 'md')) {
        row-gap: 32px;
      }
    }
  }

  &__logo {
    height: 20px;
  }

  &__email {
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__navigation {
    row-gap: 32px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      column-gap: 32px;
    }

    &_item {
      font-weight: 500;
      font-size: 16px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__additional {
    row-gap: 32px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      column-gap: 32px;
    }

    &_item {
      font-weight: 300;
      font-size: 13px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>