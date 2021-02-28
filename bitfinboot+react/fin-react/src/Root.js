import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouteMain from './RouteMain';

const Root=()=>{
    return (
        <BrowserRouter>
            <RouteMain/>
        </BrowserRouter>
    )
}
export default Root;