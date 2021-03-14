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

<style>
  ul.header li {
    display: inline;
    list-style-type: none;
    margin: 0;
  }
  ul.header {
    background-color: #494a4b;
    padding: 0;
  }
  ul.header li a {
    color: #FFF;
    font-weight: 300;
    text-decoration: none;
    padding: 20px;
    display: inline-block;
  }
</style>
