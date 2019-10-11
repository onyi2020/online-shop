import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/product.css';

export default class Product extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let {imageSrc, productName, productDescription, discount, price} = this.props
        return <div>
            <img src={`${imageSrc}`} alt={`${productName}`} />
            <div>
                <h3 class="product-name">{productName}</h3>
                <h6 class="product-description">{productDescription}</h6>
                <p class="price">{price}</p>
                <p class="discount">{discount}</p>
                <button>View More</button>
            </div>
        </div>
    }
}
