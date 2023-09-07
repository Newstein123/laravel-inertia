import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link, router } from '@inertiajs/react'
import {usePage} from '@inertiajs/react'

const Create = () => {
  const [values, setValues] = useState({
    'name' : "",
    "email" : "",
    "password" : "",
    "confirm_password" : ""
  })

  const {errors} = usePage().props;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); 
    router.post('/user/create', values);
  }

  return (
    <div className="container my-3">
        <div className="p-2 rounded">
          <div className="d-flex justify-content-between align-items-center">
              <h3> User Create </h3>
              <div> 
                  <Link href="/user" className='btn btn-sm btn-secondary' > Back </Link>
              </div>
          </div>
        </div>

        {/* Search Component */}
        <form onSubmit={handleSubmit}>
          <div className="p-2 bg-light shadow-lg my-3">
            <h5 className='text-center my-3'> Create User </h5>
            <div className="row my-3 mx-3">
              <div className="col-md-3">
                <label htmlFor="name"> Name </label>
              </div>
              <div className="col-md-9">
                <input 
                  type="text" 
                  name='name'
                  className='form-control'
                  placeholder='Enter Name' 
                  onChange={handleOnChange}
                />
              </div>
              {errors.name && <div className="text-danger text-center my-2"> {errors.name} </div> }
            </div>

            <div className="row my-3 mx-3">
              <div className="col-md-3">
                <label htmlFor="email"> Email </label>
              </div>
              <div className="col-md-9">
                <input 
                  type="text" 
                  name='email'
                  className='form-control' 
                  placeholder='Enter Email Address'
                  onChange={handleOnChange} 
                />
              </div>
              {errors.email && <div className="text-danger text-center my-2"> {errors.email} </div> }
            </div>

            <div className="row my-3 mx-3">
              <div className="col-md-3">
                <label htmlFor="password"> Password </label>
              </div>
              <div className="col-md-9">
                <input 
                  type="text" 
                  name='password'
                  className='form-control' 
                  placeholder='Enter Password' 
                  onChange={handleOnChange}  
                />
              </div>
              {errors.password && <div className="text-danger text-center my-2"> {errors.password} </div> }
            </div>

            <div className="row my-3 mx-3">
              <div className="col-md-3">
                <label htmlFor="name"> Confirm Password </label>
              </div>
              <div className="col-md-9">
                <input 
                  type="text" 
                  name='confirm_password'
                  className='form-control' 
                  placeholder='Confirm Password'
                  onChange={handleOnChange}
                  />
              </div>
              {errors.confirm_password && <div className="text-danger text-center my-2"> {errors.confirm_password} </div> }
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

Create.layout = page => <Layout children={page} title="Welcome" />
export default Create
 