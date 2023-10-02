import React from 'react'
import Sidebar from './Sidebar'
import {Outlet} from 'react-router-dom'


function Myservicepage(){
    return(
     <>
        <div className="container-fluid">
             <div className="row">
                  <div className="col-md-2">
                         <section className='border'>
                              <Sidebar></Sidebar>
                         </section>
                  </div>
                  <div className="col-md-10">
                         <section className='border'>
                              <h1>Content Page</h1>
                              <Outlet></Outlet>
                         </section>
                  </div>
             </div>
        </div>
                                                                                                                                                                                                                                                     </>
    )
}
export default Myservicepage;