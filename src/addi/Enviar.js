
import React, { useState} from 'react';

export const Enviar = ({ setNomE, setApeE, setApoE, setAdv }) => {

    const [nom, setNom] = useState('');
    const [ape, setApe] = useState('');
    const [apo, setApo] = useState('');

    const Addon = (e) => {
        e.preventDefault();
        console.log('onhere')
        if (nom != "" && ape != "" && apo != "") {
            setNomE(nom);
            setApeE(ape);
            setApoE(apo);
            setAdv('');
        } else {
            setAdv('Acción inválida');
        }
    }

    return (
        <div>
            <form id="act" onSubmit={Addon}>
                <label>Nombre:  </label>
                <input id="nombre" type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="NOMBRE" />
                <br />
                <label>Apellido:    </label>
                <input id="apellido" value={ape} onChange={(e) => setApe(e.target.value)} type="text" placeholder="APELLIDO" />
                <br />
                <label>Apodo:   </label>
                <input id="apodo" value={apo} onChange={(e) => setApo(e.target.value)} type="text" placeholder="APODO" />
                <br />
                <br />
                <button
                    id="sub"
                    type="submit">Enviar</button> <space />
                <button id="clean" type="reset" onClick={e => { setNom(""); setApe(""); setApo(""); setNomE(""); setApeE(""); setApoE(""); setAdv("") }}>Limpiar</button>

            </form>


        </div>
    )
}