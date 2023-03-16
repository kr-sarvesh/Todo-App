import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../Components/spinner'

function Register() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    password2: '',
  })
  const { FirstName, LastName, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      toast.success(message)
      navigate('/login')
    }
    dispatch(reset())
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Password do not match')
    } else {
      const userData = {
        FirstName,
        LastName,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }

  if (isLoading) return <Spinner />
  return (
    <div className='flex flex-col container mx-0 '>
      <section className='heading '>
        <h1 className='flex flex-row items-center justify-center gap-3'>
          <FaUser />
          Register
        </h1>
        <p>Please Create an Account</p>
      </section>
      <section className='form '>
        <form onSubmit={onSubmit} className='flex flex-col container mx-0'>
          <div className='form-group '>
            <input
              type='text'
              placeholder='Enter your First Name'
              className='form-control'
              id='FirstName'
              required
              name='FirstName'
              value={FirstName}
              onChange={onChange}
            />
          </div>
          <div className='form-group '>
            <input
              type='text'
              placeholder='Enter your Last Name'
              className='form-control'
              id='LastName'
              required
              name='LastName'
              value={LastName}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Enter your Email-Id'
              className='form-control'
              id='email'
              name='email'
              value={email}
              required
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              required
              placeholder='Enter your Password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              required
              placeholder='Enter your confirm Password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block btn-primary'>
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Register
