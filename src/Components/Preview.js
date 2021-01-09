import React from 'react'
import products from './product.json'
import Navbar from './Navbar';
import './preview.css';
import Error from './Error'
import { useParams } from 'react-router-dom';
export default function Preview() {
    // get Id from the Object.key function 
    const {id}  = useParams()
    // Retive Data from Data.Json file base on thier ID
    const data = products[id]
    if (!data) {
        return <Error/>
    }
    return (
        <div>
            <Navbar/>
           <div className="container">
                <div className="row mx-auto d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card-body">
                        <img src={data.image} className="card-img-top"/>
                        </div>       
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="row d-flex justify-content-center">
                        <h1 className="text-light heading mt-3">{data.title}</h1>
                        <h5 className="text-light title">Price:${data.price}</h5>
                        <p className="text-light">Sample Product</p>
                        <label className="text-light form-label">Avalibility:
                        <span className="text-light text-muted"> In Stock</span>
                        </label> 
                        <label className="text-light form-label">Quantity</label>
                        <input type="text" className="form-control cart-plus-minus" defaultValue="1"></input>
                       <button className="add-to-cart mt-3">Add to Cart</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}
