import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, getAllTodos, reset } from '../features/todo/todoSlice'
import { toast } from 'react-toastify'
import Spinner from './Spinner'

function TodoForm() {
  const [todoData, setTodoData] = useState({ title: '', tasks: '' })

  const { title, tasks } = todoData

  const dispatch = useDispatch()

  const { isError, isLoading, message } = useSelector((state) => state.todos)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
  }, [isError, message])

  const onChange = (e) => {
    setTodoData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const todo = {
      title,
      tasks,
    }
    dispatch(createTodo(todo))
    setTodoData({ title: '', tasks: '' })
  }
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Todos</label>
            <input
              type='text'
              placeholder='Enter title'
              name='title'
              id='title'
              value={title}
              onChange={onChange}
              required
            />
            <input
              type='text'
              name='tasks'
              placeholder='Enter tasks'
              id='tasks'
              value={tasks}
              required
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block' type='submit'>
              Add Todo
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default TodoForm
