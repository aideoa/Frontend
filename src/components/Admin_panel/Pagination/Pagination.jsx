import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Helper function to render page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Show the first three pages
    for (let i = 1; i <= 3; i++) {
      if (i === currentPage) {
        pageNumbers.push(
          <button
            key={i}
            className="px-3 py-1 rounded-md bg-purple-100 text-purple-800"
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      } else {
        pageNumbers.push(
          <button
            key={i}
            className="px-3 py-1 rounded-md text-purple-800"
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    }

    // Add ellipses if necessary between first three and current page range
    if (currentPage > 4) {
      pageNumbers.push(<span key="start-ellipsis">...</span>);
    }

    // Show the current page if it's between the first three and last three
    if (currentPage > 3 && currentPage < totalPages - 2) {
      pageNumbers.push(
        <button
          key={currentPage}
          className="px-3 py-1 rounded-md bg-purple-100 text-purple-800"
          onClick={() => onPageChange(currentPage)}
        >
          {currentPage}
        </button>
      );
    }

    // Add ellipses if necessary between current page range and last three
    if (currentPage < totalPages - 3) {
      pageNumbers.push(<span key="end-ellipsis">...</span>);
    }

    // Show the last three pages
    for (let i = totalPages - 2; i <= totalPages; i++) {
      if (i >= 4) {
        if (i === currentPage) {
          pageNumbers.push(
            <button
              key={i}
              className="px-3 py-1 rounded-md bg-purple-100 text-purple-800"
              onClick={() => onPageChange(i)}
            >
              {i}
            </button>
          );
        } else {
          pageNumbers.push(
            <button
              key={i}
              className="px-3 py-1 rounded-md text-purple-800"
              onClick={() => onPageChange(i)}
            >
              {i}
            </button>
          );
        }
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-between items-center w-full mt-6 p-6">
      <div className="flex gap-4 justify-between w-full">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-4 py-2 bg-gray-200 rounded-md ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="space-x-2 flex gap-x-1 items-baseline">
        {renderPageNumbers()}
      </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-4 py-2 bg-gray-200 rounded-md ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

     
    </div>
  );
};

export default Pagination;
