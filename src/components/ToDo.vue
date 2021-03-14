<template>
  <div class='todolist'>
    <div class='heading'>
      <h1 class='title'>Планер</h1>
    </div>
    <input type='text' v-model='input'/>
    <button v-on:click='addItem'>Добавить</button>
    <div class='items'>
      <draggable v-model='items' @start='drag=true' @end='drag=false'>
        <ToDoItem v-for='item in items' v-bind:key="item.id" v-bind:item="item" v-on:remove="removeItem" v-on:mark="markAsImportant" /> 
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
    if (localStorage.getItem('items') && localStorage.getItem('idCounter')) {
      try {
        this.items = JSON.parse(localStorage.getItem('items'));
        this.idCounter = JSON.parse(localStorage.getItem('idCounter'));
      } catch(e) {
        localStorage.removeItem('items');
        localStorage.removeItem('idCounter');
      }
    }
  },
  watch: {
    items(newItems) {
      this.saveItems(newItems);
    }
  },
  methods: {
    addItem: function() {
      if (this.input.trim()) {
        this.items.push({ name: this.input, priority: false, id: '' + this.idCounter });
        this.idCounter++;
        this.input = '';
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    background-color: #97999B;
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 300;
    text-align: center;
    letter-spacing: 3px;
}
.todolist {
    margin: 50px auto;
    padding: 16px;
    min-height: 580px;
    max-width: 300px;
    background-color: #f1f5f8;
}

.heading {
    display: flex;
    align-items: center;
    justify-content: center;
}

.heading h1 {
    width: 60%;
    margin-top: 30px;
    background-color:#F9E547;
    padding: 0.2rem 1.2rem;
    color: #494a4b;
    font-weight: 300;
}

.todolist form {
    margin-top: 40px;
}

.todolist input {  
    border: 0;
    border-bottom: 3px solid #F9E547;
    background-color: transparent;
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 1.3rem;
    padding: 10px 15px;
    width: 70%;
    color: #494a4b;
    font-weight: 300;
}

.todolist button {
    margin-top: 30px;
    border: 3px solid hsl(198, 1%, 29%);
    padding: 10px 15px;
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 3px;
}

.items {
    margin-top: 50px;
}

.items ul li {
    text-align: left;   
    margin: 20px 10px;
    font-size: 1.4rem;
    font-weight: 300;
    color: #494a4b;
}
</style>
