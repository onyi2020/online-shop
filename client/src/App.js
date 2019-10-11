import React, { Component } from 'react';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Product from './components/product.jsx'
import './App.css';

class App extends Component {
  state = {
    products: []
  };
  
  async componentDidMount() {
    let products = await this.getProducts()
    this.setState({
      products: products['products']
    })
  }
  
  getProducts = async () => {
    const response = await fetch('/api/v1/products');
    const body = response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
  let { products } = this.state
  return (
    <div className="App">
      <Header/>
      {
        products.map((item) => {
          return <Product
            imageSrc={item.imageSrc}
            productName={item.productName}
            productDescription={item.productDescription}
            discount={item.discount}
            price={item.price}
          />
        })
      }
      <Footer/>
    </div>
  );
  }
}

export default App;