/* eslint-disable react/prop-types */
import './error-view.css'

const ErrorView = ({ error }) => { 
    return (
        <>
            <div className='error-body'>
                <h3 >{ error.message }</h3>
            </div>
            
        </>
    )
}

export default ErrorView;