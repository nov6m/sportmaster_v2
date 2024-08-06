<template>
  <div class="card-default pa-5 px-sm-8 pa-md-8 pb-10 pb-md-10">
    <img v-if="background" :src="background" class="card-default__background" />
    <div class="card-default__container">
      <div v-if="index !== undefined" class="number d-flex justify-center align-center contrast--text">
        {{ index + 1 }}
      </div>
      <div v-if="title" class="card-default__title contrast--text mt-2 mt-md-4" v-html="title" />
      <div v-if="subtitle" class="card-default__subtitle contrast--text mt-1 mt-md-2">
        {{ subtitle }}
      </div>
      <div v-if="list.length" class="mt-4 mt-md-5 list d-flex flex-column">
        <div v-for="(item, idx) in list" :key="idx" class="d-flex align-center">
          <div class="list-item__percent py-1 px-2 contrast--text">
            {{ item.percent }}
          </div>
          <div class="contrast--text ml-2 list-item__description" v-html="item.description" />
        </div>
      </div>
    </div>
    <img v-if="image" :src="image" class="coin-top coin" />
    <img v-if="image" :src="image" class="coin-bottom coin" />
  </div>
</template>

<script>
export default {
  name: 'HowItWorksCard',
  props: {
    index: Number,
    title: String,
    subtitle: String,
    list: {
      type: Array,
      default() {
        return []
      }
    },
    image: String,
    background: String
  }
}
</script>

<style lang="scss" scoped>
.card-default {
  border-radius: 36px;
  position: relative;

  & .number {
    height: 40px;
    width: 40px;
    background: #467AF7;
    border-radius: 50%;
    font-weight: 700;
    font-size: 24px;
  }

  &__container {
    position: relative;
    z-index: 10;
  }

  &__background {
    position: absolute;
    height: 700px;
    top: -140%;
    right: -90%;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      top: -170%;
      right: 0;
      transform: translateX(30%);
    }

    @media(min-width: map-get($grid-breakpoints, 'md')) {
      top: -140%;
    }

    @media(min-width: map-get($grid-breakpoints, 'lg')) {
      top: -70%;
      transform: translateX(15%) scale(1.5);
    }

    @media(min-width: map-get($grid-breakpoints, 'xl')) {
      top: -80%;
      transform: translateX(0%) scale(1.5);
    }
  }

  &__title {
    font-weight: 700;
    font-size: 24px;

    @media(min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 32px;
    }
  }

  &__subtitle {
    font-weight: 500;
    font-size: 16px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 14px;
    }

    @media(min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 22px;
      font-weight: 400;
    }
  }

  & .list {
    row-gap: 10px;
  }

  & .list-item {
    &__percent {
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 48px;
      font-weight: 500;
      font-size: 18px;
      min-width: 47px;


      @media(min-width: map-get($grid-breakpoints, 'md')) {
        font-size: 24px;
        font-weight: 400;
        min-width: 58px;
      }
    }

    &__description {
      font-weight: 400;
      font-size: 16px;
      hyphens: manual;

      @media(min-width: map-get($grid-breakpoints, 'md')) {
        font-size: 22px;
      }
    }
  }

  & .coin {
    position: absolute;
    &-top {
      height: 100px;
      transform: rotate(10deg) translateY(-50%);
      top: 0;
      right: -5px;

      @media(min-width: map-get($grid-breakpoints, 'md')) {
        height: 176px;
        transform: rotate(10deg) translateY(-40%);
      }
    }
    &-bottom {
      height: 64px;
      transform: rotate(-45deg) translateY(50%);
      bottom: -10px;
      left: 0;

      @media(min-width: map-get($grid-breakpoints, 'md')) {
        height: 113px;
        bottom: -30px;
        left: -20px;
      }
    }
  }
}
</style>