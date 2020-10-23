import React from 'react';
import './styles.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
 const pageNumbers = [];

 for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  pageNumbers.push(i);
 }

 return (
  <div>
   <ul class="pagination">
    {pageNumbers.map(number => (
     <li key={number} class={`waves-effect`}>
      <a onClick={() => { paginate(number) }} href={`#${number}`}
       className={`white-text ${currentPage === number ? "color" : ""}`}
      >
       {number}
      </a>
     </li>
    ))}
   </ul>
  </div>
 );
}

export default Pagination;