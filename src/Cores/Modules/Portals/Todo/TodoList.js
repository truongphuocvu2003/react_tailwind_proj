import TodoItem from './TodoItem'

export default function TodoList(props) {
  const items = props.items || []
  return (
    <div className={'flex flex-col'}>
      {items.map((item, index) => (
        <TodoItem key={index} item={item} index={index + 1}></TodoItem>
      ))}
    </div>
  )
}
