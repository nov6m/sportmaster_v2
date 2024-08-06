export default {
  data() {
    return {
      curWidth: 0,
      isMobile: false,
      isTablet: false,
      isNotebook: false,
      isDesktop: false
    }
  },
  mounted() {
    this.setWindowSizes()
    window.addEventListener('resize', this.setWindowSizes)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setWindowSizes)
  },
  methods: {
    setWindowSizes() {
      this.curWidth = window.innerWidth
      const isMobile = window.matchMedia('(max-width: 481px)').matches
      const isTablet = window.matchMedia('(max-width: 768px)').matches
      const isNotebook = window.matchMedia('(max-width: 1200px)').matches
      this.isMobile = isMobile
      this.isTablet = !isMobile && isTablet
      this.isNotebook = !isMobile && !isTablet && isNotebook
      this.isDesktop = !isMobile && !isTablet && !isNotebook
    }
  }
}
