<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    outlined
    hide-details
    ref="input"
    class="v-input-custom"
    @blur="checkError"
    @input="checkError"
  >
    <template v-slot:append>
      <v-fade-transition leave-absolute>
        <img
          v-if="isError"
          :width="isMobile ? '16' : '31'"
          :height="isMobile ? '16' : '31'"
          :src="require('@/assets/images/icons/warning.png')"
          alt=""
        />
      </v-fade-transition>
    </template>
  </v-text-field>
</template>

<script>
import { size } from '@/core/mixins';


export default {
  name: 'VInputCustom',
  mixins: [size],
  data() {
    return {
      isError: false
    }
  },
  methods: {
    checkError() {
      const el = this.$refs.input
      if (!(el instanceof HTMLElement)) this.isError = false
      this.isError = [...el.$el.classList].includes('error--text')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-input-custom {
  width: 100%;
  border-radius: 16px;

  @media(min-width: map-get($grid-breakpoints, 'sm')) {
    border-radius: 32px;
  }

  ::v-deep {
    .v-input__slot {
      background: #517AE2;
    }

    &.v-text-field--outlined {
      &.v-input--is-focused fieldset {
        border: 1px solid #FFF !important;
      }

      
      &.v-input--has-state:not(.v-input--is-focused) fieldset {
        border: 2px solid #FFB907 !important;
      }
    }
    & .v-label {
      color: #97AFEE !important;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        top: 50%;
        transform: translateY(-50%);
      }
    }
    & .v-label--active {
      top: 30px !important;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        top: 40px !important;
      }
    }

      & legend {
        width: 0px !important;
      }
    

    & .v-label {
      color: #97AFEE;
      font-weight: 400;
      font-size: 16px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        font-size: 28px;
        height: 28px;
        line-height: 28px;
      }
    }

    & .error--text {
      color: #97AFEE !important;
    }
    &.v-input input {
      color: #ffffff !important;
    }

    &.v-input input {
      font-size: 16px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        font-size: 28px;
      }
    }

    &.v-text-field--outlined:not(.v-input--is-focused) > .v-input__control > .v-input__slot fieldset,
    &.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled) > .v-input__control > .v-input__slot:hover fieldset {
      color: #517AE2;
    }

    &.v-text-field--outlined .v-label--active {
      transform: translateY(-24px) scale(0.65);

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        transform: translateY(-24px) scale(0.5);
      }
    }

    & .v-input__append-inner {
      margin-top: 20px;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        margin-top: 33px;
      }
    }

    & .v-text-field__slot {
      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        height: 96px;
      }
    }

    & .v-input__slot {
      padding: 0 12px !important;

      @media(min-width: map-get($grid-breakpoints, 'sm')) {
        padding: 0 32px !important;
      }
    }
  }
}
</style>