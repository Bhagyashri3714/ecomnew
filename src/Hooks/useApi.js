import { useEffect, useState } from "react";

const useApi = (url)=> {
    const [product, setProducts] = useState([]); 
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch(url)      
    .then((data)=>data.json())
    .then((res)=>setProducts(res))
    .finally(()=>setLoading(false));
    },[url])

    return {product,loading};
}

export default useApi;