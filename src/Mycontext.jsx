import React,{createContext} from 'react';
import Mychildcontext from './Mychildcontext'
import {Provider} from 'react-redux';

export const Mycontextprov=createContext();


function Mycontext(){
    return(
        <Provider Mycontextprov>
            <div style={{border:'1px solid red',padding:10}}>
                  <h1>Mycontext</h1>
                  <Mychildcontext/>
            </div>
        </Provider>
    );
}
export default Mycontext;

