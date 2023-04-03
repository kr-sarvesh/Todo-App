import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, addTask } from '../features/todo/todoSlice'
import Modal from 'react-modal'
import { TiChevronRight } from 'react-icons/ti'
import { RiTaskFill } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'
import Spinner from './Spinner'

const customStyles = {
  content: {
    width: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

Modal.setAppElement(document.getElementById('root'))

function TodoItem({ todo }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [taskTodo, setTaskTodo] = useState('')

  const [editModelIsOpen, setEditModelIsOpen] = useState(false)
  const [editTaskTodo, setEditTaskTodo] = useState('')

  const { isError, isLoading, message } = useSelector((state) => state.todos)

  const dispatch = useDispatch()

  //useEffect

  //create task submit
  const onTaskSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({ id: todo._id, task: taskTodo }))
    closeTaskModal()
  }

  // Open modal for task
  const openTaskModal = () => {
    console.log('open task modal')
    setModalIsOpen(true)
  }
  //close modal for task
  const closeTaskModal = () => {
    setModalIsOpen(false)
  }

  // open edit modal
  const openEditModal = () => {
    console.log('open edit modal')
    setEditModelIsOpen(true)
  }
  //close edit modal
  const closeEditModal = () => {
    setEditModelIsOpen(false)
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <div className='todo'>
        <div>{new Date(todo.createdAt).toLocaleString('en-US')}</div>
        <h2>todo title is: {todo.title}</h2>

        <div>
          Todo Tasks:
          <div className='taskList'>
            <ul>
              {todo.tasks.map((task, index) => {
                return (
                  <li key={index}>
                    <TiChevronRight /> {task}
                  </li>
                )
              })}

              <div className='todolisticons'>
                <div className='taskFill'>
                  <RiTaskFill onClick={openTaskModal} id='addtasks' />

                  <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    onRequestClose={closeTaskModal}
                    aria={{ labelledby: 'taskTodo', describedby: 'addtasks' }}
                  >
                    <h1 id='taskTodo'>Add More Tasks</h1>
                    <button
                      className='btn '
                      id='btn-close addtasks'
                      onClick={closeTaskModal}
                    >
                      X
                    </button>

                    <form id='addtasks' onSubmit={onTaskSubmit}>
                      <div className='form-group'>
                        <textarea
                          className='form-control'
                          placeholder='Enter Task to add'
                          id='taskTodo'
                          name='taskTodo'
                          value={taskTodo}
                          onChange={(e) => setTaskTodo(e.target.value)}
                        ></textarea>
                      </div>
                      <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </Modal>
                </div>

                <div className='taskEdit'>
                  <AiFillEdit onClick={openEditModal} />
                  <Modal
                    isOpen={editModelIsOpen}
                    style={customStyles}
                    onRequestClose={closeEditModal}
                  >
                    <h1>Edit Task</h1>

                    <form>
                      <div className='form-group'>
                        <textarea
                          className='form-control'
                          placeholder='Enter Task to edit'
                          id='editTaskTodo'
                          name='editTaskTodo'
                          value={editTaskTodo}
                          onChange={(e) => setEditTaskTodo(e.target.value)}
                        ></textarea>
                      </div>
                      <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </Modal>
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
