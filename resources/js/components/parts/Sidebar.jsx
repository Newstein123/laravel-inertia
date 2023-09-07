import { Link, usePage} from '@inertiajs/react'
import React from 'react'

const Sidebar = () => {
  const { url, component } = usePage()
  return (
    <div>
      <ul className="list-group">
        <li className={url == '/dashboard' ? 'list-group-item active' : 'list-group-item'}> 
            <Link href='/dashboard' className='text-decoration-none text-dark'> Dashboard  </Link>
        </li>
        <li className='list-group-item'>  
            <Link href='/user' className='text-decoration-none text-dark'> Customers  </Link>
        </li>
        <li className={url === '/user' || url === '/user/create' ? 'list-group-item active' : 'list-group-item'}> 
            <Link href='/user' className='text-decoration-none text-dark'> Users  </Link>
        </li>
        <li className="list-group-item"> 
            <Link href='/user' className='text-decoration-none text-dark'> Posts  </Link>
        </li>
        <li className="list-group-item">  
            <Link href='/user' className='text-decoration-none text-dark'> Settings  </Link>
        </li>
        </ul>
    </div>
  )
}

export default Sidebar
