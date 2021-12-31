import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodo, saveTodo } from '../../../Stores/reducers/todoSlice'
import ContentTitle from '../ContentTitle'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default function Todo(props) {
  const todoList = useSelector((state) => state.todoList.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodo())

    return () => {
      dispatch(saveTodo())
    }
  }, [])

  return (
    <>
      <ContentTitle title="To Do"></ContentTitle>
      <div className={'card-container'}>
        <div className={'card-content'}>
          <div className={'font-medium text-lg'}>My List</div>
          <AddTodo></AddTodo>
          <TodoList items={todoList}></TodoList>
        </div>
      </div>
    </>
  )
}
