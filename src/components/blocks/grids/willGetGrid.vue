<template>
  <section class="grid">
    <v-container>
      <div class="grid__title primaryText--text">
        {{ CONFIG.title }}
      </div>
      <div class="grid__container mt-2 mt-sm-4">
        <will-get-card
          v-for="(card, idx) in CONFIG.cards"
          :key="idx"
          :image="card.image"
          :title="card.title"
          :subtitle="card.subtitle"
        />
      </div>
    </v-container>
  </section>
</template>

<script>
import { WillGetCard } from './shared'

const CONFIG = Object.freeze({
  title: 'Что вы получите',
  cards: [
    {
      image: require('@/assets/images/willGet/start.png'),
      title: 'Легкий старт',
      subtitle: 'С любым  налоговым статусом — физлица, самозанятые, ИП, ЮЛ '
    },
    {
      image: require('@/assets/images/willGet/education.png'),
      title: 'Обучение',
      subtitle: 'Полезные курсы по товарам и навыкам продаж '
    },
    {
      image: require('@/assets/images/willGet/calendar.png'),
      title: 'Календарь акций',
      subtitle: 'Полный список всех промо и скидок сезона  '
    },
    {
      image: require('@/assets/images/willGet/lk.png'),
      title: 'Личный кабинет',
      subtitle: 'Понятный интерфейс, чтобы отслеживать продажи '
    },
    {
      image: require('@/assets/images/willGet/community.png'),
      title: 'Комьюнити',
      subtitle: 'Общение и помощь сообщества партнёров онлайн  '
    }
  ]
})
export default {
  name: 'WillGetGrid',
  components: { WillGetCard },
  data() {
    return {
      CONFIG
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
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
    row-gap: 8px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    @media(min-width: map-get($grid-breakpoints, 'md')) {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>