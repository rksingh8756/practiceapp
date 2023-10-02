import React, {useEffect,useState}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Myaxios() {
    const [mydata, myfun] = useState([])
    const Myapi = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((e) => {
            console.log(e.data);
            myfun(e.data);
        })
    }
    useEffect(() => {
        Myapi();
    }, [])


    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    {mydata.map((p) => {
                        return (
                            <div className='col-md-4 mt-3' key={p.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <p className="card-text">{p.body}</p>
                                        <a href="#" className="btn btn-primary">Go Somewhere {p.id}</a>
                                        <Link to={`${p.id}`} className="btn btn-success ms-3">View</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    );

}
export default Myaxios