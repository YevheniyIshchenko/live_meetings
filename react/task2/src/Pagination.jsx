import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, usersLenght }) => {
  // input : currentPage, itemsPerPage, UsersCounts
  // output ; boolean
  const isShowFirstPageBtn = currentPage > 1;
  const isShowLastPageBtn = currentPage * 3 < usersLenght;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        {isShowFirstPageBtn ? '←' : null}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext}>
        {isShowLastPageBtn ? '→' : null}
      </button>
    </div>
  );
};

export default Pagination;
