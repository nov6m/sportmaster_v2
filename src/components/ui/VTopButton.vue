<template>
  <div
    class="top-button contrast align-center justify-center"
    :class="{ 'd-flex': isShow, 'd-none': !isShow }"
    @click="scrollTop"
  >
    <img :src="icon" class="top-button__icon" />
  </div>
</template>

<script>
const SHOW_HEIGHT = 1000

export default {
  name: 'VTopButton',
  data() {
    return {
      icon: require('@/assets/images/icons/top-arrow.png'),
      isShow: false
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    checkHeight() {
      this.isShow = window.pageYOffset >= SHOW_HEIGHT
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkHeight)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkHeight)
  }
}
</script>

<style lang="scss" scoped>
.top-button {
  position: fixed;
  transition: background 0.2s;
  z-index: 50;
  bottom: 25px;
  right: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 0px 15px 0px #051E5B1A;
  @media(min-width: map-get($grid-breakpoints, 'sm')) {
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
  }
  @media(min-width: map-get($grid-breakpoints, 'md')) {
    width: 92px;
    height: 92px;
    bottom: 60px;
    right: 60px;
  }

  &:hover {
    cursor: pointer;
    background: #e6e6e6 !important;
  }

  &__icon {
    width: 19px;
    height: 17px;
    @media(min-width: map-get($grid-breakpoints, 'sm')) {
      width: 28px;
      height: 26px;
    }
    @media(min-width: map-get($grid-breakpoints, 'md')) {
      width: 43px;
      height: 39px;
    }
  }
}
</style>