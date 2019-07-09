import React from 'react';
import {Pagination} from 'react-bootstrap';

const PaginationB = ({ postPerPage, totalPosts, paginate, active}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item key={i} active={i === active} onClick={() => paginate(i)}>
              {i}
            </Pagination.Item>,
          );    
    }
    return (
        <Pagination>{pageNumbers}</Pagination>
    )
}

export default PaginationB
