<template>
  <div class="demo" :class="{}" v-if="isShow">
    <img class="bg" src="/demo/bg.png" />

    <iframe class="preview" :src="`http://localhost:9900/#/${path}`" />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  isHome: Boolean,
  path: {
    type: String,
    default: "",
  },
});

const isShow = computed(() => {
  if (props.isHome) {
    return true;
  }

  return props.path;
});
</script>

<style lang="scss">
.VPFeatures.VPHomeFeatures {
  .item {
    &:last-child {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.demo {
  position: relative;
  height: 727px;
  width: 364px;
  background-color: var(--vp-c-bg);
  border-radius: 50px;
  margin-left: 50px;

  .bg {
    position: relative;
    height: 727px;
    width: 100%;
    z-index: 2;
    pointer-events: none;
  }

  .preview {
    border: 0;
    position: absolute;
    left: 24px;
    top: 48px;
    height: 658px;
    width: calc(100% - 48px);
    border-radius: 0 0 30px 0;
  }

  &.is-home {
    margin: 0 auto;
  }
}
</style>
