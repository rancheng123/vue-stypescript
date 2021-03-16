<script>
import AppFooter from './Footer.vue';
import AppHeader from './Header.vue';
import { defineComponent, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    AppFooter,
    AppHeader,
  },
  setup() {
    const fullScreenMode = ref(true);
    const router = useRouter();
    watch(router.currentRoute, () => {
      fullScreenMode.value = Boolean(router.currentRoute.value.meta?.fullScreen);
    });

    return {
      fullScreenMode,
    };
  },
});
</script>

<template>
  <div class="app-layout">
    <router-view v-if="fullScreenMode" />
    <div v-else class="app-content">
      <app-header />
      <router-view />
      <app-footer />
    </div>
  </div>
</template>
<style lang="less" scoped>
.app-layout {
  height: 100%;
}
.app-content {
  position: relative;
  padding: 0;
  margin: 0;
}
.router-view {
  margin: 0;
  padding: 0;
}
</style>
