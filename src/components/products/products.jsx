/* eslint-disable react/prop-types */
import './products.css'
import Product from './product'
const Products = (props) => { 
    const elements = []
    props.products.map((product) => { 
        elements.push(<Product className='col' key={`product${product.id}`} onAddInCart={ props.onAddInCart} product={product}></Product>)
    })
    
    return (
        <>
            <div className='products-container'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    { elements }
                </div>
            </div>
            
            
        </>
    )
}

export default Products;