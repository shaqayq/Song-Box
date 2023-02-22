import React from 'react';

const Pagination = ({ songsPerPage, totalSongs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <h3>Pagination</h3>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
