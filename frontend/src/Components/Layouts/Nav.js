import { Link, useNavigate } from 'react-router-dom'
import { FaSignOutAlt, FaUser } from 'react-icons/fa'
import logo from './images/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

function Nav() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
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
      <div className='flex-none'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
        <ul className='menu menu-horizontal px-2 gap-2'>
          {user ? (
            <li>
              <buton className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </buton>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>
                  <FaSignOutAlt />
                  Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Nav
