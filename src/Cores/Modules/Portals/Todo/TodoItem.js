import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Todo_status } from '../../../Models/todo.enums'
import { editTodo, removeTodo } from '../../../Stores/reducers/todoSlice'

export default function TodoItem(props) {
  const item = props.item
  const index = props.index
  const checked = item.checked === Todo_status.completed
  const [isChecked, setChecked] = useState(checked)
  const dispatch = useDispatch()
  const contentClass = isChecked ? 'line-through' : '';

  return (
    <div
      className={
        'flex mt-2 p-2 border-b border-b-gray-600 shadow dark:shadow-gray-200 hover:shadow-md justify-center rounded transition'
      }
    >
      <div className={'w-10'}>{index}.</div>
      <div className={'mr-2 flex-1'}>
        <label className={'flex items-center cursor-pointer'}>
          <input
            className="text-indigo-500 cursor-pointer mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
            value={isChecked}
            checked={isChecked}
            onChange={(e) => {
              const isChecked = e.target.checked
              setChecked(isChecked)
              dispatch(
                editTodo({
                  id: item.id,
                  checked: isChecked,
                }),
              )
            }}
          />
          <span className={contentClass + ' cursor-pointer'}>{item.content}</span>
        </label>
      </div>
      <div className={'flex cursor-pointer'}>
        <div
          title="Remove"
          onClick={() => {
            dispatch(removeTodo(item.id))
          }}
        >
          ❌
        </div>
      </div>
    </div>
  )
}
