import React,{useState} from 'react';
import { Link } from "react-router-dom";

const datalist = [
    {
        id: 1,
        dimg: 'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg',
        dhead: 'This is heading',
        dis: 'This is description paragraph',
        Price: 500
    },
    {
        id: 2,
        dimg: 'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg',
        dhead: 'This is heading',
        dis: 'This is description paragraph',
        Price: 500
    },
    {
        id: 3,
        dimg: 'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg',
        dhead: 'This is heading',
        dis: 'This is description paragraph',
        Price: 500
    },
    {
        id: 4,
        dimg: 'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg',
        dhead: 'This is heading',
        dis: 'This is description paragraph',
        Price: 500
    },
    {
        id: 5,
        dimg: 'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg',
        dhead: 'This is heading',
        dis: 'This is description paragraph',
        Price: 500
    }
];
//console.log(datalist);
 const mycard=[];
 function Myfatchapi() {
 const [x,y]=useState();

 const Abc =(e)=>{
  //mycard.push(e.currenTarget.id)
  mycard.push(e)
  console.log(mycard.length);
  y(mycard.length);
  console.log(mycard);
  }

    return (
        <div className="container-fluid">
            <div class="row">
                <div className="col-12">
                    {/* <h1> Card:{mycard.length}</h1>
                    <h1 className='btn btn-primary'>Card:{x}</h1> */}
                    <button type="button"  className="btn btn-primary position-relative">
                        Items
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {x}
                            <span className="visually-hidden">unread Measssage</span>
                        </span>
                    </button>
                </div>

                {datalist.map((x) => {
                    return (
                        <>
                            <div className="col-md-3" key={x.id}>
                                <div class="card" onClick={Abc}>
                                    <img src={x.dimg} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{x.dhead}</h5>
                                            <p class="card-text">{x.dis}</p>
                                            <h3>Price:{x.Price}</h3>
                                            <a href="#" class="btn btn-primary btn-sm">Go somewhere {x.id}</a>
                                            <button type="button" id={x.id} className='btn btn-success btn-sm ms-2'>addto{x.id}</button>
                                        </div>
                                </div>

                            </div>


                        </>
                    );

                })}

            </div>
        </div>
    );
}
export default Myfatchapi;

