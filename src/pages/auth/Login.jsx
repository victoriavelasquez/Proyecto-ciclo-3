import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='display:flex justify-content-center:space-between'>
            <h2 className='margin:2px font-size:30px font-weight:800px color:rgb (17,24,39) / '> Inicia sesión en tu cuenta</h2>
            <form className='margin:8px; max weight: 28 rem 448px '>
                <div>
                    <input className='border: grey 300 padding: 3px 2px color: grey 900 border-radius:10px box-shadow:2px'type='email'placeholder='dsl@c.com requerid'/>
                    <input className='border: grey 300 padding: 3px 2px color: grey 900 border-radius:10px box-shadow:2px' type='password' requerid/>
                </div>
                <div className='aling-items:center; justyfy-between;'>
                    <div>
                    <label htmlfor='recuerdame'>
                    <input type='checkbox' name='recuerdame'/>
                    Recuerdame
                    </label>
                </div>
                <div>
                    <Link to='/'>
                        ¿Olvidaste tu contraseña?
                    </Link>
                    </div>
                </div>
                <div>
                    <Link to='/admin'>
                    <button type='submit'>
                        Iniciar sesión
                    </button>
                    </Link>
                </div>
                <div>
                    o
                </div>
                <div>
                    <button>Continua con google</button>
                </div>
            </form>
        </div>
        
    )
}

export default Login
