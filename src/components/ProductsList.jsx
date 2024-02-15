export const ProductsList = ({products}) => {
    return <>
        <h1>Products:</h1>
        {products.map(product =>
            <div
                key={product.id}
                className='product' style={{border: "1px solid", borderRadius: "5px", background:"lightyellow", maxWidth: "350px", margin: "1em auto"}}>
                <div>
                    <strong>{product.name} - </strong><span style={{color: "green"}}>${product.price}</span>
                </div>
                <p>{product.description}</p>
            </div>
        )}
    </>
}