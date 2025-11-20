import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import Cardlist from "./Cardlist";

function App() {

    // const [products, setProducts] = useState([]); 
    const [url, setUrl] = useState('http://localhost:3000/product');
    const {product:products, loading:load} = useApi(url);
    // const [cnt,setCnt] = useState(0);

    // useEffect(()=>{
    //     fetch(url)      //It allows to render the data only once and prevent infinite loop
    // .then((data)=>data.json())
    // .then((res)=>setProducts(res));
    // },[url])


    // useEffect(()=>{
    //     fetch('http://localhost:3000/product')      //It allows to render the data only once and prevent infinite loop
    // .then((data)=>data.json())
    // .then((res)=>setProducts(res));
    // },[cnt])

    // fetch('http://localhost:3000/product')     //It goes in infinite loop as useState is changes every time.
    // .then((data)=>data.json())                   //It is called Side-effect
    // .then((res)=>setProducts(res));

    console.log(products);
    console.log("Render")
    return (
        <>
            <p>Ecommerce App</p>
            {/* <button onClick={()=>setCnt(cnt+1)}>CallApi</button> */}
            <div className="btn1">
                <button className="btn btn-success"
                onClick={()=>setUrl('http://localhost:3000/product')}
                >All</button>
                <button className="btn btn-warning"
                onClick={()=>setUrl('http://localhost:3000/product?category=Watch')}
                >Watch</button>
                <button className="btn btn-info"
                onClick={()=>setUrl('http://localhost:3000/product?category=SmartPhone')}
                >Smartphone</button>
                <button className="btn btn-primary"
                onClick={()=>setUrl('http://localhost:3000/product?category=Laptop')}
                >Laptop</button>
                <button className="btn btn-primary"
                onClick={()=>setUrl('http://localhost:3000/product?category=TVs')}
                >TV</button>
                <br/>
                {
                    load && <div class="spinner-border text-dark"></div>
                }
            </div>
            <Cardlist products1 = {products}/>
        </>
    )
}

export default App;