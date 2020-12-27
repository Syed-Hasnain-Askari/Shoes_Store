import React from 'react'; 
import image from './404_error.webp'
import Navbar from './Navbar';
export default function Error() {
    return (
        <div>
        <Navbar/>
            <div className="row d-flex justify-content-center align-content-center">
                <img src={image} className="error-image img-fluid h-100 w-50"/>
            </div>
        </div>
    )
}
