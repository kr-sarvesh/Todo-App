function AddTodo() {
  return (
    <form className='flex flex-col items-center w-3/4 '>
      <div className='form-control mb-4 w-1/2 max-w-2xl '>
        <label className='label' for='title'>
          <span className='label-text'>Enter Todo Title</span>
        </label>
        <input
          type='text'
          id='title'
          placeholder='Enter Todo Title here'
          aria-describedby='emailHelp'
          className='input input-bordered'
        />
        <label className='label' for='desc'>
          <span className='label-text'>Enter Todo Description</span>
        </label>
        <input
          type='email'
          id='desc'
          placeholder='Enter Description here'
          className='input input-bordered'
        />
      </div>
      <button type='submit' className='btn '>
        Create Todo
      </button>
    </form>
  )
}

export default AddTodo
