import { MdOutlineDeleteOutline, MdEdit } from 'react-icons/md'
function TodoItem({ todo, onDelete }) {
  return (
    <div className='card bg-slate-400 text-neutral shadow-xl mb-6  flex flex-col card-body'>
      <h4 className='text-xl'>
        <span>Title : </span>
        {todo.title}
      </h4>
      <div className='flex gap-x-5 border-2 items-center	'>
        <p className='text-base my-4'>
          <span>Tasks : </span> {todo.desc}
        </p>
        <MdOutlineDeleteOutline
          className='w-6 cursor-pointer'
          onClick={() => {
            onDelete(todo)
          }}
        >
          Delete
        </MdOutlineDeleteOutline>
        <MdEdit></MdEdit>
      </div>
    </div>
  )
}

export default TodoItem
