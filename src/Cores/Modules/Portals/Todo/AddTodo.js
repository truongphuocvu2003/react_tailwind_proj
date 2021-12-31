import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../Stores/reducers/todoSlice'

export default function AddTodo(props) {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const addNewTodo = (content) => {
    if (content) {
      dispatch(addTodo(content))
      setContent('')
    }
  }

  return (
    <>
      <div className={'relative shadow-md my-2 px-2 py-2 rounded max-w-full dark:bg-white dark:shadow dark:shadow-gray-400'}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            addNewTodo(content)
          }}
        >
          <input
            type={'text'}
            placeholder="Type content here..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
            }}
            className={'focus:outline-none py-1 px-2 pr-[60px] w-full max-w-full text-black'}
          ></input>
          <button
            className={'btn-blue absolute top-1 right-2'}
            onClick={() => {
              addNewTodo(content)
            }}
          >
            Add
          </button>
        </form>
      </div>
    </>
  )
}
