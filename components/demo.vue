<template>
  <div class="demo" :class="{}" v-if="isShow">
    <img class="bg" src="/demo/bg.png" />

    <iframe class="preview" :src="`/demo/index.html#/${path}`" />
    <!-- <iframe class="preview" :src="`http://localhost:9900/#/${path}`" /> -->

    <div class="view">
      <div class="item">
        <p>H5预览</p>
        <img />
      </div>

      <div class="item">
        <p>APP下载</p>
        <img />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";

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

onMounted(() => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        const isDark = document.documentElement.classList.contains("dark");

        // 向iframe通信
        const iframe = document.querySelector(".preview");
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
            { type: "theme-change", isDark },
            "*"
          );
        }
      }
    });
  });

  // 开始观察 html 元素的 class 变化
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
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
    top: 22px;
    height: 684px;
    width: calc(100% - 48px);
    border-radius: 0 0 30px 0;
  }

  &.is-home {
    margin: 0 auto;
  }

  .view {
    display: flex;
    padding: 20px 0 50px 0;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 14px;
        margin-bottom: 10px;
      }

      img {
        height: 100px;
        width: 100px;
        border-radius: 10px;
        background-color: #fff;
      }
    }
  }
}
</style>
