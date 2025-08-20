<template>
  <div
    class="demo"
    :class="{
      'is-home': isHome,
    }"
    v-if="isShow"
  >
    <img class="bg" src="/phone-bg2.png" />

    <span class="time">{{ currentTime }}</span>

    <div class="safe-top"></div>
    <div class="safe-bottom"></div>

    <iframe class="preview" :src="`/demo/index.html#/${path}`" />
    <!-- <iframe class="preview" :src="`http://localhost:9900/#/${path}`" /> -->

    <div class="view">
      <div class="item">
        <p>H5预览</p>
        <img src="/qrcode-h5.png" />
      </div>

      <div class="item">
        <p>APP下载</p>
        <img src="/qrcode-apk.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

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

const currentTime = ref("");

function getTime() {
  // 格式化时间
  function formatTime(date) {
    const h = date.getHours().toString().padStart(2, "0");
    const m = date.getMinutes().toString().padStart(2, "0");
    return `${h}:${m}`;
  }

  // 每秒更新一次时间，但只在分钟变化时才更新DOM，减少性能消耗
  function updateTime() {
    const now = new Date();
    const formatted = formatTime(now);
    if (currentTime.value !== formatted) {
      currentTime.value = formatted;
    }
  }

  updateTime();
  // setInterval(updateTime, 1000);
}

onMounted(() => {
  getTime();

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

  // 监听 iframe 的消息事件
  window.addEventListener(
    "message",
    (e) => {
      if (e.data.type == "theme-change") {
        const isDark = e.data.isDark;

        document.querySelector(".demo .time").style.color = isDark
          ? "#fff"
          : "#000";

        const safeColor = isDark ? "rgb(25, 25, 25)" : "transparent";

        document.querySelector(".demo .safe-top").style.backgroundColor =
          safeColor;
        document.querySelector(".demo .safe-bottom").style.backgroundColor =
          safeColor;
      }
    },
    false
  );
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
  width: 444px;
  border-radius: 50px;
  margin-left: 50px;

  .time {
    position: absolute;
    top: 30px;
    left: 54px;
    font-size: 16px;
    font-weight: bold;
    z-index: 99;
  }

  .bg {
    position: relative;
    height: 884px;
    width: 100%;
    z-index: 2;
    pointer-events: none;
  }

  .safe-top {
    height: 44px;
    width: calc(100% - 40px);
    position: absolute;
    top: 10px;
    left: 20px;
    border-radius: 24px 24px 0 0;
  }

  .safe-bottom {
    height: 22px;
    width: calc(100% - 60px);
    position: absolute;
    top: 850px;
    left: 30px;
    border-radius: 0 0 80px 80px;
    z-index: 9;
  }

  .preview {
    border: 0;
    position: absolute;
    left: 16px;
    top: 54px;
    height: 800px;
    width: calc(100% - 32px);
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
        height: 150px;
        width: 150px;
        border-radius: 10px;
        background-color: #fff;
      }
    }
  }

  &.is-home {
    margin: 0 auto;

    .view {
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 100%;
      width: 250px;

      .item {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
