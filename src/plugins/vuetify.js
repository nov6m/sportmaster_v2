import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1551E5',
        secondary: '#0043CE',
        tertiary: '#002D9C',
        quaternary: '#4E22B4',
        background: '#FFFFFF',
        backgroundSecondary: '#F2F6FF',
        primaryText: '#171717',
        secondaryText: '#617595',
        tertiaryText: '#707070',
        contrast: '#FFFFFF',
        border: '#E3E3E3'
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 481,
      md: 768,
      lg: 1200,
      xl: 1440
    }
  }
});
