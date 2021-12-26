const Cart = ({data, charge}) =>  {

    return (
        <div>
            <div id="product-list-cart">
                {data.map((item, index) => (
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <h2>{item.price}€</h2> 
                    </div>   
                ))}
            </div>
            <h3>Total Charge: {charge}€</h3>
        </div>
    )
}

export default Cart