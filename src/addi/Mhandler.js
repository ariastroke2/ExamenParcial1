
import React, { useState} from 'react';
import { Enviar } from './Enviar';
import './styles.css';

export const Mhandler = ({ ActionList }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [apodo, setApodo] = useState('');
    const [adv, setAdv] = useState('');


    return (
        <div className="main">
            <Enviar
                setNomE={setNombre}
                setApeE={setApellido}
                setApoE={setApodo}
                setAdv={setAdv}
            />
            <br />
            <p id="adv">{adv}</p>
            Datos:
            <p>{nombre} {apellido} ({apodo})</p>
            



        </div>
    )
}