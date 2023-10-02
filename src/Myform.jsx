import React from 'react';

function Myform(){
  return(
    <>
    <section className="container-fluid border p-5 shadow bg-light" style={{width:600,marginTop:10}}>
             <div className="row">
                  <div className="col-md-12 text-center">
                       <p className="h4 border-bottom pb-4 mb-4">
                          Custom Form vallidation
                       </p>
                  </div>
                  <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control"/>
                   </div>
                   <div className="col-md-6">
                      <label className="form-label">Email Id</label>
                      <input type="email" className="form-control"/>
                   </div>
                   <div className="col-md-6">
                      <label className="form-label">Phone no</label>
                      <input type="text" className="form-control"/>
                   </div>
                   <div className="col-md-6">
                      <label className="form-label">DOB</label>
                      <input type="date" className="form-control"/>
                   </div>
                   <div className="col-md-12">
                      <label className="form-label">Message</label>
                      <textarea  className="form-control" rows="{5}" value="sbhgngu">Type comment Here</textarea>
                   </div>

                   <div className="col-md-12 p-3 mt-3 text-center">
                     <button type="submit" className="btn btn-primary me-2">Submit</button>
                   </div>
             </div>
    </section>
    
    </>
  );
}
export default Myform;