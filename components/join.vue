<template>
  <div>
    <button
      v-if="showFloat"
      class="join-fab"
      @click="open()"
      aria-label="加入交流群"
    >
      加群
    </button>

    <teleport to="body">
      <transition name="fade">
        <div v-if="visible" class="join-mask" @click="onMaskClick">
          <div class="join-modal" @click.stop>
            <img
              class="join-close"
              src="/images/close-line.png"
              @click="close"
            />
            <div class="join-title">{{ title }}</div>
            <div class="join-desc" v-if="desc">{{ desc }}</div>
            <div class="join-qrcode">
              <img :src="img" alt="加群二维码" />
            </div>
            <div class="join-tips">使用微信扫码加入</div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  img: { type: String, default: "" },
  title: { type: String, default: "扫码加群" },
  desc: { type: String, default: "欢迎加入开发交流群，一起交流与进步" },
  closeOnMask: { type: Boolean, default: true },
  showFloat: { type: Boolean, default: true },
});

const emit = defineEmits(["update:modelValue", "open", "close"]);

const visible = ref(false);

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val;
    toggleScrollLock(val);
  },
  { immediate: true }
);

function open() {
  if (!visible.value) {
    visible.value = true;
    emit("update:modelValue", true);
    emit("open");
    toggleScrollLock(true);
  }
}

function close() {
  if (visible.value) {
    visible.value = false;
    emit("update:modelValue", false);
    emit("close");
    toggleScrollLock(false);
  }
}

function onMaskClick() {
  if (props.closeOnMask) close();
}

function onEsc(e) {
  if (e.key === "Escape") close();
}

function toggleScrollLock(lock) {
  const body = document.body;
  if (!body) return;
  if (lock) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}

onMounted(() => {
  window.addEventListener("keydown", onEsc);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onEsc);
  toggleScrollLock(false);
});

defineExpose({ open, close, visible });
</script>

<style scoped lang="scss">
.join-fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  padding: 10px 14px;
  border-radius: 999px;
  border: none;
  background: #111;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
  }

  :is(.dark &) {
    background: #444;
    color: #fff;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.join-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px;
}

@keyframes pop-bounce {
  0% {
    transform: scale(0.86);
    opacity: 0;
    filter: blur(2px);
  }
  60% {
    transform: scale(1.04);
    opacity: 1;
    filter: blur(0);
  }
  100% {
    transform: scale(1);
  }
}

.join-modal {
  width: 360px;
  max-width: 92vw;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  padding: 18px 18px 22px;
  position: relative;
  animation: pop-bounce 260ms cubic-bezier(0.2, 0.8, 0.2, 1);

  :is(.dark &) {
    background: #222;
    color: #eee;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
}

.join-close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  padding: 5px;
  transition: background 0.2s ease, color 0.2s ease;
  background: rgba(0, 0, 0, 0.06);

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  :is(.dark &) {
    background: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
      color: #fff;
    }
  }
}

.join-title {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.join-desc {
  margin-top: 6px;
  text-align: center;
  font-size: 12px;
  color: #666;

  :is(.dark &) {
    color: #aaa;
  }
}

.join-qrcode {
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 240px;
    height: 240px;
    max-width: 60vw;
    object-fit: contain;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
}

.join-tips {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #999;

  :is(.dark &) {
    color: #bbb;
  }
}

@media (max-width: 480px) {
  .join-modal {
    width: 320px;
    padding: 16px 16px 20px;
  }
  .join-qrcode img {
    width: 200px;
    height: 200px;
  }
}
</style>
