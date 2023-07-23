import './loader.css'
import loading from '../../assets/giphy.gif'

const LoaderView = () => { 
    return (
        <>
            <img className='center-screen' src={loading} alt="Loading" />
        </>
    )
}

export default LoaderView;