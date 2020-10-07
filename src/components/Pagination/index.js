import React, { useState } from 'react';
import './styles.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
 const pageNumbers = [];
 const [page, setPage] = useState(1)

 for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  pageNumbers.push(i);
 }

 return (
  <div>
   <ul class="pagination">
    {pageNumbers.map(number => (
     <li key={number} class={`waves-effect`}>
      <a onClick={() => { paginate(number); setPage(number) }} href={`#${number}`}
       className={`white-text ${page === number ? "color" : ""}`}
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