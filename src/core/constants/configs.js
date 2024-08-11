export const CONFIG_LAYOUT = Object.freeze({
  logoMain: require('@/assets/images/logos/sportmaster_logo.svg'),
  logoMainShort: require('@/assets/images/logos/sportmaster_short_logo.svg'),
  logoParthner: require('@/assets/images/logos/lidportal_logo.svg'),
  nav: [
    {
      text: 'Как это работает',
      link: '/#how-it-works'
    },
    {
      text: 'Что вы получите',
      link: '/#will-get'
    },
    {
      text: 'Вопросы и ответы',
      link: '/#faq'
    }
  ],
  buttonText: 'Войти в личный кабинет',
  buttonLink: 'test',
  email: 'info@partners.sportmaster.ru',
  additional: { 
    policy: {
      text: 'Политика конфиденциальности',
      path: '/Политика_обработки_ПД_Лидпортал.pdf'
    }
  }
})