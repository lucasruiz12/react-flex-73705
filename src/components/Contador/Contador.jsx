import { useState } from 'react';
import './Contador.css';

function Contador({ cantidad, restarCantidad, sumarCantidad }) {
    return (
        <div style={{ display: "flex", gap: "1rem", margin: "1rem 0", alignItems: "center" }}>
            <button className="btn btn-secondary" onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button className="btn btn-secondary" onClick={sumarCantidad}>+</button>
        </div>
    );
};

export default Contador;