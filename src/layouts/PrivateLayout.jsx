import React from 'react'
import Sidebar from 'components/Sidebar';

const PrivateLayout = ({children}) => {
    return (
        <div className='display:flex height:100px'>
            <div className=''>
            <Sidebar/>
           <main className='display:flex; justify-content:center;'>
            {children}
            </main>
            </div>
        </div>
    )
}

export default PrivateLayout
