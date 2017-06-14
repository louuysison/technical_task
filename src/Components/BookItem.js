import React, { Component } from 'react';

class BookItem extends Component {

/*since there are books that are not for sale and thus their price is
undefined (null data), I made a function to check each book if they
are for sale or not.*/
  getBookPrice(price){
    // if the book is for sale then return its retal price
    if(price === 'FOR_SALE'){
      return(
        <div className="forSale">
          {this.props.book.saleInfo.retailPrice.currencyCode} {this.props.book.saleInfo.retailPrice.amount}
        </div>
      );
    }
    // if the book is not for sale then just return "Not available yet"
    else{
      return(
        <div className="notForSale">
          NOT AVAILABLE YET
        </div>
      );
    }
  }

  render() {
    // returns the data to be displayed: book thumbnail, book title, and retail price
    return (
    <div className="Book">
        <div className="book-thumbnail">
          <img className="img-wrapper" alt="Harry Potter" src={this.props.book.volumeInfo.imageLinks.thumbnail} />
        </div>
        <br />
        <div className="book-title">
          {this.props.book.volumeInfo.title}
          {this.getBookPrice(this.props.book.saleInfo.saleability)}
        </div>
    </div>
    );
  }
}

export default BookItem;
