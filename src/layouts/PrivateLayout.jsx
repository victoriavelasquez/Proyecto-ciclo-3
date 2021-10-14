import React from 'react'
import Sidebar from 'components/Sidebar';

const PrivateLayout = ({children}) => {
    return (
        <div className='display:flex height:100px'>
            <Sidebar/>
           <main className=''>
            {children}
            </main>
        </div>
    )
}

export default PrivateLayout
