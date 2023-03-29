import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../features/todo/todoSlice'
function TodoItem({ todo }) {
  const dispatch = useDispatch()
  return (
    <div className='todo'>
      <div>{new Date(todo.createdAt).toLocaleString('en-US')}</div>
      <h2>todo title is: {todo.title}</h2>
      <p>Todo tasks: {todo.tasks}</p>
      <button onClick={() => dispatch(deleteTodo(todo._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default TodoItem
