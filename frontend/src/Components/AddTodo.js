function AddTodo() {
  return (
    <div className='border-2 px-20 py-10'>
      <form className='flex flex-col items-center content-center'>
        <div className='form-control mb-4  '>
          <label className='label mb-2' for='title'>
            <span className='label-text '>Enter Todo Title</span>
          </label>
          <input
            type='text'
            id='title'
            placeholder='Enter Todo Title here'
            aria-describedby='emailHelp'
            className='input input-bordered sm:text-xs'
          />
          <label className='label mt-6 mb-2' for='desc'>
            <span className='label-text'>Enter Todo Description</span>
          </label>
          <input
            type='email'
            id='desc'
            placeholder='Enter Description here'
            className='input input-bordered sm:text-xs'
          />
        </div>
        <button type='submit' className='btn mt-2 '>
          Create Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
