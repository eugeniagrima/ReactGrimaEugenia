import "./card.css"
import Button from "../Button/Button";
//ACA SOLO TIENE QUE IR EL RETURN? y en app va esto de aca abajo?
function Card( props ) {
    const dataProducto = {
        name: "Plato ceramica",
        price: 2350,
        imgurl: "https://i.picsum.photos/id/1068/7117/4090.jpg?hmac=Y6xHXrzHsNlbRTbhzZ53Yk-Ux9lUECBLbbP4wb5a1qY",
        description: "Plato confeccionado a mano"
    }

    return (
        <div className="main">
            <div className="card">
                <div className="card-img">
                    <img className= "img-producto" src= {props.dataProducto.imgurl} alt="imagen"></img>
                </div>
                <div className="card-detail">
                    <h2> {props.dataProducto.name} </h2>
                    <p> {props.dataProducto.description} </p>
                    <h3> {props.dataProducto.price} </h3>
                    <Button text= "+ info"/>
                </div>
            </div>
        </div>
    )
}

export default Card;