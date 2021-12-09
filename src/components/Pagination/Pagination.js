import React, { useState, useEffect, Fragment } from "react";
import ReactPaginate from "react-paginate";
import './stylePagination.css';

const Pagination = ({ pageNumber, info, updatePageNumber }) => {

  /* PageChange = Page + NextPage */
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };
  /* Change Width Range Page Numbers */
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Fragment>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </Fragment>
  );
};

export default Pagination;
