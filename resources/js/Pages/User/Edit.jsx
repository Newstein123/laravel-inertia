import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useForm, usePage } from '@inertiajs/react'
import {Link} from '@inertiajs/react'

const Edit = ({user}) => {
  const {data, setData, put, progress, processing} = useForm({
    'name' : user.name,
    'email' : user.email
  })
  const {errors} = usePage().props
  function submit(e) {
    e.preventDefault()
    put(`/user/edit/${user.id}`, data)
  }

  return (
    <div className="container my-3">
        <div className="p-2 rounded">
          <div className="d-flex justify-content-between align-items-center">
              <h3> User Edit </h3>
              <div> 
                  <Link href="/user" className='btn btn-sm btn-secondary' > Back </Link>
              </div>
          </div>
        </div>
        {progress && (
          <progress value={progress.percentage} max="100">
            {progress.percentage}%
          </progress>
        )}
        {/* Search Component */}
        <form onSubmit={submit}>
          <div className="p-2 bg-light shadow-lg my-3">
            <h5 className='text-center my-3'> Update User </h5>
            <div className="row my-3 mx-3">
              <div className="col-md-3">
                <label htmlFor="name"> Name </label>
              </div>
              <div className="col-md-9">
                <input 
                  type="text" 
                  className='form-control'
                  placeholder='Enter Name'
                  value={data.name} 
                  onChange={e => setData("name", e.target.value)}
                />
              </div>
              {errors.name && <div className='text-danger text-center my-2'>{errors.name}</div>}
            </div>

            <div className="row my-3 mx-3">
              <div className="col-md-3">
                <label htmlFor="email"> Email </label>
              </div>
              <div className="col-md-9">
                <input 
                  type="text" 
                  value={data.email}
                  className='form-control' 
                  placeholder='Enter Email Address'
                  onChange={ e => setData('email', e.target.value)} 
                />
              </div>
              {errors.email && <div className='text-danger text-center my-2'> {errors.email} </div> }
            </div>    

            <div className="row mx-3">
              <div className="col-md-12">
                <div className="text-end">
                  <button 
                    type='submit'
                    className='btn btn-sm btn-secondary text-white'> Submit </button>
                </div>
              </div>
            </div>        
          </div>
        </form>
    </div>
  )
}

Edit.layout = page => <Layout children={page} title="Welcome" />
export default Edit
