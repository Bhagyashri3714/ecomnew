import { Link } from "react-router-dom";

function Card(props) {
    return (
        <>
            <div className="card card1" style={{width:400}}>
                <img className="card-img-top img1" src={props.img1} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{props.id}</h4>
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.category}</p>
                    {/* <p className="card-text">{props.description}</p> */}
                    {/* <a href="#" className="btn btn-primary">ReadMore</a> */}
                    <Link className="rmbtn" to={`/productDetails/${props.id}`}>ReadMore</Link>
                </div>
            </div>
        </>
    )
}

export default Card;