import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Main from "./components/root"
import HandleSearch from "./components/search"


function App() {
  
  const[books ,setBooks]= useState([]);
  
  useEffect(()=>{
    const getSourceData= async()=>{
      await BooksAPI.getAll()
      .then((res)=>{
        setBooks(res);
      })
    }
    getSourceData();
  },[]);

  const sortBooks = (book, bookShelf)=>{
    BooksAPI.update(book, bookShelf)
    .then(()=>{
      book.shelf = bookShelf;
      setBooks(books.filter((item)=>
      item.id !== book.id).concat(book)
      );
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
