<template>
  <div>
     
  </div>
  <main>
    <router-view />
  </main>
  
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.left-bar {
  height: 100vh;
  width: 200px;
}

</style>
