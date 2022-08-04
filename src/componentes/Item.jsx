
const Item= ({info}) => {
    return (
        <a href="" className= "prodCeramica">
            <img src={info.imgurl} alt="" />
            <p>{info.title}</p>
        </a>
    );
}

export default Item; 
