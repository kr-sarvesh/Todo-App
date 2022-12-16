import { Link } from 'react-router-dom'
import logo from './images/logo.png'
function Nav() {
  return (
    <div className='navbar px-4 py-2 bg-base-100 '>
      <div className='flex-1'>
        <Link to='/' className=''>
          <img
            src={logo}
            alt='logo-not found'
            className='object-fill w-24 h-24'
          />
        </Link>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img alt='no img' src='https://placeimg.com/80/80/people' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/' className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </Link>
            </li>
            <li>
              <Link href='/'>Settings</Link>
            </li>
            <li>
              <Link to='/'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
