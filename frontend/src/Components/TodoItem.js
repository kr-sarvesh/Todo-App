function TodoItem({ todo, onDelete }) {
  return (
    <div className='border-2'>
      <div className='flex flex-col  '>
        <h4 className='text-xl'>
          <span>Title : </span>
          {todo.title}
        </h4>
        <p className='text-base my-4'>
          <span>Description : </span> {todo.desc}
        </p>
      </div>
      <button
        className='btn btn-error mb-4'
        onClick={() => {
          onDelete(todo)
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
