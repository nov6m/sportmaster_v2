<template>
  <div class="modal contrast d-flex flex-column align-center">
    <img v-if="!isError" :src="CONFIG.image" class="modal__image" />
    <div class="modal__title textPrimary--text mt-1 mt-sm-2 text-center">
      <span v-if="!isError">
        {{ CONFIG.title }}
      </span>
      <span v-else>
        Ошибка отправки!
      </span>
    </div>
    <div v-if="!isError" class="modal__subtitle textPrimary--text text-center mt-1 mt-sm-3">
      {{ CONFIG.subtitle }}
    </div>
    <v-button color="primary" class="mt-5 mt-sm-8 modal__button" @click="closeHandler">
      <span v-if="!isError">
        {{ CONFIG.buttonText }}
      </span>
      <span v-else>
        Понятно
      </span>
    </v-button>
  </div>
</template>

<script>
import { VButton } from '@/components/ui';

const CONFIG = Object.freeze({
  image: require('@/assets/images/modals/congrats.png'),
  title: 'Вы зарегистрировались!',
  subtitle: 'На создание личного кабинета потребуется некоторое время. Когда всё будет готово мы отправим вам уведомление по электронной почте',
  buttonText: 'Отлично'
})

export default {
  name: 'ModalDefault',
  components: { VButton },
  props: {
    isError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      CONFIG
    }
  },
  methods: {
    closeHandler() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  border-radius: 40px;
  padding: 24px 20px 28px;
  @media(min-width: map-get($grid-breakpoints, 'sm')) {
    border-radius: 60px;
    padding: 60px 50px;
  }

  &__image {
    height: 60px;
    width: 60px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      height: 85px;
      width: 85px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 20px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 37px;
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 14px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 20px;
    }
  }

  &__button {
    width: 132px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      width: 158px;
    }
  }
}
</style>