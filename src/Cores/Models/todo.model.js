import { Todo_status } from './todo.enums'

const storedKey = 'todoList'

export const TodoHandler = {
  loadTodoList: () => {
    const items = localStorage.getItem(storedKey)

    return (items && JSON.parse(items)) || []
  },
  saveTodoList: (items) => {
    localStorage.setItem(storedKey, JSON.stringify(items || []))
  },
  getNewTodo: (content) => {
    return {
      id: Date.now(),
      checked: Todo_status.pending,
      content: content,
    }
  },
}