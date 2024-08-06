<template>
  <v-btn
    rounded
    elevation="0"
    v-bind="$attrs"
    v-on="$listeners"
    class="v-button"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'VButton'
}
</script>

<style lang="scss" scoped>
.v-button {
  font-weight: 700;
  &.v-size--x-small {
    font-weight: 500;
  }

  ::v-deep {
   &.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: #3D75FF !important;
    color: #84BCFF !important;
   }
  }
}
</style>