import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Main from "./components/root"
import HandleSearch from "./components/search"


function App() {
  
  const[books ,setBooks]= useState([]);

  
  const [forceRender, setForceRender] = useState(true);

  useEffect(()=>{
    const getSourceData= async()=>{
      await BooksAPI.getAll()
      .then((res)=>{
        setBooks(res);
      })
    }
    getSourceData();
  },[books]);

  const sortBooks =  (book, bookShelf)=>{
    BooksAPI.update(book, bookShelf)
    .then(()=>{
      books.map((i)=> i.id === book.id && (i.shelf = bookShelf));
      setBooks(books);
      setForceRender(!forceRender);
    })
  }
  return (
    <BrowserRouter>
      <div className="app">
          <Routes>
              <Route 
                path="search"
                element={
                  <HandleSearch onChangeShelf={sortBooks} books={books}/>
                }
              />
              <Route 
                path="/"
                element={
                  <Main onChangeShelf={sortBooks} books={books}/>
                }
              />
            </Routes>
       </div>
    </BrowserRouter>
  )
}

export default App;
