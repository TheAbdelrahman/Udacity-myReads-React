import propTypes from "prop-types";
import React from "react";


const SingleBook = ({book , onChangeShelf})=>{
    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage:
                             `url("${book.imageLinks?.thumbnail}")`,   
                        }}
                    ></div>
                    <div className="book-shelf-changer" >
                        <select defaultValue={book.shelf} onChange={(e)=> onChangeShelf(book ,e.target.value)}>
                            <option disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(',')}</div>
            </div>
        </li>
    ); 
}

SingleBook.propTypes ={
    book: propTypes.object.isRequired,
    onChangeShelf: propTypes.func.isRequired
}


export default SingleBook;