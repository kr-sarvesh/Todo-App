import TodoItem from './TodoItem'
function Todos(props) {
  return (
    <div>
      <h3 className='container mx-auto  my-4 '>Todos List</h3>

      {props.todos.length === 0 ? (
        <div>Please add Todo</div>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        })
      )}
    </div>
  )
}

export default Todos
