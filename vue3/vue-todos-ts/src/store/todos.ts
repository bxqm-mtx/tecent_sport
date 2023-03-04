import { defineStore } from 'pinia' //某个模块的状态函数化
import {ref,Ref} from  'vue'
import {nanoid} from 'nanoid'
// 持久化 
// 告别类式编程 函数式
type Todo = {id:string;text:string;isComplete:boolean} // 自定义的类型
const lsKey = '_v_todos'

export const  useTodoStore = defineStore('todos',()=>{
    // 泛型
    const todos:Ref<Todo[]> = ref([]) // 每一项的类型
    // 5%
    const addTodo = (text :string) => {
        todos.value = [
            ...todos.value,
            {
                id:nanoid(),   // 生成唯一的ID
                isComplete:false,   // 未完成
                text    //文本的内容
            }
        ]
         const updataLocalStorage = ()=>{
            localStorage.setItem(lsKey,JSON.stringify(todos.value))
         }
    }

    const initFromLocalStorage = ()=>{
        const lstodos = localStorage.getItem(lsKey)

        if(lstodos === null ) {
            todos.value = []
        }else {
            todos.value = JSON.parse(lstodos)
        }
    }
    return {
        todos,
        addTodo,
        initFromLocalStorage
    }
})