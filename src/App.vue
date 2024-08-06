<template>
  <v-app>
    <div class="background">
      <HeaderDefault />
      <MainDefault />
      <FooterDefault />
    </div>
  </v-app>
</template>

<script>
import { HeaderDefault, MainDefault, FooterDefault } from '@/components/layouts'

export default {
  name: 'App',
  components: {
    HeaderDefault,
    MainDefault,
    FooterDefault
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_base.scss';
</style>
