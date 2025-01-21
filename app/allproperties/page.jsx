"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PropertyCard from '@/components/propertyCard/PropertyCard'
import Providers from '../progressBarprovider'
import SearchBar from '@/components/allProperties/SearchBar'
import PaginationComp from '@/components/allProperties/Pagination'

const page = ( {searchParams} ) => {
    const [data , setData] = useState([]);
    //const [nPages , setNPages] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        axios
          .get(process.env.webURL + "/api/pro/fetchPropertyData")
          .then((res) => {
            setData(res.data);
          });
        }, []);

        const currentUser = "";
        //const result = await getData();
        //const records = result.row;
    
    
        //const currentPage = searchParams["page"] || 1;

      //const recordsPerPage = 12;

    //   useEffect(() => {
    //     setNPages( Math.ceil(data.length/ recordsPerPage));
    //     setCurrentPage( searchParams["page"] || 1);
    //   }, [data])

     
      const recordsPerPage = 10;
      const lastIndex = currentPage * recordsPerPage;
      let firstIndex = lastIndex - recordsPerPage;
      const records = data?.slice(firstIndex, lastIndex);
      const nPages = Math.ceil(data?.length / recordsPerPage);
  return (
    <Providers>
    <div>
      <title>Propertyease - View All Properties</title>
      <meta
        name="description"
        content="Discover a diverse range of properties for sale and rent in Kurukshetra, including residential lands, independent houses, commercial buildings, and agricultural lands. Explore your dream property today!"
      />
      <meta name="author" content="Propertyease" />
      <link rel="canonical" href="https://propertyease.in/allproperties" />
      <meta
        name="keywords"
        content={`Top real estate agents near me, Commercial real estate, Residential real estate, haryana, rent house, Property, Propertyease, houses for rent, mls,real estate agent, property for sale,  for sale near me, home, realtor, houses for sale Sale, Rent, Buy, India, Best Property `}
      />

      <div className={"main"}>
        <section className="main-content">
          <div className="container">
            <div className="title">
              <h2>
                All Properties
                <span className="ml-2 numberProperties">{records.length}</span>
              </h2>
            </div>
<SearchBar data={records}/>
            <div className="row">
              <div className="col-md-9">
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
                  
              </div>
              <div className="col-md-3 d-flex flex-column gap-3">
                    {/* <SideBar /> */}
                   
                  </div>
              
            </div>
            {currentPage > 1 &&
            <a href={`/allproperties?page=${parseInt(currentPage) - 1}`}>Prev</a>
}
            <PaginationComp Pages={nPages} currentPage={currentPage} />
            {currentPage < 16 &&
            <a href={`/allproperties?page=${parseInt(currentPage) + 1}`}>Next</a>
}
          </div>
        </section>
      </div>
    </div>
    </Providers>
  )
}

export default page
