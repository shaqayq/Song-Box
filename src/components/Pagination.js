import React from 'react';
import '../style/pagination.css';

const Pagination = ({ songsPerPage, totalSongs,  currentNumber, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i += 1) {
    pageNumbers.push(i);
  }
 
  return (
    <nav className='paginationBar'>
      <ul className="paginationList">
        {pageNumbers.map((number) => (
            <li key={number} className="page-item">
           {currentNumber === number ? (
            <a onClick={() => paginate(number)} href="#" className="page-link" id='activeLink'>  
            <b>{number}</b>
            </a> ) :
            (
            <a onClick={() => paginate(number)} href="#" className="page-link">  
            {number}
            </a> )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
