import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteTodo,
  addTask,
  updateTask,
  deleteTask,
} from '../features/todo/todoSlice'
import Modal from 'react-modal'
import { TiChevronRight } from 'react-icons/ti'
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

  const [editedTaskIndex, setEditedTaskIndex] = useState(-1)
  const [deleteTaskIndex, setDeleteTaskIndex] = useState(-1)

  const { isLoading } = useSelector((state) => state.todos)

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
    setEditModelIsOpen(true)
  }
  //close edit modal
  const closeEditModal = () => {
    setEditModelIsOpen(false)
  }

  //edit task handle
  const editTaskHandle = (e) => {
    e.preventDefault()
    dispatch(
      updateTask({
        id: todo._id,
        newtask: editTaskTodo,
        key: editedTaskIndex,
      })
    )
    closeEditModal()
  }

  //delete task handle
  const deleteTaskHandle = (e) => {
    console.log('delete task handle')
    e.preventDefault()
    dispatch(
      deleteTask({
        id: todo._id,
        key: deleteTaskIndex,
      })
    )
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <div className='todo'>
        <div>{new Date(todo.createdAt).toLocaleString('en-US')}</div>
        <h2>Todo Title is: {todo.title}</h2>

        <div>
          Todo Tasks:
          <div className='taskList'>
            <ul>
              {todo.tasks.map((task, index) => {
                return (
                  <li key={index}>
                    <TiChevronRight /> {task}
                    <div className='todolisticons'>
                      <AiFillEdit
                        onClick={() => {
                          openEditModal()
                          setEditedTaskIndex(index)
                        }}
                      />
                      <AiOutlineDelete
                        onClick={(e) => {
                          deleteTaskHandle(e)
                          setDeleteTaskIndex(index)
                        }}
                      />
                    </div>
                  </li>
                )
              })}

              <div className='taskEdit'>
                <Modal
                  isOpen={editModelIsOpen}
                  style={customStyles}
                  onRequestClose={closeEditModal}
                >
                  <h1>Edit Task</h1>

                  <form onSubmit={editTaskHandle}>
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
            </ul>
          </div>
          <div className='taskFill'>
            <button className='btn' onClick={openTaskModal} id='addtasks'>
              Add Tasks
            </button>
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
                <div className='todo'>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
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
