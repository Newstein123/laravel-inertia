import React from 'react'
import { Link } from '@inertiajs/react'
import Header from './parts/header'
import Footer from './parts/Footer'
import Sidebar from './parts/Sidebar'

const Layout = ({children}) => {
  return (
    <main> 
        <header> 
            <Header />
        </header>
        <section style={{marginTop : "4em"}} className='min-vh-100'>
            <div className="row">
              <div className="col-md-3">
                  <Sidebar />
              </div>
              <div className="col-md-9">
                {children}
              </div>
            </div>
        </section>
        <footer>
            <Footer />
        </footer>
    </main>
  )
}

export default Layout
