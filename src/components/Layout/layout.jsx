/* eslint-disable react/prop-types */
import './layout.css'
import Header from '../navbar/header'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ cart }) => {
    
    return (
        <>
            <Header key='header' cart={cart} />

            <div className='outlet'>
                <Outlet />      
            </div>
            
        </>
    );
}

export default Layout;