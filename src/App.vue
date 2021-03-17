<template>
  <div id="app">
    <ul class='header'>
      <li> 
        <router-link to="/">Планер</router-link> 
      </li>
      <li> 
        <router-link to="/about">О проекте</router-link> 
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
@import ./assets/sass/App
</style>