/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import ErrorView from '../error/error-view'
import './OrderPreview.css'
import OrderItem from './orderitem/order-item'

let isCheckoutComplete = false
const OrderPreview = ({ cart, onCheckout }) => {
    const [isReady, setisReady] = useState(false)
    const [checkoutComplete, setcheckoutComplete] = useState(false);
    useEffect(() => { 
        if (isReady) {
            setcheckoutComplete(isCheckoutComplete)    
        }
        
    }, [checkoutComplete, isReady])
    
    if (checkoutComplete) { 
        const error = new Error("Thank you for placing your order.");
        return (<>
            <ErrorView key='order-complete-view' error={ error } />
        </>)
    } else {
        if (cart.numberOfItems < 1) {
            const error = new Error("You haven't placed any order yet");
            return (<>
                <ErrorView key='order-empty-view' error={ error } />
            </>)
        }

        const elements = []
        for (const entry of cart.cartEntries) { 
            elements.push(
                <OrderItem
                    key={`order-preview-${entry.product.id}`}
                    product={entry.product}
                    numberOfItems={entry.numberOfItems}
                    subtotal={entry.subtotal}
                    discount={entry.discount} />
            )
        }

        return (
            <>
                <div className='order-list-container'>
                    <h3>Product list</h3>
                    <div className='order-list-item-container'>
                        { elements }
                    </div>
                    <div className='text-end mt-5 pe-5'>
                        <span className='product-data'>Total: {cart.total}</span>$
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-success product-data rounded' type="button" value='CHECKOUT' onClick={() => { 
                            onCheckout();
                            isCheckoutComplete = true;
                            setisReady(true);
                        }} />
                    </div>
                    
                </div>
            </>
        )
    }
    
}

export default OrderPreview;