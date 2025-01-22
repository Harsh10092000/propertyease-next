"use client"
import React from 'react'
import PropertyCard from '../propertyCard/PropertyCard'
import { useState, useEffect } from 'react';
import PaginationComp from './Pagination';
import Link from 'next/link';

const MapProduct = ({data, currentUser, recordsPerPage, currentPage}) => {
    const [results, setResults] = useState("");
    const [sortBy, setSortBy] = useState("Recent Listed");
   
  useEffect(() => {
    setResults(data);
  }, [])
     useEffect(() => {
        //setSortedUsers(data);
        console.log("sortBy : " , sortBy);
        if (sortBy === "Recent Listed") {
            setResults(data.sort((a, b) => b.pro_id - a.pro_id));
        } else if (sortBy === "Most Popular") {
            setResults(data.sort((a, b) => b.pro_views - a.pro_views));
        }
      }, [sortBy]);

      const nPages = Math.ceil(results.total / recordsPerPage);
  
      const firstIndex = (currentPage - 1) * recordsPerPage;
      const lastIndex = currentPage * recordsPerPage;
      const records = results.slice(firstIndex, lastIndex); 
  return (
    <>
    <div>
    <div
                        className={`${
                          sortBy === "Recent Listed" ? "selected" : ""
                        }`}
                        onClick={() => {
                          setSortBy("Recent Listed")
                            
                        }}
                      >
                        Recent Listed
                      </div>
                      <div
                        className={`${
                          sortBy === "Most Popular" ? "selected" : ""
                        }`}
                        onClick={() => {
                          setSortBy("Most Popular")
                            
                            

                        }}
                      >
                        Most Popular
                      </div>
    </div>
      {records?.length > 0 &&
                  records.map((object, index) => (
                    <PropertyCard
                    key={index}
                      // viewerRef= {viewerRef}
                      object={object}
                      index={index}
                      currentUser={currentUser}
                      
                    />
                  ))}

                              {currentPage > 1 &&
                              <Link href={`/allproperties?page=${parseInt(currentPage) - 1}`}>Prev</Link>
                  }
                              <PaginationComp Pages={nPages} currentPage={currentPage} />
                              {currentPage < 16 &&
                              <Link href={`/allproperties?page=${parseInt(currentPage) + 1}`}>Next</Link>
                  }
    </>
  )
}

export default MapProduct
