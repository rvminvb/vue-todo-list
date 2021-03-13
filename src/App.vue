<template>
  <div id="app">
     <router-view></router-view>
    
    <!-- <ToDo/>
    <About/> -->
  </div>
</template>

<script>
// import ToDo from './components/ToDo.vue'
// import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    // ToDo,
    // About
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
