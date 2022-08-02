import "./card.css"
function Card() {
    return (
        <div className="main">
            <div className="card">
                <div className="card-img">
                    <img src="https://i.picsum.photos/id/1068/7117/4090.jpg?hmac=Y6xHXrzHsNlbRTbhzZ53Yk-Ux9lUECBLbbP4wb5a1qY" alt="imagen"></img>
                </div>
                <div className="card-detail">
                    <h2> Producto </h2>
                    <p> Plato confeccionado a mano </p>
                    <h3> $2350 </h3>
                    <button> Ver más </button>
                </div>
            </div>
        </div>
    )
}

export default Card;