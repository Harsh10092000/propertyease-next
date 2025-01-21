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
    const [openSortByOptions, setOpenSortByOptions] = useState(false);
      const [sortBy, setSortBy] = useState("Recent Listed");
      //const [searchParams, setSearchParams] = useSearchParams();
      const [searchValue1, setSearchValue1] = useState("");
      const [openPropertyAdTypeOptions, setOpenPropertyAdTypeOptions] = useState(false);
      const [change, setChange] = useState(1);
      const [searchValue, setSearchValue] = useState("");
      const [suggestions, setSuggestions] = useState();
      const [openSuggestions, setOpenSuggestions] = useState(false);
      const [sortedUsers, setSortedUsers] = useState([]);
    //const [nPages , setNPages] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState("");
    useEffect(() => {
        axios
          .get(process.env.webURL + "/api/pro/fetchPropertyData")
          .then((res) => {
            setData(res.data);
            setResults(res.data);
          });
        }, []);

    useEffect(() => {
      setCurrentPage(searchParams["page"] || 1);
    }, [searchParams]);    

        const currentUser = "";
        //const result = await getData();
        //const records = result.row;
    
    
        //const currentPage = searchParams["page"] || 1;

      //const recordsPerPage = 12;

    //   useEffect(() => {
    //     setNPages( Math.ceil(data.length/ recordsPerPage));
    //     setCurrentPage( searchParams["page"] || 1);
    //   }, [data])

     
      const recordsPerPage = 12;
      const lastIndex = currentPage * recordsPerPage;
      let firstIndex = lastIndex - recordsPerPage;
      const records = results?.slice(firstIndex, lastIndex);
      const nPages = Math.ceil(results?.length / recordsPerPage);


        useEffect(() => {
          setSortedUsers(data);
          if (sortBy === "Recent Listed") {
            sortedUsers.sort((a, b) => b.pro_id - a.pro_id);
          } else if (sortBy === "Most Popular") {
            sortedUsers.sort((a, b) => b.pro_views - a.pro_views);
          }
        }, [data, sortBy]);
        
      
        const handleSearch = ({data}) => {
            setOpenSuggestions(false);
            let searchWords = searchValue?.toLowerCase().split(",");
            setSearchValue1(searchValue);
        
            const filteredData = (data && data.length > 0 ? data : sortedUsers).filter(
              (item) => {
                const itemValues =
                  item.pro_locality +
                  " " +
                  item.pro_city +
                  " " +
                  item.pro_sub_district +
                  " " +
                  item.pro_street +
                  " " +
                  item.pro_state;
        
                return searchWords.every((word) =>
                  itemValues.toLowerCase().includes(word)
                );
              }
            );
        
            setResults(filteredData);
            setCurrentPage(1);
          };
      
            useEffect(() => {
              const unique1 = Array.from(
                new Set(data?.slice(0, 60).map((item) => item.pro_city.trim()))
              );
              const uniqueState = Array.from(
                new Set(data?.slice(0, 60).map((item) => item.pro_state.trim()))
              );
          
              const unique2 = Array.from(
                new Set(
                  data
                    ?.slice(0, 60)
                    .map(
                      (item) =>
                        (item.pro_sub_district
                          ? item.pro_sub_district.trim() + ", "
                          : "") + item.pro_city.trim()
                    )
                )
              );
              const unique3 = Array.from(
                new Set(
                  data
                    ?.slice(0, 60)
                    .map(
                      (item) =>
                        (item.pro_locality ? item.pro_locality.trim() + ", " : "") +
                        (item.pro_sub_district
                          ? item.pro_sub_district.trim() + ", "
                          : "") +
                        item.pro_city.trim()
                    )
                )
              );
          
              const arr = [
                ...unique1,
                ...uniqueState,
                ...unique2,
                ...unique3,
                searchValue,
              ];
          
              const unique4 = Array.from(
                new Set(arr.slice(0, 200).map((item) => item.trim()))
              );
              const unique = unique4.filter((i) =>
                i.toLowerCase().startsWith(searchValue.toLowerCase())
              );
          
              if (searchValue === "") {
                setOpenSuggestions(false);
              }
          
              setSuggestions(unique);
            }, [searchValue]);

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
{/* <SearchBar data={records}/> */}
<div className="row hero-search-all-pro">
                <div
                  className={`col-md-3 sort-by pointer position-relative ${
                    openPropertyAdTypeOptions ? "arrow-up" : "arrow-down"
                  }`}
                  onClick={() => setOpenSortByOptions(!openSortByOptions)}
                >
                  <div className="sort-by-value">{sortBy}</div>
                  {openSortByOptions && (
                    <div className="sort-by-menu">
                      <div
                        className={`${
                          sortBy === "Recent Listed" ? "selected" : ""
                        }`}
                        onClick={() => {
                          setSortBy("Recent Listed"),
                            setOpenSortByOptions(false);
                            //router.push(`/allproperties?page=Recent Listed`)
                        }}
                      >
                        Recent Listed
                      </div>
                      <div
                        className={`${
                          sortBy === "Most Popular" ? "selected" : ""
                        }`}
                        onClick={() => {
                          setSortBy("Most Popular"),
                            setOpenSortByOptions(false);
                            //router.push(`/allproperties?page=Most Popular`)

                        }}
                      >
                        Most Popular
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-md-7">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a property"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value), setOpenSuggestions(true);
                    }}
                  />

                  {/* <div class="location-icon">
                    <IconAdjustmentsHorizontal />
                  </div> */}
                  {openSuggestions && (
                    <div className=" search-suggestions-2 pt-2 shadow pb-2">
                      {suggestions.map((item, index) => (
                        <div
                        key={index}
                          className="py-2 pl-2 suggesion-item-2 pointer"
                          onClick={() => {
                            setSearchValue(item), setOpenSuggestions(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-md-2">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 "
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>


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
