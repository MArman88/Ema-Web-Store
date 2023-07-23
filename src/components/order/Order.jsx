/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Order.css'
import { Response } from '../../models/response';
import ErrorView from '../error/error-view';
import Products from '../products/products';
import LoaderView from '../loader/loader';

const Order = ({ onAddInCart }) => {
    const [response, setData] = useState(null)
    useEffect(() => { 
        
        if (response) { return }
        setTimeout(() => { 
            fetch('https://dummyjson.com/products').then(resp => resp.json()).then(data => { 
                setData(new Response(data.products || [], null))
            }).catch((reason) => {
                setData(new Response(null, reason))
            })
        }, 1000)
        
    }, [response])
    if (response) {
        if (response.error) { 
            return <ErrorView key='error-body' error={ response.error }></ErrorView>
        } else {
            return <Products key='product-body' onAddInCart={onAddInCart} products={response.data}></Products>
        }
    } else { 
        return <LoaderView />
    }
    
}

export default Order;
