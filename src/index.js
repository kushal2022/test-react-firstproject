import React from 'react';
import ReactDom from 'react-dom';

//css file
import './index.css';

//variables in file_task
import { bookList } from './books';
import Book from './Book';
import Header from './header';
import Footer from './footer';

function Booklist() {

  return (
    <div>
      <div className='header'>
        <Header />
      </div>

      <section className='booklist'>
        
        {bookList.map((book) => (
          <Book
            key={book.id}
            {...book}
          />
        ))} 
      </section>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

ReactDom.render(<Booklist />, document.getElementById('root'));