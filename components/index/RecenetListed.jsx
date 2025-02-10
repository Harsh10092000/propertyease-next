"use client"
import React from 'react'
//import AllPropertyButton from '../propertyCard2/AllPropertyButton'
//import PropertyCard2 from '../propertyCard2/PropertyCard2'
//import RecentListHeader from '../propertyCard2/RecentListHeader'

import dynamic from "next/dynamic";
const AllPropertyButton = dynamic(() => import('../propertyCard2/AllPropertyButton'), { ssr: false });
const PropertyCard2 = dynamic(() => import('../propertyCard2/PropertyCard2'), { ssr: false });
const RecentListHeader = dynamic(() => import('../propertyCard2/RecentListHeader'), { ssr: false });

import { useState } from 'react'
const RecenetListed = ({data}) => {
    const currentUser = ""
    console.log(data);
    const [currentFilter, setCurrentFilter] = useState("All");
    const filteredData = data?.filter((code) => {
        if (currentFilter === "For Sale") {
          return code.pro_ad_type === "Sale";
        } else if (currentFilter === "For Rent") {
          return code.pro_ad_type === "Rent";
        } else if (currentFilter === "Independent House") {
          return code.pro_type.split(",")[0] === "Independent House";
        } else if (currentFilter === "Residential Land") {
          return code.pro_type.split(",")[0] === "Residential Land";
        } else if (currentFilter === "Agricultural Land") {
          return code.pro_type.split(",")[0] === "Agricultural Land";
        } else if (currentFilter === "All") {
          return true;
        }
      });

     

      const latest_pro_btns = [
        {
          name: "All",
        },
        {
          name: "For Sale",
        },
        {
          name: "For Rent",
        },
        {
          name: "Independent House",
        },
        {
          name: "Residential Land",
        },
        {
          name: "Agricultural Land",
        },
      ];
  return (
    <section className="most-view-Property mt-5 mb-5">
    <div className="container">
      <RecentListHeader />
      <div className="latest-pro-filter-wrapper">
        {latest_pro_btns.map((item,index) => (
          <button 
          key={index}
            className={`btn ${
              currentFilter === item.name ? "active" : "latest-pro-filter"
            }`}
            onClick={() => setCurrentFilter(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="row ">
          {filteredData?.slice(0, 6).map((item, index) => (
            <PropertyCard2
              item={item}
              currentUser={currentUser}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>

      <AllPropertyButton />
    </div>
  </section>
  )
}

export default RecenetListed
