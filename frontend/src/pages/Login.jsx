import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../Components/spinner'
import { login, reset } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

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
      navigate('/')
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

    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )

  return (
    <div className='flex flex-col container mx-0'>
      <section className='heading '>
        <h1 className='flex flex-row items-center justify-center gap-3'>
          <FaSignInAlt />
          Login
        </h1>
        <p>Please Log in </p>
      </section>
      <section className='form '>
        <form onSubmit={onSubmit} className='flex flex-col'>
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
            <button type='submit' className='btn btn-block btn-primary'>
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login
