import React from 'react'
import {Link} from 'react-router-dom';
export default function ProductDesign(props) {
    return (
        <div className="col-sm-6 col-lg-3"> 
        <div className="single-publication" key={props.key}>
          <figure>
            <a href="#">
              <Link to={`/Preview/${props.data}`}><img src={props.image} className="img-fluid" alt="Publication Image" /></Link>
            </a>
            <ul>
              <li><a href="#" title="Add to Favorite"><i className="fa fa-heart" /></a></li>
              <li><a href="#" title="Add to Compare"><i className="fa fa-refresh" /></a></li>
              <li><a href="#" title="Quick View"><i className="fa fa-search" /></a></li>
            </ul>
          </figure>
          <div className="publication-content">
            <span className="category text-light"><h3>{props.title}</h3></span>
            <ul>
              <li><i className="icofont-star" /></li>
              <li><i className="icofont-star" /></li>
              <li><i className="icofont-star" /></li>
              <li><i className="icofont-star" /></li>
              <li><i className="icofont-star" /></li>
            </ul>
            <h4 className="price text-light">${props.price} <span>$299</span></h4>
          </div>
          <div className="add-to-cart">
            <a href="#" className="default-btn">Add to Cart</a>
          </div>
        </div>
      </div>
    )
}
