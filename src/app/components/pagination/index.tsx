import ReactPaginate from "react-paginate";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}): JSX.Element => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
      forcePage={currentPage - 1}
      containerClassName={
        "pagination flex justify-start shadow-sm border bg-white border-gray-300 w-fit rounded-md p-2"
      }
      activeClassName={"bg-blue-500 text-white"}
      previousLabel={<span className="px-2 text-xs">Sebelumnya</span>}
      nextLabel={<span className="px-2 text-xs">Berikutnya</span>}
      breakClassName={"border-r border-gray-300"}
      breakLinkClassName={"px-2"}
      pageClassName={"border-r border-gray-300"}
      pageLinkClassName={"px-2"}
    />
  );
};

export default Pagination;
