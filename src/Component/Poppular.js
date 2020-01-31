import React, { Component } from 'react'
import { CardGroup,Card, Col, Row,CardBody, CardTitle, CardSubtitle,CardText,Button,CardImg, Container } from 'reactstrap'

import  food from './assets/food.png';
import wine from './assets/wine.png';
import cake from './assets/cupcake.png';
import fries from './assets/fries.png';

import './popular.css';

export default class  extends Component {
    render() {
        return (
           <div className="container">
             <p>Today hot Deals</p>
           
           <Row>
             <div className="Col-md-4" id="product">
               <figure className="card card-product">
                 <div className="image_wrap">
                   <img src={food}/>
                 </div>
                 <figcaption class="info-wrap">
                 <h4 class="title">Another name of item</h4>
                 </figcaption>
               </figure>
             </div>
             <div className="Col-md-4" id="product">
               <figure className="card card-product">
                 <div className="image_wrap">
                   <img src={food}/>
                 </div>
                 <figcaption class="info-wrap">
                 <h4 class="title">Another name of item</h4>
                 </figcaption>
               </figure>
             </div>
             <div className="Col-md-4" id="product">
               <figure className="card card-product">
                 <div className="image_wrap">
                   <img src={food}/>
                 </div>
                 <figcaption class="info-wrap">
                 <h4 class="title">Another name of item</h4>
                 </figcaption>
               </figure>
             </div>
             <div className="Col-md-4" id="product">
               <figure className="card card-product">
                 <div className="image_wrap">
                   <img src={food}/>
                 </div>
                 <figcaption class="info-wrap">
                 <h4 class="title">Another name of item</h4>
                 </figcaption>
               </figure>
             </div>
           </Row>
           <hr></hr>
                
            </div>
          
          
           
        )
    }
}
