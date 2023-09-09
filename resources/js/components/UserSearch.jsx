import React from 'react'

const UserSearch = ({setData}) => {

  const queryParams = new URLSearchParams(window.location.search);
  const {name, email, start_date, end_date} = Object.fromEntries(queryParams.entries())
  return (
    <div className='container my-3'>
      <div className="row">
        <div className="col-md-3">
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                value={name}
                onChange={e => setData('name',e.target.value)}
                className='form-control'
                placeholder='Enter Name'
            />
        </div>
        <div className="col-md-3">
            <label htmlFor="name">Email</label>
            <input 
                type="text" 
                value={email}
                onChange={e => setData('email',e.target.value)}
                className='form-control'
                placeholder='Enter Email'
            />
        </div>
        <div className="col-md-2">
            <label htmlFor="name"> Start Date </label>
            <input 
                value={start_date}
                onChange={e => setData('start_date',e.target.value)}
                type="date" 
                className='form-control'
            />
        </div>
        <div className="col-md-2">
            <label htmlFor="name"> End Date </label>
            <input 
                value={end_date}
                onChange={e => setData('end_date',e.target.value)}
                type="date" 
                className='form-control'
            />
        </div>
        <div className="col-md-2">
            <label htmlFor=""></label> <br />
            <button className='btn btn-primary'> Search  </button>
        </div>
      </div>
    </div>
  )
}

export default UserSearch
