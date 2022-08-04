
import React, {useEffect, useState} from "react";

function ItemCount ({initial,stock, onAdd}) {
    const [cantidad, setCount] = useState(parseInt(initial));
    const increase= () => {
        setCount(cantidad + 1);
    }
    const decrease= () => {
        setCount(cantidad - 1);
    }
    const onAdd= () =>{
        alert("Añadiste" + {cantidad} + " producto/s al carrito")
    }
    useEffect(() => {
       setCount(parseInt(initial));
    }, [initial])

    return (
       <div className="counter">
        <h3> Cuantos productos querés?</h3>
        <button disabled= {cantidad <=1} onClick={decrease (cantidad-1)}> - </button>
        <h3> Cantidad: {cantidad}</h3>
        <button disabled= {cantidad >=stock}  onClick={increase (cantidad+1)}> + </button>
        <button disabled= {stock <= 0} onClick= {() => onAdd (cantidad)} > Agregar al carrito</button>
       </div>
     
    )
}
export default ItemCount;
