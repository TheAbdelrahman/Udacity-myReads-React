import PropTypes from "prop-types";
import SingleBook from "./Books";
import React from "react";

const SingleShelf = ({shelfTitle, bookslist, onChangeShelf})=>{
    
    
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">  
                    {
                        bookslist.map((book)=>{
                            return <SingleBook
                            book={book}
                            key={book.id}
                            onChangeShelf={onChangeShelf}
                        />

                        })
                    }  
                </ol>
            </div>
        </div>                
)}

SingleShelf.prototype={
    bookslist: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    shelfTitle: PropTypes.string.isRequired,
}


export default SingleShelf;