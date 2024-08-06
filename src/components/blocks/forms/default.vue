<template>
  <section class="form__wrapper">
    <v-container>
      <v-form ref="form" class="form-container d-flex flex-column align-center" v-model="valid">
        <img :src="image" class="form__image d-none d-sm-block" />
        <div class="contrast--text form__title text-sm-center">
          Присоединяйтесь к нам
        </div>
        <div class="mt-3 mt-sm-12 form__action d-flex flex-column align-center">
          <div class="d-flex flex-column form__fields">
            <v-input-custom
              v-for="(field, idx) in CONFIG"
              :key="idx"
              v-model="form[field.key]"
              :label="field.placeholder"
              :rules="RULES[field.key]"
              v-mask="field.mask || ''"
              return-masked-value
            />
          </div>
          <v-button
            :disabled="!valid"
            :large="isTablet"
            :x-large="!isMobile && !isTablet"
            :block="isMobile"
            class="form__button primary--text"
            color="contrast"
            @click="sendForm"
          >
            Зарегистрироваться
          </v-button>
        </div>
      </v-form>
      <v-dialog v-model="dialog" attach :width="modalSize">
        <ModalDefault @close="dialog = false" />
      </v-dialog>
    </v-container>
  </section>
</template>

<script>
import { VButton, VInputCustom } from '@/components/ui';
import { ModalDefault } from '@/components/modals'
import { size } from '@/core/mixins'

const CONFIG = Object.freeze([
  {
    key: 'name',
    placeholder: 'Имя'
  },
  {
    key: 'surname',
    placeholder: 'Фамилия'
  },
  {
    key: 'phone',
    placeholder: 'Номер телефона',
    mask: '+7 (###) ###-####',
    return_masked_value: true
  },
  {
    key: 'email',
    placeholder: 'Электронная почта'
  }
])

const RULES = Object.freeze({
  surname: [
    v => !!v || 'Поле "Фамилия" обязательно',
    v => v.length >= 2 || 'Поле "Фамилия" не может состоять из 1 символа'
  ],
  name: [
    v => !!v || 'Поле "Имя" обязательно',
    v => v.length >= 2 || 'Поле "Имя" не может состоять из 1 символа'
  ],
  phone: [
    v => !!v || 'Поле "Телефон" обязательно',
    v => /(?:\\+|\d)[\d\-\\(\\) ]{6,11}\d/g.test(v) || 'Поле "Телефон" не верное'
  ],
  email: [
    v => !!v || 'Поле "Email" обязательно',
    v => /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(v) || 'Поле "Email" не верное'
  ]
})

const defaultForm = {
  surname: '',
  name: '',
  phone: '',
  email: ''
}

const image = require('@/assets/images/background/logo_full.png')

export default {
  name: 'FormDefault',
  components: { VButton, VInputCustom, ModalDefault },
  mixins: [size],
  data() {
    return {
      CONFIG,
      RULES,
      image,
      valid: false,
      form: Object.assign({}, defaultForm),
      dialog: false
    }
  },
  computed: {
    modalSize() {
      return this.isDesktop ? '750' : this.isMobile ? '332' : 720
    }
  },
  methods: {
    sendForm() {
      this.form = Object.assign({}, defaultForm)
      this.$refs.form?.resetValidation?.()
      this.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &-container {
    background: linear-gradient(179.84deg, #0A4FFF 0.28%, #012FA2 101.66%);
    border-radius: 36px;
    padding: 20px;
    position: relative;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      padding: 56px 32px 80px;
    }

    @media(min-width: map-get($grid-breakpoints, 'md')) {
      padding: 90px 60px 104px;
    }
  }

  &__image {
    position: absolute;
    -webkit-user-drag: none;
    left: -15%;
    transform: scale(3);
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      left: -10%;
    }
    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      left: -10%;
    }
    @media(min-width: map-get($grid-breakpoints, 'xl')) {
      left: 0%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    width: 100%;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 40px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 48px;
    }
    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      font-size: 56px;
    }
  }

  &__action {
    max-width: 772px;
    width: 100%;
  }

  &__fields {
    width: 100%;
    row-gap: 10px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      row-gap: 32px;
    }
  }

  &__button {
    margin-top: 14px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      margin-top: 54px;
      width: 402px;
    }

    @media(min-width: map-get($grid-breakpoints, 'md')) {
      width: 466px;
    }
  }

  &__wrapper {
    overflow: hidden;
    ::v-deep {
      .v-dialog {
        box-shadow: unset !important;
      }
    }
  }
}
</style>