import { useEffect, useState } from 'react';
import Home from './home/Home.jsx'
import Order from './order/Order.jsx'
import OrderPreview from './order-preview/OrderPreview.jsx'
import EmptyPage from './empty-page/empty-page.jsx'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Layout from './Layout/layout.jsx'


let cartData = {
    cartEntries: [],
    numberOfItems: 0,
    subTotal: 0,
    discount: 0,
    total: 0
  }
  
  function addInCart(product) { 
    let entryIndex = cartData.cartEntries.findIndex((entry) => { 
        entry.product.Id == product.Id
    })
    
      if (entryIndex == -1) {
        let price = product.price 
        let discount = (product.price * product.discountPercentage) / 100
        let productDetail = { 
            product: product,
            numberOfItems: 1,
            subtotal: price,
            discount: discount
        }
        cartData.cartEntries.push(productDetail)
        
    } else { 
        cartData.cartEntries[entryIndex].numberOfItems += 1
        let price = product.price * cartData.cartEntries[entryIndex].numberOfItems
        let discount = (price * product.discountPercentage) / 100
        cartData.cartEntries[entryIndex].product.subTotal = price
        cartData.cartEntries[entryIndex].product.discount = discount
    }
  
    cartData.numberOfItems += 1
    cartData.subTotal = cartData.cartEntries.reduce((total, newValue) => { 
        return total + newValue.subtotal
    }, 0)
    cartData.discount = cartData.cartEntries.reduce((total, newValue) => { 
        return total + newValue.discount
    }, 0)

    cartData.total = cartData.subTotal - cartData.discount
  }

const App = () => { 
    const [data, setData] = useState({
        cartEntries: [],
        numberOfItems: 0,
        subTotal: 0,
        discount: 0,
        total: 0
    })
    
    const [updateAvailable, setupdateAvailable] = useState(false);
    useEffect(() => { 
        if (updateAvailable) {
            setData(cartData)
            setupdateAvailable(false)
        } 
        
    }, [data, setupdateAvailable, updateAvailable])

    function onAddInCart(product) { 
        addInCart(product)
        setupdateAvailable(true)
    }

    const route = createBrowserRouter([
        {
            path: '/',
            element: <Layout key='base' cart={data} />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'order',
                    element: <Order key='order-page' onAddInCart={onAddInCart} />
                },
                {
                    path: 'order-preview',
                    element: <OrderPreview key='order-data-preview' cart={data} onCheckout={() => {
                        cartData = {
                            cartEntries: [],
                            numberOfItems: 0,
                            subTotal: 0,
                            discount: 0,
                            total: 0
                        }

                        setupdateAvailable(true)
                        
                    }} />
                },
                {
                    path: "*",
                    element: <EmptyPage />
                }
            ]
        }
    ]);

    return (
        <>
            <div>
                <RouterProvider router={route}/>
            </div>
        </>
    )
}

export default App;