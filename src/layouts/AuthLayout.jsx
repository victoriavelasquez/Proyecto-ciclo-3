import React from 'react'

const AuthLayout = ({children}) => {
    return (
        <div className='display:flex justify-content:spacew-between background-color: grey padding: 2px 4px'>
           Layout de autenticación
            <div className='height:70px'>{children}</div>
        </div>
    )
}

export default AuthLayout
