/* eslint-disable react/prop-types */
import './header.css'
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

export const Header = ({ cart }) => {
    let bubble = cart.numberOfItems > 0 ? <span className='bubble'>{cart.numberOfItems}</span> : ''
    return (
        <>
            <nav className='fixed-top'>
                <div className='nav-bar'>
                    <Link className='home' to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul className='menu-bar'>
                        <li>
                            <Link className='menu-bar-links' to='order'>Order</Link>
                        </li>

                        <li><Link className='menu-bar-links' to= 'order-preview'>Order Preview { bubble}</Link></li>
                        
                        <li><Link className='menu-bar-links' to='manage-inventory'>Manage Inventory</Link></li>
                    </ul>
                </div>         
            </nav>
               
        </>
    )
}

export default Header;