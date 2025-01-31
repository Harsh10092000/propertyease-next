"use client"
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const SideBar2 = () => {
    const [subData, setSubData] = useState([]);
    const [rentData, setRentData] = useState([]);

    useEffect(() => {
        axios
          .get(process.env.webURL + `/api/pro/fetchPropertySubCatNo`)
          .then((res) => {
            setSubData(res.data);
          });
    
        axios
          .get(process.env.webURL + `/api/pro/rentalPropertyTotal`)
          .then((res) => {
            setRentData(res.data);
          });
      }, []);

  return (
    <>
      <div>
                          <div className="p-1 shadow">
                            <div className="p-3 font-weight-bold text-black">
                              For Sale
                            </div>
                            {subData.map((sub, index) => (
                              <Link
                                href={`/${sub.pro_type
                                  .split(",")[1]
                                  .toLowerCase()}/${sub.pro_type
                                  .split(",")[0]
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`}
                                key={index}
                              >
                                <div className="d-flex justify-content-between px-3 py-2">
                                  <div>{sub.pro_type.split(",")[0]}</div>
                                  <div>({sub.pro_sub_cat_number})</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
        
                        <div>
                          <div className="p-1 shadow">
                            <div className="p-3 font-weight-bold text-black">Rent</div>
                            {rentData.map((rent, index) => (
                              <Link
                                href={`/rental/${rent.pro_type
                                  .split(",")[0]
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`}
                                key={index}
                              >
                                <div className="d-flex justify-content-between px-3 py-2">
                                  <div>{rent.pro_type.split(",")[0]}</div>
                                  <div>({rent.pro_sub_cat_number})</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
    </>
  )
}

export default SideBar2
