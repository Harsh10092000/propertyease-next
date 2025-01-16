// "use client"
// import { Pagination } from "@mui/material";
// import React, { useState } from 'react'

// const PaginationComp = ({nPages}) => {
//     const [currentPage, setCurrentPage] = useState(1);
//   return (
//     <div>
//       <Pagination
//                 count={nPages}
//                 color="primary"
//                 siblingCount={1}
//                 //page={currentPage} 
//                 shape="rounded"
//                 onChange={(e, value) => setCurrentPage(value)}
//                 className="col-md-6 mx-auto py-2"
//             />
//     </div>
//   )
// }

// export default PaginationComp





"use client";
import { useRouter } from "next/navigation";
import { Pagination } from "@mui/material";

const PaginationComp = (props) => {
  const router = useRouter();
  return (
    <Pagination
      count={parseInt(props.Pages)}
      size="large"
      shape="rounded"
      className="col-md-6 mx-auto py-2"
      color="primary"
      page={parseInt(props.currentPage)}
      onChange={(e, value) => router.push(`/allproperties?page=${value}`)}
    />
  );
};

export default PaginationComp;
