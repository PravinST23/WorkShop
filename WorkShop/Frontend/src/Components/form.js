import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './form.css';


class Orderform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: '',
      bookName: '',
      authorName: '',
      price: '',
      publishedOn: ''
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
}
  
  handleSubmit(event) {
    event.preventDefault();
    const orderData = {
      bookId: parseInt(this.state.bookId),
      bookName: this.state.bookName,
      authorName: this.state.authorName,
      price: this.state.price,
     publishedOn:this.state.publishedOn
    };
    
    console.log(orderData)
    axios.post('http://127.0.0.1:8080/save', orderData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>BOOK</h2>
      <input
      placeholder='BookId'
      type="text"
      name="bookId"
      
      onChange={this.handleChange}
      />
      <input
      placeholder='BookName'
      type="text"
          name="bookName"
          
          onChange={this.handleChange}
          />
          <input
          placeholder='AuthorName'
          type="text"
          name="authorName"
          
          onChange={this.handleChange}
          />
        
        
        
        <input
        placeholder='Price'
        type="text"
        name="price"
        
        onChange={this.handleChange}
        />
        <input
        placeholder='PublishedOn'
          type="text"
          name="publishedOn"
          
          onChange={this.handleChange}
          />
          
          
          <button>
          Submit
          </button>
          <div className='back'>
          <Link to="/table">view table</Link>
          </div>
          </form>
          );
        }
      }
      export default Orderform;