import { MdOutlineDeleteOutline, MdEdit } from 'react-icons/md'
import { IoMdAddCircle } from 'react-icons/io'
function TodoItem({ todo, onDelete }) {
  return (
    <div
      className='card card-body bg-slate-400 text-neutral shadow-xl mb-6  sm:mx-6
     flex flex-col relative'
    >
      <h4 className='text-xl'>
        <strong>Title : </strong>
        {todo.title}
      </h4>
      <div className='flex border-2 gap-4 items-center'>
        <p className='text-base my-2'>
          <strong>Task : </strong> {todo.task}
        </p>
        <MdOutlineDeleteOutline
          className='w-6 cursor-pointer'
          onClick={() => {
            onDelete(todo)
          }}
        >
          Delete
        </MdOutlineDeleteOutline>
        <MdEdit className='cursor-pointer'></MdEdit>
      </div>
      <IoMdAddCircle className='w-12 h-12 absolute bottom-0  right-0 cursor-pointer' />
    </div>
  )
}

export default TodoItem
