import TodoItem from './TodoItem'
function Todos(props) {
  return (
    <div className='container mx-auto px-3 pb-12'>
      <h3 className='container mx-auto my-3'>Todos List</h3>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} onDelete={props.onDelete} />
      })}
    </div>
  )
}

export default Todos
