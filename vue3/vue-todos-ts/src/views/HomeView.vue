<template>
    <!-- html5 语义化 -->
    <main>
        <h1>Todos</h1>
        <form class="addForm" @submit.prevent="addTodo">
            <label for="add">Add todo</label>
            <div class="sl">
                <input type="text" name="add" id="add" 
                v-model="currentTodoInp">
                <button type="submit">Add</button>
            </div>
        </form>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore } from '../store/todos'
// import { useProductStore } from '../store/products'

let currentTodoInp = ref("")
const todoStore = useTodoStore()
todoStore.initFromLocalStorage()
// const productStore = useProductStore()
// todoStore.addTodo("十天后面试")
// productStore.fetchAll()

const addTodo = () => {
    const text = currentTodoInp.value;
    currentTodoInp.value = "";

    if (text.trim() !== "") { // 输入的内容不能为空
        todoStore.addTodo(text);
    }
}
</script>

<style scoped>

</style>