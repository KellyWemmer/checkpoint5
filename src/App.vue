<template>
  <header>
    <Navbar />
  </header>
<div class="left-bar bg-dark text-center">
  <div class="d-flex flex-column align-items-center justify-content-between h-100">
    <AdsCard />
  </div>
</div>
  <main>
    <router-view />
  </main>  
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';

export default {
  name: 'App',
  setup() {
    

      

    return {
      appState: computed(() => AppState),
       
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.left-bar {
  height: 100vh;
  width: 200px;
  position: fixed;

}
@media screen and (max-width: 768px) {
  .left-bar {
    display: none;
  }
}
main {
  max-height: 100vh;
  overflow-y: auto;
  padding-bottom: 5rem;  
}

</style>
