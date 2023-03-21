import { useState, useEffect } from 'react'
import { FaSpinner, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  })
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      toast.success(message)
      navigate('/login')
    }
    dispatch(reset())
  }, [user, isLoading, isError, isSuccess, message, dispatch, navigate])

  const { firstname, lastname, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

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
        firstname,
        lastname,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='firstname'
              value='{firstname}'
              placeholder='Enter your first Name'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='secondname'
              value='{secondname}'
              placeholder='Enter your second Name'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value='{email}'
              placeholder='Enter your Email Address'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value='{password}'
              placeholder='Enter your Password'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value='{password2}'
              placeholder='Enter your confirm password'
              onChange={onChange}
              required
            />
          </div>
        </form>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </div>
      </section>
    </>
  )
}

export default Register
