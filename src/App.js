import React, { Component } from 'react';
import Books from './Components/Books';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: []
    }
  }

  //function that retrieves data from the Google Books API with jQuery
  getBooks(){
    $.ajax({
      url:'https://www.googleapis.com/books/v1/volumes?q=harry%20potter',
      dataType: 'json',
      cache: false,
      success: function(data){
        //data is loaded
        this.setState({books: data.items}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr,status,err){
        console.log(err);
      }
    });
  }

//component lifecycles, always called everytime a change is made
  componentWillMount(){
    this.getBooks();
  }

  componentDidMount(){
    this.getBooks();
  }

//renders the main page
  render() {
    //returns Books component
    return (
      <div className="App">
          <Books books={this.state.books}/>
      </div>
    );
  }
}

export default App;
