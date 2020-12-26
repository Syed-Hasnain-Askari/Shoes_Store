import React from 'react'
import products from './product.json'
import Navbar from './Navbar';
import './preview.css';
import { useParams } from 'react-router-dom';
export default function Preview() {
    // get Id from the Object.key function 
    const { id } = useParams()
    // Retive Data from Data.Json file base on thier ID
    const data = products[id]
    if (!data) {
        return <h1>Not Found</h1>
    }
    return (
        <div>
            <Navbar/>
           <div className="container">
                <div className="row mx-auto d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="card-body">
                        <img src={data.image} className="card-img-top"/>
                        </div>       
                    </div>
                    <div className="col-md-6">
                        <div className="row mx-auto d-flex justify-content-center">
                        <h1 className="text-light heading mt-3">{data.title}</h1>     
                        <p className="text-light title">Price:${data.price}</p>
                        <p className="text-light">Simple Product</p>
                        <h6 className="text-light">Avalibility:
                        <span className="text-light text-muted"> In Stock</span>
                        </h6> 
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}
