import { createSlice } from '@reduxjs/toolkit'
import { Todo_status } from '../../Models/todo.enums'
import { TodoHandler } from '../../Models/todo.model'

export const todoSlide = createSlice({
  name: 'todoList',
  initialState: {
    items: [],
  },
  reducers: {
    loadTodo: (state) => {
      state.items = TodoHandler.loadTodoList()
    },
    addTodo: (state, action) => {
      const content = action.payload
      const item = TodoHandler.getNewTodo(content)
      state.items = [...state.items, item]

      TodoHandler.saveTodoList(state.items)
    },
    removeTodo: (state, action) => {
      const id = action.payload
      state.items = [...state.items]
      state.items = state.items.filter((x) => x.id !== id)
      TodoHandler.saveTodoList(state.items)
    },
    editTodo: (state, action) => {
      const { id, content, checked } = action.payload
      const todoIndex = state.items.findIndex((x) => x.id === id)

      if (todoIndex >= 0) {
        state.items = [...state.items]

        if (content !== undefined) {
          state.items[todoIndex].content = content
        }

        if (checked !== undefined) {
            state.items[todoIndex].checked = checked ? Todo_status.completed : Todo_status.pending;
        }

        TodoHandler.saveTodoList(state.items);
      }
    },
    saveTodo: (state) => {
      TodoHandler.saveTodoList(state.items)
    },
  },
})

export const {
  loadTodo,
  saveTodo,
  addTodo,
  removeTodo,
  editTodo,
} = todoSlide.actions

export const todoReducer = todoSlide.reducer

export default todoSlide.reducer
