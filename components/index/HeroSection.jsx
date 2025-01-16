"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect, useState, useRef } from "react";
//import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

const HeroSection = ({propertyTypeOptions, directSearchButtons, propertyAdTypeOptions, proData}) => {
  const router = useRouter();
    const [suggestions, setSuggestions] = useState();
    const [openSuggestions, setOpenSuggestions] = useState(false);
    //const router = useRouter();
      const scrollContainerRef = useRef(null);
    
      const handleScroll = (e) => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += e.deltaY;
        }
      };

      const [searchValue, setSearchValue] = useState("");
      
    
      const [propertyAdTypeFilter, setPropertyAdTypeFilter] =
        useState("All Properties");
      const [openPropertyAdTypeOptions, setOpenPropertyAdTypeOptions] =
        useState(false);
    
      const [propertyTypeFilter, setPropertyTypeFilter] =
        useState("Property Types ");
      const [openPropertyTypeOptions, setOpenPropertyTypeOptions] = useState(false);
    


      useEffect(() => {
        const unique1 = Array.from(
          new Set(proData?.slice(0, 60).map((item) => item.pro_city.trim()))
        );
        const uniqueState = Array.from(
          new Set(proData?.slice(0, 60).map((item) => item.pro_state.trim()))
        );
    
        const unique2 = Array.from(
          new Set(
            proData
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
            proData
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

        const dropdownRef1 = useRef(null);
        const handleClickOutside1 = (event) => {
          if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
            setOpenPropertyTypeOptions(false);
          }
        };
      
        useEffect(() => {
          document.addEventListener("mousedown", handleClickOutside1);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside1);
          };
        }, []);


          const dropdownRef = useRef(null);
          const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setOpenPropertyAdTypeOptions(false);
            }
          };
        
          useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, []);


          const placeholderText = [
            "Search for a property",
            "Sector 7",
            "Kurukshetra",
            "Haryana",
          ];
          const [state, setState] = useState(0);
        
          useEffect(() => {
            setInterval(() => {
              setState((s) => s + 1);
            }, 4000);
          }, []);
        
          const placeholder = placeholderText[state % placeholderText.length];

          // const handleClick = (index) => {
          //   navigate(
          //     `/allproperties?search=${searchValue}&proadtype=${propertyAdTypeFilter}&procat=${propertyTypeFilter}`
          //   );
          // };

          const handleClick = () => {
            const url = `/allproperties?search=${searchValue}&proadtype=${propertyAdTypeFilter}&procat=${propertyTypeFilter}`;
            router.push(url);
          };
        // const handleClick = () => {

        // }
  return (
    <div className="image-cover hero-banner" data-select2-id="13">
          <div className="container" data-select2-id="12">
            <div className="row justify-content-center" data-select2-id="11">
              <div
                className="col-lg-9 col-md-11 col-sm-12 banner-text-wrapper"
                data-select2-id="10"
              >
                <div className="inner-banner-text ">
                  <h1 className={"h1-2"}>
                    Ab Property Bechna Kharidna Hoga Aasan
                  </h1>
                </div>
                <div className="banner-text-2 ">
                  <p className="shadow">Find Real Properties at Best Price</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-search">
            <div className="container hero-search-wrapper">
              <div
                className="d-flex search-options-2"
                ref={scrollContainerRef}
                onWheel={handleScroll}
              >
                {directSearchButtons.map((item, index) => (
                  <div className="inside-search-options-2" key={index}>
                    <Link href={item.link} title={item.title}>
                      <div className="search-option-item-2">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.alt}
                          height="36px"
                          width="45px"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="card-body px-0  pb-0">
                          <h4 className="card-title mb-0 ">{item.heading}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="row">
                <div
                  ref={dropdownRef}
                  style={{ zIndex: 9 }}
                  className={`col-md-2 all-types pointer position-relative ${
                    openPropertyAdTypeOptions ? "arrow-up" : "arrow-down"
                  }`}
                  onClick={() =>
                    setOpenPropertyAdTypeOptions(
                      openPropertyAdTypeOptions ? false : true
                    )
                  }
                >
                  <div className="">{propertyAdTypeFilter}</div>
                  {openPropertyAdTypeOptions && (
                    <div className=" pro-ad-type-list-wrapper">
                      <div id="pro-ad-type-list">
                        {propertyAdTypeOptions.map((item) => (
                          <div
                            className={`${
                              propertyAdTypeFilter === item.type
                                ? "selected"
                                : ""
                            }`}
                            onClick={() => {
                              setPropertyAdTypeFilter(item.type),
                                setOpenPropertyAdTypeOptions(false);
                            }}
                          >
                            {item.type}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div
                  ref={dropdownRef1}
                  className={`col-md-2 all-types pointer position-relative ${
                    openPropertyTypeOptions ? "arrow-up" : "arrow-down"
                  }`}
                  onClick={() =>
                    setOpenPropertyTypeOptions(
                      openPropertyTypeOptions ? false : true
                    )
                  }
                >
                  <div className="">{propertyTypeFilter}</div>
                  {openPropertyTypeOptions && (
                    <div className=" pro-ad-type-list-wrapper">
                      <div id="pro-ad-type-list">
                        {propertyTypeOptions.map((item) => (
                          <div
                            className={`${
                              propertyTypeFilter === item.type ? "selected" : ""
                            }`}
                            onClick={() => {
                              setPropertyTypeFilter(item.type),
                                setOpenPropertyTypeOptions(false);
                            }}
                          >
                            {item.type}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-md d-flex">
                  <input
                    type="text"
                    className="form-control index-search"
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value), setOpenSuggestions(true);
                    }}
                  />
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
                    onClick={handleClick}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HeroSection
