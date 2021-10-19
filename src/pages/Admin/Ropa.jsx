import React, { useEffect, useState }  from 'react'

const ropa = () => {
    const [nombrePrenda, setNombrePrenda] = useState('');




    useEffect(() => {
        console.log('Hola soy un UseEffect que se ejecuta solo una vez cuando la pagina se renderiza, porque tiene el array de dependecias vacio');

    }, []);

    const cambioDeNombre= (e) => {
        console.log ('Nombre ',e.target.value)
    };

    const cambioDeMarca=(e) =>{ 
        console.log ('marca ',e.target.value);
    }

    useEffect(() =>{
        console.log ('esto es una función que se ejecuta cada que cambia el valor de nombrePrenda')
        console.log ('el valor de la variable es ', nombrePrenda);
    }, [nombrePrenda]);

    const EnvarDatosAlBackend=() =>{
        console.log ('El valor de la variable nombrePrenda es ', nombrePrenda);
    }
 
    return (
        <form className='display:flex; flex-direction:column'>
            <h2>Formulario</h2>
            <input onchance={cambioDeNombre} type="text" placeholder='Nombre de la prenda'/>
            <input onchance={cambioDeMarca} type="text" placeholder='Marca de la prenda'/>
            <input type="text" placeholder='Talla' />
            <button type= 'button' onclick={EnviarDatosAlBackend}className='blackground-color: indigo; color:white'>Enviar Datos</button>
        </form>
    )
}

export default ropa
