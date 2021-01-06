import React from 'react';
import './product.css';
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './img3.jpg';
import shoes from './all-shoes.jpg';
import products from './product.json';
import Navbar from './Navbar';
import ProductDesign from './ProductDesign';
export default function Products(){
  return(
    <div>
          <Navbar/>
          <section className="slider">
            <img src={image1} className="d-block w-100 h-50"/>
        </section>
        <section className="container">
        <div className="row">
            <div className="col-md-5 mt-5">
                <img src={shoes} className="img-fluid"></img>
            </div>
            <div className="col-md-7">
                <p className="text-light mt-5 fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis turpis, hendrerit interdum sodales sit amet, rutrum ac neque. Praesent interdum, eros sit amet egestas dictum, ipsum odio dapibus tortor, at viverra risus enim eget erat. Phasellus cursus massa in neque ultrices, feugiat iaculis lectus lobortis.

            Mauris vitae libero vitae ipsum malesuada facilisis. Suspendisse convallis massa purus, ut fermentum dolor dignissim sit amet. Ut convallis placerat diam a elementum. Nunc sed mauris odio. Nam auctor lorem at ante hendrerit lacinia. Quisque fringilla hendrerit arcu, id rutrum magna tempus at. Quisque blandit ante neque, sit amet lacinia metus tincidunt non. Duis vitae orci purus. Aliquam placerat scelerisque sagittis. Pellentesque euismod luctus fringilla.</p>
            </div>
        </div>
    </section>
          <section className="our-publication pt-100 pb-70">
        <div className="container">
          <div className="section-header">
            <i className="fa fa-book" />
            <h2 className="text-light">Our Products</h2>
            <p className="fs-6 text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
          {Object.keys(products).map((item,index)=>(
            <ProductDesign
            data={item}
            key={index}
            id={products[item].id}
            image={products[item].image}
            title={products[item].title}
            price={products[item].price}
            />
          ))}
          </div>
        </div>
      </section>
        </div>
  )
}

