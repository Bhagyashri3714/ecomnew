import { useNavigate, useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";

function ProductDetails () {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params.pid);
    const {product:prod} = useApi(`http://localhost:3000/product/${params.pid}`);
    console.log(prod);
    return (
        <>
            <div className="card card1" style={{width:400}}>
                <img className="card-img-top img1" src={prod.img1} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{prod.id}</h4>
                    <h4 className="card-title">{prod.name}</h4>
                    <p className="card-text">{prod.category}</p>
                    <p className="card-text">{prod.description}</p>
                    <button className="btn btn-success"
                    onClick={()=>{
                        setTimeout(()=>{
                            navigate('/product')
                        },2000)
                    }}
                    >Go Back</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;