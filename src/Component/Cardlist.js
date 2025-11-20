import Card from "./Card";

function Cardlist(props) {
    const product = props.products1;
    return (
        <>
        <div className="container">
            <p style={{textAlign:'center'}}>Cardlist</p>
            {
                product && product.map((p,ind)=>{
                    return <Card {...p} key={ind}/>
                })
            }
            </div>
        </>
    )
}

export default Cardlist;