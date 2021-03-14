<template>
  <div>
    <h1> Учебный проект для демонстрации навыков работы с Vue </h1>
    <ul>
      <li>Добавление и удаление задач</li>
      <li> Роутинг</li>
      <li> Помечание важных задач </li>
      <li>Drag and Drop</li>
    </ul>
    <h1>Спецификации</h1>
    <ul>
      <li> Vue 2.x </li>
    </ul>
  </div>
</template>

<script>
 export default{
  name:'about'
 }
</script>

<style scoped>
div {
  margin: 50px auto;
  padding: 16px;
  min-height: 580px;
  max-width: 580px;
  background-color: #f1f5f8;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.3; 
}

li {
  list-style-type: none;
  line-height: 1.5;
}
h1 {
  font-weight: 300;
}
</style>