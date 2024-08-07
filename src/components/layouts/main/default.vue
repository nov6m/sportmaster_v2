<template>
  <main class="main-page">
    <main-banner-default class="main-banner" />
    <how-it-works-grid id="how-it-works" class="how-it-works-grid" />
    <will-get-grid id="will-get" class="will-get-grid" />
    <how-earn-banner class="how-earn-banner" />
    <review-swiper class="review-swiper" />
    <form-default id="form" class="form-default" />
    <faq-expansions if="faq" class="faq-expansions" />
    <v-top-button />
  </main>
</template>

<script>
import {
  MainBannerDefault,
  HowItWorksGrid,
  WillGetGrid,
  HowEarnBanner,
  ReviewSwiper,
  FormDefault,
  FaqExpansions
} from '@/components/blocks'

import {
  VTopButton
} from '@/components/ui'

export default {
  name: 'MainDefault',
  components: {
    MainBannerDefault,
    HowItWorksGrid,
    WillGetGrid,
    HowEarnBanner,
    ReviewSwiper,
    FormDefault,
    FaqExpansions,
    VTopButton
  }
}
</script>

<style lang="scss" scoped>
.main-banner {
  padding-top: 20px;

  @media(min-width: map-get($grid-breakpoints, 'md')) {
    padding-top: 40px;
  }
}
.how-it-works-grid,
.review-swiper {
  padding: 32px 0;

  @media(min-width: map-get($grid-breakpoints, 'sm')) {
    padding: 56px 0;
  }

  @media(min-width: map-get($grid-breakpoints, 'md')) {
    padding: 80px 0;
  }
}

.how-earn-banner {
  padding-top: 32px;

  @media(min-width: map-get($grid-breakpoints, 'sm')) {
    padding-top: 56px;
  }

  @media(min-width: map-get($grid-breakpoints, 'md')) {
    padding-top: 80px;
  }
}

.faq-expansions {
  padding: 32px 0 44px 0;

  @media(min-width: map-get($grid-breakpoints, 'sm')) {
    padding-top: 56px;
  }

  @media(min-width: map-get($grid-breakpoints, 'md')) {
    padding: 80px 0 64px 0;
  }
}
</style>