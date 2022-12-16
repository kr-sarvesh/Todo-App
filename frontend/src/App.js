import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Components/Layouts/Nav'
import Footer from './Components/Layouts/Footer'
import Todos from './Components/Todos'

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
      desc: 'You need to go to the market to get this job done 01',
    },
    {
      sno: 2,
      title: 'Go to the mall',
      desc: 'You need to go to the mall to get this job done 02',
    },
    {
      sno: 3,
      title: 'Go to the shop',
      desc: 'You need to go to the shop to get this job done 03',
    },
  ])

  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Nav />
        <main className='container mx-auto px-3 pb-12'>
          <Todos todos={todos} onDelete={onDelete} />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
