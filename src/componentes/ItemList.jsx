import Item from "./Item";

const ItemList = ({data= []}) => {
    return (
        data.map(prodCeramica => <Item key={prodCeramica.id} info={prodCeramica} />) 
    );
}

export default ItemList;