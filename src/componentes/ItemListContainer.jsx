//no se porque este props no se activa
function ItemListContainer ( props ) {
    const bienvenida = {
        name: "Greeting"
    }
}
return (
    <div>
        <h2> {props.bienvenida.name} </h2>
    </div>
)
export default ItemListContainer;
