"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { ShowPrice } from '../HelperComponents'
import {
    IconSend,
    IconStarFilled,
    IconBrandWhatsapp,
    IconBrandFacebook,
  } from "@tabler/icons-react";
import moment from 'moment';
import Link from 'next/link';

const StickyHeader = ({propertyData, arrproId, slug, agentData, userType}) => {
  //console.log("agentData : ", agentData);

 // const formatString = (str) => str.toLowerCase().replace(/ /g, '-');
 const formatString = (str) => (str ?? "").toLowerCase().replace(/ /g, '-');
    const currentUser = "";
    const [sticky, setSticky] = useState(false);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    useEffect(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div
                       className={sticky ? "top newClass pt-3" : "top"}
                        id="dynamic"
                      >
                        <div
                          className="d-flex flex-column pt-2 pt-md-0 pl-3 pl-md-0 pr-3 pr-md-0"
                          style={{ gap: "0", width: "100%" }}
                        >
                          
                            <h1 className="capitalize pl-md-0 d-flex pt-4 pt-md-0 align-items-center flex-wrap property-heading">
                              {arrproId
                                .slice(0, arrproId.length - 1)
                                .map((item, index) => (
                                  <span className="pro-slug-space" key={index}>
                                    {item[0].toUpperCase() + item.slice(1)}
                                  </span>
                                ))}
                              {/* <span>
                                Residential Plot
                                </span> */}
                              {/* {arrproId[0] +" "+arrproId[1] +" "+arrproId[2] +" "+arrproId[3] +" "+arrproId[4]+" "+arrproId[5]+" "+arrproId[6]+" "+arrproId[7]+" "+arrproId[8]} */}
                              
                                <button
                                  className="shortlist"
                                  title="Shortlist this property"
                                  //onClick={shortlistProperty}
                                >
                                  <IconStarFilled
                                    width={16}
                                    height={16}
                                    className="shortlistIcon"
                                  />
                                </button>
                             
                            </h1>
                          
                        </div>
                       
                          <div className="d-md-flex">
                            <div className=" pl-3 pl-md-0 pb-0 text-capitalize pro-add">
                              {propertyData.pro_locality},&nbsp;
                              {propertyData.pro_sub_district
                                ? propertyData.pro_sub_district + ", "
                                : ""}
                              {propertyData.pro_city},&nbsp;
                              {propertyData.pro_state}
                            </div>
                            <span className="right-border mx-2 mobile-hidden"></span>
                           
                            {console.log(userType)}
                            <div className=" pl-3 pl-md-0 pro-add listing-detail">
                              {
                               userType.length > 0 && userType.agent_type === "Broker" &&
                              propertyData.pro_user_type === "Broker" ? (
                                <Link
                                  href={`/agentProfile/${formatString(
                                    agentData.agent_name
                                  )}-in-${formatString(
                                    agentData.agent_sub_district
                                  )}-${formatString(
                                    agentData.agent_city
                                  )}-${formatString(agentData.agent_state)}-${
                                    propertyData.pro_user_id
                                  }`}
                                  title="Click to View Broker Profile"
                                >
                                  Listed by{" "}
                                  {currentUser &&
                                  propertyData.pro_user_id == currentUser[0].login_id
                                    ? "Me "
                                    : agentData.agent_name +
                                      " (" +
                                      propertyData.pro_user_type +
                                      ")" +
                                      " "}
                                </Link>
                              ) : (
                                "Listed by " +
                                (currentUser &&
                                propertyData.pro_user_id == currentUser[0].login_id
                                  ? "Me "
                                  : propertyData.pro_user_type + " ")
                              )}

                              <div className="listing-detail-date">
                                

                                {moment(propertyData.pro_creation_date).fromNow()}

                    
                              </div>
                            </div>
                          </div>
                      
                       
                        <div className="d-md-flex align-items-center justify-content-between p-1">
                         
                            <div className="d-flex align-items-center justify-content-between pl-md-0 ">
                              <div className="property-price">
                               
                              {propertyData.pro_amt
                                  ? ShowPrice(propertyData.pro_ad_type, propertyData.pro_amt)
                                  : "Ask Price"}
                              </div>
                            </div>
                         
                            <div className="d-flex pl-2 pl-md-0 gap-2 align-items-center">
                            {currentUser &&
                            propertyData.pro_user_id == currentUser[0].login_id ? (
                              ""
                            ) : (
                              <div
                                className={`d-flex flex-column ${
                                  propertyData.pro_contacted !== null &&
                                  propertyData.pro_contacted !== undefined
                                    ? "contacted-count contacted-count-pt"
                                    : ""
                                }`}
                              >
                                <button
                                  className="interest"
                                  title="Contact Us"
                                  //onClick={askQuestion}
                                 // onClick={() => setOpenContactDialog(true)}
                                >
                                  <IconSend width={20} height={20} />
                                  <span className="">
                                    Contact {propertyData.pro_user_type}
                                  </span>
                                </button>

                                <span className="contacted-no text-center">
                                  {propertyData.pro_contacted !== null &&
                                  propertyData.pro_contacted !== undefined
                                    ? "Contacted " +
                                      propertyData.pro_contacted +
                                      " People"
                                    : ""}
                                </span>
                              </div>
                            )}
                          
                            <button className="fb" title="Share On Facebook">
                              <a
                                rel="noreferrer nofollow"
                                href={`https://www.facebook.com/sharer.php?u=https://propertyease.in/${slug}`}
                                target="_blank"
                                className="share-property"
                              >
                                <IconBrandFacebook width={20} height={20} />
                                <span
                                  className="mobile-hidden"
                                  style={{ fontWeight: "bold" }}
                                >
                                  Share
                                </span>
                              </a>
                            </button>
                            <button
                              className="wp pl-0"
                              title="Share On Whatsapp"
                            >
                              <a
                                rel="noreferrer nofollow"
                                href={`https://api.whatsapp.com/send?text=https://propertyease.in/${slug}`}
                                target="_blank"
                                className="share-propertywp"
                              >
                                <IconBrandWhatsapp width={20} height={20} />
                                <span className="mobile-hidden">Share</span>
                              </a>
                            </button>
                            {/* <div>
                            {data.pro_views !== null &&
                                      parseInt(data.pro_views) > 0 && (
                                        <li className="property-view-count ">
                                          <IconEye width={20} height={20} />
                                          <span className="mobile-hidden pr-1" >Views</span> 
                                          {data.pro_views}
                                        </li>
                                      )}
                            </div> */}
                          </div>

                         
                        </div>
                      </div>
  )
}

export default StickyHeader
