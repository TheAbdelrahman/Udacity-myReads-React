import propTypes from "prop-types";
import SingleShelf from "./BookShelves"
import {Link} from "react-router-dom";
import React from "react";

const Main = ({books , onChangeShelf})=>{


    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <SingleShelf shelfTitle="Currently Reading" bookslist={books.filter(book=>book.shelf === "currentlyReading")} onChangeShelf={onChangeShelf}/>
                    <SingleShelf shelfTitle="Want to Read" bookslist={books.filter(book=>book.shelf === "wantToRead")} onChangeShelf={onChangeShelf}/>
                    <SingleShelf shelfTitle="Read" bookslist={books.filter(book=>book.shelf === "read")} onChangeShelf={onChangeShelf}/>
                </div>
            </div>
            <div className="open-search">
                <Link to='search'>
                    Add a book
                </Link>
            </div>
        </div>
    )
}

Main.prototype={
    onChangeShelf: propTypes.func.isRequired,
    books: propTypes.array.isRequired,
}


export default Main;