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
import Head from "next/head";
import Link from "next/link";

const PaginationComp = (props) => {
  const router = useRouter();

  const prevPage = props.currentPage > 1 ? `/allproperties?page=${props.currentPage - 1}` : null;
  const nextPage = props.currentPage < props.Pages ? `/allproperties?page=${parseInt(props.currentPage) + 1}` : null;

  return (
    <>
    <Head>
        {prevPage && <link rel="prev" href={prevPage} />}
        {nextPage && <link rel="next" href={nextPage} />}
      </Head>
      {/* <span>
        <Link href={prevPage}>Prev</Link>
      </span> */}
    <Pagination
      count={parseInt(props.Pages)}
      size="large"
      shape="rounded"
      className="col-md-6 mx-auto py-2"
      color="primary"
      page={parseInt(props.currentPage)}
      onChange={(e, value) => router.push(`/allproperties?page=${value}`)}
    />
    {/* <span>
        <Link href={nextPage}>Next</Link>
      </span> */}
    </>
  );
};

export default PaginationComp;
