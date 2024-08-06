<template>
  <section class="faq">
    <v-container>
      <div class="faq__header">
        Вопросы и ответы
      </div>
      <v-expansion-panels v-model="openPanels" multiple class="mt-4">
        <v-expansion-panel
          v-for="(panel, idx) in CONFIG"
          :key="idx"
        >
          <v-expansion-panel-header>
            <div class="faq__title">
              {{ panel.title }}
            </div>
            <template v-slot:actions>
              <v-icon v-if="!isOpen(idx)" color="tertiaryText">
                mdi-chevron-down
              </v-icon>
              <v-icon v-else color="primary">
                mdi-close
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="faq__subtitle">
              {{ panel.subtitle }}
            </div>
            <div v-if="panel.isForm" class="mt-3 mt-sm-5 d-flex flex-column faq__panel-form flex-lg-row">
              <div class="faq__panel-form-container">
                <v-form v-model="valid" ref="form">
                  <div class="faq__fields contrast">
                    <div class="mt-3 mx-3 mb-2">
                      <v-text-field
                        solo
                        hide-details
                        v-model="form.email"
                        :rules="RULES.email"
                        label="Электронная почта"
                        class="faq__input"
                      />
                    </div>
                    <div class="faq__divider" />
                    <div class="mt-2 mx-3 mb-3">
                      <v-textarea
                        solo
                        hide-details
                        v-model="form.text"
                        :rules="RULES.text"
                        label="Что хотите узнать"
                        class="faq__textarea"
                      />
                    </div>
                  </div>
                  <v-button
                    v-if="isDesktop"
                    :disabled="!valid"
                    x-small
                    color="primary"
                    class="faq__button mt-5"
                    @click="senForm"
                  >
                    {{ panel.buttonText }}
                  </v-button>
                </v-form>
              </div>
              <div class="d-flex ml-lg-10">
                <img :src="panel.descriptionImg" class="mr-3 faq__panel-desc-image" />
                <div v-html="panel.description" class="faq__panel-description secondaryText--text" />
              </div>
              <v-button
                v-if="!isDesktop"
                :disabled="!valid"
                :block="isMobile"
                x-small
                color="primary"
                class="faq__button"
                @click="senForm"
              >
                {{ panel.buttonText }}
              </v-button>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </section>
</template>

<script>
import { VButton } from '@/components/ui'
import { size } from '@/core/mixins'

const CONFIG = Object.freeze([
  {
    title: 'Какой налоговый статус нужен для работы?',
    subtitle: 'Выплаты вознаграждения производятся на ваш расчетный счет'
  },
  {
    title: 'Как я смогу получить деньги?',
    subtitle: 'Выплаты вознаграждения производятся на ваш расчетный счет'
  },
  {
    title: 'Как быстро будет насчислен процент за покупки?',
    subtitle: 'Выплаты вознаграждения производятся на ваш расчетный счет'
  },
  {
    title: 'Что такое реферальная ссылка?',
    subtitle: 'Выплаты вознаграждения производятся на ваш расчетный счет'
  },
  {
    title: 'Задать вопрос',
    subtitle: 'Постараемся ответить как можно быстрее',
    isForm: true,
    buttonText: 'Отправить',
    description: 'Можете оставить запрос через форму <a :href="/" class="text-decoration-none primary--text">в личном кабинете</a> партнера «Лидпортал»',
    descriptionImg: require('@/assets/images/faq/mail.png')
  }
])

const RULES = Object.freeze({
  text: [
    v => !!v || 'Поле "Вопрос" обязательно',
    v => v.length > 10 || 'Поле "Вопрос" не может состоять из 10 символа'
  ],
  email: [
    v => !!v || 'Поле "Email" обязательно',
    v => /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(v) || 'Поле "Email" не верное'
  ]
})

const FORM_DEFAULT = {
  email: '',
  text: ''
}

export default {
  name: 'FaqExpansions',
  components: { VButton },
  mixins: [size],
  data() {
    return {
      RULES,
      CONFIG,
      openPanels: [],
      form: Object.assign({}, FORM_DEFAULT ),
      valid: false
    }
  },
  methods: {
    isOpen(idx) {
      return this.openPanels.includes(idx)
    },
    senForm() {
      console.log('send')
      this.form = Object.assign({}, FORM_DEFAULT )
      this.$refs.form?.resetValidation?.()
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  &__header {
    font-weight: 700;
    font-size: 24px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 48px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 54px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 28px;
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 14px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 20px;
    }
  }

  &__divider {
    height: 1px;
    width: 100%;
    background-color: #E3E3E3;
  }

  &__fields {
    border-radius: 32px;
    border: 1px solid #E3E3E3;
  }

  &__input,
  &__textarea {
    border-radius: 12px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      border-radius: 20px;
    }

    ::v-deep {
      &.v-input--is-focused {
        border: 1px solid;
      }
      & input,
      & textarea {
        font-weight: 400;
        font-size: 14px;

        @media(min-width: map-get($grid-breakpoints, 'sm')) {
          font-size: 18px;
        }
      }

      .v-label {
        color: #D0D0D0;
        font-weight: 400;
        font-size: 14px;

        @media(min-width: map-get($grid-breakpoints, 'sm')) {
          font-size: 18px;
        }
      }
    }
  }

  &__panel {
    &-form {
      row-gap: 16px;

      &-container {
        width: 100%;
        @media(min-width: map-get($grid-breakpoints, 'lg')) {
          width: 793px;
        }
        
        ::v-deep {
          & .v-input__control > .v-input__slot {
            box-shadow: unset !important;
          }
        }
      }
    }
    &-description {
      font-weight: 400;
      font-size: 12px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        font-size: 14px;
      }
    }
    &-desc-image {
      height: 22px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        font-size: 33px;
      }
    }
  }

  &__button {
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      width: 180px;
    }
    ::v-deep {
      &.v-btn.v-btn--disabled.v-btn--has-bg {
        background-color: #C7D4F2 !important;
        color: #FFF !important;
      }
    }
  }

  ::v-deep {
    .v-expansion-panels {
      row-gap: 10px;
      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        row-gap: 12px;
      }
    }

    .v-expansion-panel--active + .v-expansion-panel,
    .v-expansion-panel--active:not(:first-child) {
      margin-top: unset;
    }

    .v-expansion-panel {
      border-radius: 16px !important;
      border: 1px solid #D9E8FA;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        border-radius: 20px !important;
      }
    }
    
    .v-expansion-panel-header {
      padding: 16px 20px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        padding: 32px;
      }
      @media(min-width: map-get($grid-breakpoints, 'md')) {
        padding: 40px;
      }
    }
    .v-expansion-panel-content__wrap {
      padding: 16px 20px;
      padding-top: 0;
      
      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        padding: 32px;
        padding-top: 0;
      }
      @media(min-width: map-get($grid-breakpoints, 'md')) {
        padding: 40px;
        padding-top: 0;
      }
    }

    .v-expansion-panel--active {
      border-color: transparent;
      background: #F2F6FF;
    }

    .v-expansion-panel::before {
      box-shadow: unset;
    }
    .v-expansion-panel::after {
      border: unset;
    }
    .v-expansion-panel-header__icon {
      margin-left: 10px;
    }
  }
}
</style>