import React from 'react'
import Layout from '../../components/Layout'
import { Link } from '@inertiajs/react'

const Show = ({user}) => {
  return (
    <div className='container my-3'>
      <div className="p-2 rounded">
        <div className="d-flex justify-content-between align-items-center">
            <h3> User Details </h3>
            <div> 
                <Link href="/user" className='btn btn-sm btn-secondary' > Back </Link>
            </div>
        </div>
        <div className="p-3 my-3">
          <h5> User Information </h5>
          <table>
            <tbody>
              <tr>
                <td> Name : </td>
                <td> {user.name} </td>
              </tr>
              <tr>
                <td> Email: </td>
                <td> {user.email} </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
  )
}

Show.layout = page => <Layout title="show" children={page} />
export default Show
