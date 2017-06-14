import React, { Component } from 'react';
import BookItem from './BookItem';

class Books extends Component {
  render() {
    let bookItems;
    //checks if books property is not null
    if(this.props.books){
      // returns an array of data from BookItem component to be hold by bookItems variable
      bookItems = this.props.books.map(book => {
        return(
          <BookItem key={book.id} book={book}/>
        );
      });
    }

      //returns the data from bookItems variable
    return (
      <div className="Books">
      <div className="book-list">{bookItems}</div>
      </div>
    );
  }
}

export default Books;
