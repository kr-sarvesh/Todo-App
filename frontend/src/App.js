import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Components/Layouts/Nav'
import Footer from './Components/Layouts/Footer'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'

function App() {
  const onDelete = (todo) => {
    console.log('I am on delete of todo', todo)
    setTodos(
      todos.filter((e) => {
        return e !== todo
      })
    )
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the market',
      task: 'You need to go to the market to get this job done 01',
      task2: 'You need to go to the market to get this job done 01',
    },
    {
      sno: 2,
      title: 'Go to the mall',
      task: 'You need to go to the mall to get this job done 02',
    },
    {
      sno: 3,
      title: 'Go to the shop',
      task: 'You need to go to the shop to get this job done 03',
    },
  ])

  return (
    <Router>
      <div className='grid grid-col-3 content-between min-h-screen '>
        <Nav />
        <main className='sm:flex sm:flex-col-rev md:flex  justify-around'>
          <Todos todos={todos} onDelete={onDelete} />
          <AddTodo />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
