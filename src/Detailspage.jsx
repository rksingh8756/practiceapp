import React, {useState}from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


function Detailspage(){
  const [a,b]=useState({});

  let {id}=useParams();
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((single)=>{
   console.log(single.data);
  b(single.data)
  });
  // console.log(id);
 
  return(
 <>
         <div className="container-fluid">
              <div className='row'>
                 <div className="col-md-12">
                     <h1>Heading {a.id}</h1>
                 </div>
                 <div className="col-md-4">
                    <section>
                      <h2> Image Here </h2>
                     </section> 
                 </div>
                 <div className="col-md-8">
                     <section className="border p-3">
                          <h2>{a.title}</h2>
                          <p>{a.body}</p>
                     </section>
                 </div>
              </div>   
         </div>
       </>
   );
}
export default Detailspage;
