/* eslint-disable react/prop-types */
import './order-item.css'

const OrderItem = ({
    product, 
    numberOfItems,
    subtotal,
    discount
}) => {
    
    return (
        <>
            <div className='container'>
                <div className='order-item-box'>
                    <div className='d-flex flex-row'>
                        <div className='w-100'>
                            <h3 className='product-title'>{product.title}</h3>
                        </div>
                        <div className='flex-shrink-0 px-3'>
                            ({ product.price }$ x { numberOfItems }) - { product.discountPercentage }%
                        </div>
                        <div className='flex-shrink-0'>
                            <span className='product-data'>{ subtotal - discount }</span>$
                        </div>
                    </div>
                    Number of items: <span className='product-data'>{ numberOfItems }</span>
                </div>
            </div>
            
        </>
    )
}
 
export default OrderItem;