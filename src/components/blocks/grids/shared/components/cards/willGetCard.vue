<template>
  <div class="card-default py-4 px-5 py-sm-5 px-sm-8 pa-md-5">
    <img v-if="image" :src="image" class="card-default__image" />
    <div class="mt-2 mt-sm-4">
      <div v-if="title" class="card-default__title primaryText--text">
        {{ title }}
      </div>
      <div v-if="subtitle" class="card-default__subtitle mt-1 mt-sm-3 primaryText--text">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WillGetCard',
  props: {
    image: String,
    title: String,
    subtitle: String
  }
}
</script>

<style lang="scss" scoped>
.card-default {
  border-radius: 36px;
  box-shadow: 2px 10px 20px 0px #051E5B12;
  border: 1px solid #E3E3E3;

  &__image {
    height: 80px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      height: 140px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 20px;

    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 23px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 22px;
    }
  }

  &__subtitle {
    font-size: 16px;
  }
}
</style>