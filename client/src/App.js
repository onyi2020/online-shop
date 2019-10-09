import React, { Component } from 'react';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Product from './components/product.jsx'
import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
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
    return (
      <div className="App">
        <Header/>
        <Product
          imageSrc="https://media.gettyimages.com/photos/abstract-network-background-picture-id836272842?s=2048x2048"
          productName="Hair cream"
          productDescription="Hair cream is not the best for you"
          discount="$20"
          price="$2500"
        />
        <Footer/>
      </div>
    );
  }
}

export default App;