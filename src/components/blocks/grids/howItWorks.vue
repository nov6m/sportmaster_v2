<template>
  <section class="grid">
    <v-container>
      <div class="grid__title primaryText--text">
        {{ CONFIG.title }}
      </div>
      <div class="grid__container mt-2 mt-sm-4">
        <how-it-works-card
          v-for="(card, idx) in CONFIG.cards"
          :key="idx"
          :index="idx"
          :title="card.title"
          :subtitle="card.subtitle"
          :background="card.background"
          :list="card.list"
          :image="card.image"
          :class="[card.color]"
          class="grid__card"
        />
      </div>
    </v-container>
  </section>
</template>

<script>
import { HowItWorksCard } from './shared'

const CONFIG = Object.freeze({
  title: 'Как это работает',
  cards: [
    {
      title: 'Зарегистрируйтесь',
      subtitle: 'Регистрация в партнёрской программе займет пару минут',
      background: require('@/assets/images/background/logo_full.png'),
      color: 'primary'
    },
    {
      title: 'Поделитесь ссылкой ',
      subtitle: 'Она доступна в личном кабинете. Покупатели получат скидку 10% на первый онлайн-заказ',
      color: 'secondary'
    },
    {
      title: 'Зарабаты&shy;вайте ',
      subtitle: 'Начислим процент за онлайн-покупки по вашей ссылке',
      color: 'tertiary',
      list: [
        {
          percent: '8 %',
          description: 'за нового клиента'
        },
        {
          percent: '3 %',
          description: 'уже зарегистри&shy;рованного'
        }
      ],
      image: require('@/assets/images/howItWorks/coin.png')
    }
  ]
})

export default {
  name: 'HowItWorksGrid',
  components: { HowItWorksCard },
  data() {
    return {
      CONFIG
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  overflow: hidden;
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

  &__container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 16px;
      row-gap: 16px;

      & .grid__card:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    @media(min-width: map-get($grid-breakpoints, 'md')) {
      row-gap: 20px;
      column-gap: 20px;
    }
    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      grid-template-columns: repeat(3, 1fr);

      & .grid__card:first-child {
        grid-column-start: unset;
        grid-column-end: unset;
      }
    }
  }
}
</style>