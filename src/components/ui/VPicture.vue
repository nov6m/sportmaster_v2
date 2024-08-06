<template>
  <div class="v-picture">
    <template v-for="(item, key) in items">
      <img
        v-if="isVisible(item.src, item.breakpoints)"
        :key="key"
        :src="item.src"
        :alt="item.alt || 'Изображение'"
        :width="item.width || '100%'"
        :height="item.height || '100%'"
      />
    </template>
  </div>
</template>

<script>
import screenSize from '@/core/mixins/screenSize';

export default {
  name: 'VPicture',
  mixins: [screenSize],
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    isVisible(src, breakpoints) {
      if (!breakpoints || !breakpoints.length) {
        return !!src;
      }
      return breakpoints[0] >= this.curWidth && this.curWidth <= breakpoints[1];
    }
  }
};
</script>