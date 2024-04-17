import React from 'react';
import './Tablero.css';
import CustomButton from '../CustomButton/CustomButton';

function Tablero(){
    return(
        <>
        <div className='filaTIC'>
            <CustomButton posicion={0} texto=""/>
            <CustomButton posicion={1} texto=""/>
            <CustomButton posicion={2} texto=""/>
        </div>
        <div className='filaTIC'>
            <CustomButton posicion={3} texto=""/>
            <CustomButton posicion={4} texto=""/>
            <CustomButton posicion={5} texto=""/>
        </div>
        <div className='filaTIC'>
            <CustomButton posicion={6} texto=""/>
            <CustomButton posicion={7} texto=""/>
            <CustomButton posicion={8} texto=""/>
        </div>

        </>
    );
}
export default Tablero;