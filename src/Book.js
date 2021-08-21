import React from 'react'

const Book = (props) => {
  const { img, title, author } = props;
  
  return (
    <section className="book">
      <img src={img} alt="" />
      <h4 style={{ color: 'grey', fontSize: '20px' }}>{title.toUpperCase()}</h4>
      <h4 style={{ color: 'green' }}>{author}</h4>
    </section>
  );
};

export default Book;
