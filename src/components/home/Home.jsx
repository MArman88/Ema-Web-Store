import './Home.css'
import { Link } from 'react-router-dom'
import modelAustin from '../../assets/model-austin.jpg'

const Home = () => {
    return (
        <>
            <div className='p-5'>
                <div className='row row-cols-1 row-cols-md-2'>
                    <div className='col'>
                        <div className='p-5'>
                            <h5 className='h5'>Sale upto 70% off</h5>

                            <h1 className='h1'>New Collection for All</h1>
                            <h3 className='h3'>Discover all the new collections of the ready-to-wear collection.</h3>

                            <br />

                            <Link to='order'>
                                <input type="button" className='button' value='start shopping' />
                            </Link>
                        </div>
                        
                    </div>
                    <div className='col text-end px-5'>
                        <img src={modelAustin} alt="" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;