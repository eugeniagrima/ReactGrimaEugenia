import ItemCount from "./ItemCount";
import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const prodCeramica = [
    { id: 1, imgurl: "https://www.freepik.es/foto-gratis/mezcla-arcilla-vasija-ceramica_9754963.htm#query=ceramica&position=1&from_view=search", title: "Plato"},
    { id: 2, imgurl: "https://www.freepik.es/foto-gratis/manos-alfarero-creando-vasija-barro_28586354.htm#query=taza%20ceramica&position=33&from_view=search", title: "Taza"},
    { id: 3, imgurl: "https://www.freepik.es/foto-gratis/arreglo-vasijas-barro_14833319.htm#query=ceramica&position=12&from_view=search", title: "Jarrón"}
];
const [data, setData] =useState ([]);

useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
                resolve(prodCeramica)
        }, 2000);
    });
    getData.then(res => setData(res));
}, [])

function ItemListContainer ( props ) {
    const bienvenida = {
        name: "Greeting"
    }

    return (
        <div>
            <h2> {props.bienvenida.name} </h2>
            <ItemCount initial={1} stock={10} />
            <ItemList data={data}/> 
        </div>
        
    )
}

export default ItemListContainer;
