<template>
  <div class='todolist'>
    <div class='heading'>
      <h1 class='title'>Планер</h1>
    </div>
    <input type='text' placeholder="введите задачу" v-model='input'/>
    <button @click='addItem'>Добавить</button>
    <div class='items'>
      <draggable v-model='items' @start='drag=true' @end='drag=false'>
        <ToDoItem v-for='item in items' :key="item.id" :item="item" v-on:remove="removeItem" v-on:mark="markAsImportant" /> 
      </draggable>
      <span v-if='items.length===0'>Нет задач</span>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ToDoItem from './ToDoItem.vue';
export default {
  name: 'ToDo',
  components: {
    draggable,
    ToDoItem
  },
  data: function() {
    return {
      input:'',
      items: [],
      idCounter: 1,
    };
  },
  mounted() {
    if (!localStorage.getItem('items') || !localStorage.getItem('idCounter')) {
      return;
    }

    try {
      this.items = JSON.parse(localStorage.getItem('items'));
      this.idCounter = JSON.parse(localStorage.getItem('idCounter'));
    } catch(e) {
      localStorage.removeItem('items');
      localStorage.removeItem('idCounter');
    }
  },
  watch: {
    items(newItems) {
      this.saveItems(newItems);
    }
  },
  methods: {
    addItem: function() {
      if (!this.input.trim()) { 
        return; 
      }

      this.items.push({ name: this.input, priority: false, id: '' + this.idCounter });
      this.idCounter++;
      this.input = '';
    },

    removeItem: function(id) {
      this.items = this.items.filter(item => {
        return item.id !== id;
      });
    },

    markAsImportant: function(id) {
      this.items = this.items.map(item => (item.id === id ? { ...item, priority: !item.priority } : item))
    },

    saveItems(newItems) {
      localStorage.setItem('items', JSON.stringify(newItems));
      localStorage.setItem('idCounter', JSON.stringify(this.idCounter));
    }
  }

}
</script>

<style lang="sass" scoped>
@import ../assets/sass/ToDo
</style>
