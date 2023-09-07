import React from 'react'
import Layout from '../../components/Layout'

const Index = ({users_count}) => {
  return (
    <div className='container'>
        <div className="row m-3">
            <div className="col-md-4">
                <div className="p-2 bg-success text-white rounded shadow-lg text-center">
                    <h5> Total Users </h5>
                    <p> {users_count} </p>
                </div>
            </div>
        </div>
    </div>
  )
}


Index.layout = page => <Layout children={page} />
export default Index
