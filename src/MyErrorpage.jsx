import React from 'react';
import {Link} from "react-router-dom";


function Myerrorpage(){
  return(
       <div className="container-fluid">
          <div classname="row">
              <div className='col-12 text-center'>
                   <h1 className="errorpage">404</h1>
                   <h3>Not  fount Page</h3>
                   <Link to="/">Back To Home</Link>
             </div>
          </div>
       </div>
  );


}
export default Myerrorpage;