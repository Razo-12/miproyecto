import React from "react";
import { useState} from "react";
import './CustomButton.css';

interface Valores{
    texto:String,
    posicion:number

}
function CustomButton({texto, posicion}:Valores){
    const [contador, setContador] = useState(0);

    const sumar = () =>{
        setContador(variable=>{
            return variable+1;
        });
    };

    const 
    const [estadoGato, setEstadoGato]= useState('-');

    const cambiarEstado = () =>{
        setEstadoGato(estado=>{
            if(estado === '-') return 'x';
            if(estado === 'x')return '0';
        });
    };

    return (
        <div onClick={()=>{isFunctionExpression(props.posicion)}} className="mi-button">
            {estadoGato}
        </div>
    );
}

export default CustomButton;