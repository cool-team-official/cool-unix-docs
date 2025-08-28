<template>
  <Layout>
    <template #sidebar-nav-before>
      <div class="ad">
        <img
          v-for="item in ad.list"
          :key="item"
          :src="item.pic"
          @click="ad.toLink(item)"
        />
      </div>
    </template>

    <template #aside-outline-after>
      <demo is-fr :path="path" :key="path" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import Demo from "../../components/demo.vue";
import { useRoute } from "vitepress";
import { watch, ref, onMounted, reactive } from "vue";

const route = useRoute();

const { Layout } = DefaultTheme;

const ad = reactive({
  list: [],

  toLink(item) {
    if (item.link) {
      window.open(item.link);
    } else {
      window.open(`https://cool-js.com/ad/${item.id}`);
    }
  },

  get() {
    fetch("https://service.cool-js.com/api/app/info/ad/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.list = res.data;
      });
  },
});

const path = ref("");

watch(
  () => route.path,
  (val) => {
    if (val.includes("/introduce/icon")) {
      path.value = "pages/demo/basic/icon";
      return;
    }

    if (val.includes("/src/components/other/request")) {
      path.value = "pages/template/shop/address";
      return;
    }

    if (
      val.includes("/components/pt") ||
      val.includes("/components/doc") ||
      val.includes("/components/basic/page") ||
      val.includes("/components/basic/loading")
    ) {
      path.value = "/";
      return;
    }

    if (val.includes("/components/")) {
      const str = val
        .replace("/components", "")
        .replace("/src", "")
        .replace(".html", "");

      path.value = `pages/demo${str}`;
    } else {
      path.value = "";
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

onMounted(() => {
  ad.get();
});
</script>

<style scoped>
.ad img {
  display: block;
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.ad img:hover {
  opacity: 0.9;
}
</style>
