<template>
  <div>
    <header>
      <!-- <input type="checkbox" id="" /> -->
      <input type="text" id="" placeholder="添加新的待办事项" @keyup.enter="addTodo" />
    </header>
    <section class="list">
      <ul>
        <li v-for="task in filteredList" :key="task.id">
          <div><input type="checkbox" name="" id="" v-model="task.completed"></div>
          <div>{{ task.completed ? '✅' : '❌' }} {{ task.title }}</div>
          <div><button @click="deleteTodo(task.id)">delete</button></div>
        </li>
      </ul>
      <span>剩余{{ filteredList.length }}</span>
    </section>
    <footer>
      <button @click="visibility='all'">all</button>
      <button @click="visibility='completed'">finish</button>
      <button @click="visibility='active'">todo</button>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
// const list = ref([
//   { id: 1, title: 'One', completed: false },
//   { id: 2, title: 'Two', completed: true },
//   { id: 3, title: 'Three', completed: false },
// ])
const STORAGE_KEY = 'todo-list'
const list = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])

const filter = {
  all: list => list,
  active: list => list.filter(item => !item.completed),
  completed: list => list.filter(item => item.completed)
}

const visibility = ref('all')
const filteredList = computed(() => filter[visibility.value](list.value))

function addTodo(e) {
  const task = e.target.value.trim();
  if (task) {
    list.value.push({
      id: Date.now(),
      title: task,
      completed: false
    })
    e.target.value = ''
  }
  console.log(filteredList.value)
}

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list.value))
})

function deleteTodo(id){
  list.value = list.value.filter(item=>item.id!==id)
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

li {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
}
</style>
