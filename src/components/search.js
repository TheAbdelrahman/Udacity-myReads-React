import propTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import SingleBook from "./Books";


const HandleSearch = () => {

  
    const [result, setResult] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    BooksAPI.getAll().then((books) => setResult(books));
  }, []);

  const changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(() => {
      changedBook.shelf = shelf;
      setResult(
        result.filter((book) => book.id !== changedBook.id).concat(changedBook)
      );
    });
  };

  const getBooks = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
    
    if (newSearchQuery) {
      BooksAPI.search(newSearchQuery, 350).then((books) => {
        books.map((book)=> book.shelf="none");
        books.length > 0 ? setResult(books) : setResult([]);
      });
    } else setResult([]);
  };

  return (
    <div className="search-books">
       <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchQuery}
              onChange={(event) => getBooks(event.target.value)}
            />
          </div>
        </div>
            <div className="search-books-results">
              <ol className="books-grid">{result.map((book) =>(
                <SingleBook book={book} onChangeShelf={changeShelf} key={book.id} />
                  ))
                  }
              </ol>
            </div>
      </div>
  );
  
};

HandleSearch.propTypes = {
    onChangeShelf : propTypes.func.isRequired, 
    books : propTypes.array.isRequired
}  

export default HandleSearch;
  
