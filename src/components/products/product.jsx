/* eslint-disable react/prop-types */
import './product.css'

const Product = (props) => { 

    function onClickReceived() { 
        props.onAddInCart(props.product)
    }
    return (
        <>
            <div className='product-container'>
                <div className="product-container2">
                    <div className='product-img-container'>
                        <img src={props.product.thumbnail} />
                    </div>
                    <h3 className='h3'>{props.product.title}</h3>
                    <p>
                        Price: <span className='product-data'>{props.product.price}$</span> <br />
                        Discount: <span className='product-data'>{props.product.discountPercentage}%</span> 
                    </p>

                    <input className='button-input' type="button" value="Add To Cart" onClick={onClickReceived} />
                </div>
                
            </div>
        </>
    )
}

export default Product;