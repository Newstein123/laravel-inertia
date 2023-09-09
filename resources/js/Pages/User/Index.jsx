import React from 'react'
import Layout from '../../components/Layout'
import { Link, router } from '@inertiajs/react'
import {usePage, useForm} from '@inertiajs/react'
import UserSearch from '../../components/UserSearch'

const Index = ({users}) => {
  const {flash} = usePage().props;
  const {data, setData, get} = useForm({
    'name' : "",
    'email' : "",
    'start_date' : "",
    'end_date' : "",
  })
  const handleDelete = (id) => {
      if(window.confirm("Are you sure to delete")) {
        router.delete(`/user/${id}`)
      }
  }

  function submit (e) {
    e.preventDefault()
    get('/user', data)
  }

  return (
    <div className='container my-3'>
      <div className="p-2 rounded">
          {flash.message && (
            <div class="alert alert-success">{flash.message}</div>
          )}
        <div className="d-flex justify-content-between align-items-center">
            <h3> All Users </h3>
            <div> 
                <Link href="/user/create" className='btn btn-sm btn-secondary' > Create </Link>
            </div>
        </div>
        {/* User Search  */}
        <form onSubmit={submit}>
          <UserSearch data={data} setData={setData}/>
        </form>
        {/* User Search Ends */}
        <div className="table-responsive">
        <table className='table'>
          <thead>
            <tr className='text-center'>
              <th> Id </th>
              <th> Name </th>
              <th> Date </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
              {
                  users.map((user, index) => (
                    <tr key={user.id} className='text-center'>
                      <td> {index + 1} </td>
                      <td> {user.name} </td>
                      <td> {user.created_at} </td>
                      <td>  
                          <Link href={`/user/${user.id}`} className='btn btn-warning text-dark me-3'> View  </Link>
                          <Link href={`/user/edit/${user.id}`} className='btn btn-success text-white me-3'> Edit  </Link>
                          <button className='btn btn-danger text-white me-3' onClick={() => handleDelete(user.id)}> Delete  </button>
                      </td>
                    </tr>
                  ))
              }
          </tbody>
        </table>
        </div>   
      </div>   
    </div>
  )
}

Index.layout = page => <Layout children={page} title="Welcome" />

export default Index
