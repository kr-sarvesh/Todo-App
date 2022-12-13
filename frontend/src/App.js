import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './My Components/Nav'
import Footer from './My Components/Footer'
function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Nav />
        <main className='container mx-auto px-3 pb-12'>Content</main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
