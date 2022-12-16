function TodoItem({ todo, onDelete }) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className='btn'
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
