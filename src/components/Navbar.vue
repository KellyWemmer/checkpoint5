<template>
  <nav class="col-12 d-flex navbar navbar-expand-lg navbar-dark bg-dark px-3">
    
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex text-center">
        <h4><i><b>N</b></i>etwork</h4>
      </div>
    </router-link>
    
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
 
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">        
      </ul>
    <div class="pr-5">
      <SearchForm />
    </div>
      
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import SearchForm from './SearchForm.vue';
export default {
    setup() {
        return {};
    },
    components: { SearchForm }
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
