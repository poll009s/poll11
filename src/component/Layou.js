import React from 'react';
import NaveBare from './Navebar';




const Layout = ({children})=>{

    return(
    <div>
        <NaveBare />
        {children}
    </div>
    );
}
export default Layout;