const Pagination = ({ currentPage, totalPages, paginate, prevPage, nextPage }) => {
  const startPage = Math.max(currentPage - 1, 1);
  const endPage = Math.min(startPage + 2, totalPages);

  return (
    <div className="my-10 flex justify-center items-center ">
      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              className={`py-2 px-3 leading-tight ${
                currentPage === 1
                  ? "text-gray-300 bg-gray-100 border-gray-300 dark:border-gray-700 dark:bg-bgDark dark:text-gray-700"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:bg-bgDark dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              } border border-gray-300 rounded-l`}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <li key={startPage + index}>
              <button
                className={`py-2 px-3 leading-tight ${
                  currentPage === startPage + index
                    ? "text-white bg-violet-500 dark:bg-violet-600"
                    : "text-gray-500 bg-white dark:text-gray-400 dark:bg-bgDark "
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={() => paginate(startPage + index)}
              >
                {startPage + index}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`py-2 px-3 leading-tight ${
                currentPage === totalPages
                  ? "text-gray-300 bg-gray-100 border-gray-300 dark:border-gray-700 dark:bg-bgDark dark:text-gray-700"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:bg-bgDark dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              } border border-gray-300 rounded-r`}
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
