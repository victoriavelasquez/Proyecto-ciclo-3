import React, { useEffect, useState }  from 'react';

const ropabackend=[
    {
        nombre:'Camisa',
        marca:'Tommy',
        talla:'s'
    },
    {
        nombre:'Pantalon',
        marca:'Tommy',
        talla:'m'

    },
    {
        nombre:'Camiseta',
        marca:'Tommy',
        talla:'s'
    },
    {
        nombre:'Chacqueta',
        marca:'Tommy',
        talla:'L'
    },
    {
        nombre:'CamisaChaleco',
        marca:'Tommy',
        talla:'m'
    }



];

const Ropa =( ) =>{
    const [mostrarTabla, setMostrarTabla]= useState(true);
    const [ropa, setRopa]= useState([]);
    const [textoBoton, setTextoBoton]= useState('Crear nueva Ropa');
    const [colorBoton, setColorBoton]= useState('indigo');

    useEffect(()=>{
        //obtener listas de prendas desde el backend
        setRopa(ropabackend)

    },[]);

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton('Crear nueva prenda');
            setColorBoton('indigo')

        } else{
            setTextoBoton('Mostrar todas las prendas');
            setColorBoton('blue');
 
        }

    }, [mostrarTabla]);

    return (
        <div className='flex-direction:column align-items:flex-start padding:8px'>
            <div className=''>
            <h2 className='justify-content:center'> Pagina de administracion de la ropa</h2>
           
            <button onclick={()=>{setMostrarTabla (!mostrarTabla);}} className={`text-white bg-${colorBoton}-500 p-5`}> {textoBoton}
            </button>

            </div>
            {mostrarTabla ?  <TablaRopa listaRopa={ropa}/> : <FormularioCreacionRopa /> }
           
        </div>
    );
}

const TablaRopa= ({ listaRopa })=> {
    console.log('Este es el listado de Ropa en el componente de tabla', listaRopa)
    return (
    <div className='flex-direction:column align-items:flex-start'> 
    <h2  className='text-align:left front-size:24 px color:grey-800'>Todas las Prendas</h2>       
    <table>
        <thead> 
            <tr>
                <th>Nombre de la Prenda</th>
                <th>Marca de la Prenda</th>
                <th>Talla de la Prenda</th>
                
                </tr> 
        </thead>
        <tbody>
            {listaRopa.map((ropa)=>{
                return (
            <tr>
                <td>{ropa.nombre}</td>
                <td>{ropa.marca}</td>
                <td>{ropa.talla}</td>
            </tr>
             );
            })}
        </tbody>
       </table>
       </div> 
    );
};

const FormularioCreacionRopa = ()=>{
    const [nombre, setNombre]=  useState('')
    return (
    <div className='flex-direction:column align-items:flex-start'>
        <h2 className='text-align:left front-size:24 px color:grey-800'>Crear Nueva Prenda</h2>
        <form className='grid-template-columns:repeat'>
            <label htmlfor='name'>
            <input 
            name='nombre'
            className='background-color:rgb(249,250,251) border-color: rgb(75,85,99) padding:2px border-radius:2px margin:2px'
            type="text"
            placeholder='Camisa' />
            </label>
            <label htmlfor='marca'>
             Marca de la Prenda
            <select className='background-color:rgb(249,250,251) border-color: rgb(75,85,99) padding:2px border-radius:2px margin:2px' name='marca'>
 
                <option disabled>Seleccione una opción</option>
                <option>Sara</option>
                <option>Americanino</option>
                <option>Chevignon</option>
                <option>Guess</option>
                <option>Adidas</option>
                <option>Tommy Hilfierd</option>
            </select>
           
            </label>
            <label htmlfor='talla'>
            Talla de la prenda
            <input
            name='talla'
            className='background-color:rgb(249,250,251) border-color: rgb(75,85,99) padding:2px border-radius:2px margin:2px'
            type="text"
            // {minimo s}
            // {maximo xl}
            placeholder='s' />
            </label>


            <button type='button'className='grid-column:span2 background-color:rgb(249,250,251)border-color: rgb(75,85,99) padding:2px border-radius:2px margin:2px'>
                Guardar Prenda 
                </button>


        </form>

        </div>

    );

};

export default Ropa
