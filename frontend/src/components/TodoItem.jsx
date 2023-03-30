import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, addTask } from '../features/todo/todoSlice'
import { TiChevronRight } from 'react-icons/ti'
import { RiTaskFill } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'

function TodoItem({ todo }) {
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  return (
    <>
      <div className='todo'>
        <div>{new Date(todo.createdAt).toLocaleString('en-US')}</div>
        <h2>todo title is: {todo.title}</h2>
        <div>
          Todo tasks:
          <div className='taskList'>
            <ul>
              {todo.tasks.map((task) => {
                return (
                  <li>
                    <TiChevronRight /> {task}
                  </li>
                )
              })}
              <div className='todolisticons'>
                <div className='taskFill'>
                  <RiTaskFill onClick={(e) => dispatch(addTask(todo.id))} />
                </div>
                <div className='taskEdit'>
                  <AiFillEdit />
                </div>
                <div className='taskDelete'>
                  <AiOutlineDelete />
                </div>
              </div>
            </ul>
          </div>
        </div>

        <button
          onClick={(e) => dispatch(deleteTodo(todo._id))}
          className='close'
        >
          X
        </button>
      </div>
    </>
  )
}

export default TodoItem
