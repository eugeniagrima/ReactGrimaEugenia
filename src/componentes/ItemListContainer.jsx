import ItemCount from "./ItemCount";

function ItemListContainer ( props ) {
    const bienvenida = {
        name: "Greeting"
    }

    return (
        <div>
            <h2> {props.bienvenida.name} </h2>
            <ItemCount initial={1} stock={10} />
        </div>
        
    )
}

export default ItemListContainer;
