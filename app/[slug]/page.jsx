"use server"
import RecenetListed from "@/components/index/RecenetListed";
import pool from "../libs/mysql";

import {
    IconEye,
    IconChevronRight,
  } from "@tabler/icons-react";
import MoreDetails from "@/components/moreDetails/MoreDetails";
import SinglePropertyDetails from "@/components/singlePropertyDetails/SinglePropertyDetails";
import Disclaimer from "@/components/disclaimer/Disclaimer";

import Map3 from "@/components/googleMap/GoogleMap";

import EmblaCarouselWrapper from "@/components/singlePropertyDetails/EmblaCarouselWrapper";
import Link from "next/link";
import { ShowPrice } from "@/components/HelperComponents";
import DynmaicDesc from "@/components/singlePropertyDetails/DynmaicDesc";
import StickyHeader from "@/components/singlePropertyDetails/StickyHeader";

export async function generateMetadata({ params }, parent) {
  const { slug } = params;
  if (!slug) {
    return <div>Invalid Property ID</div>;
  }

  const arrproId = slug.split("-");
  const capitalizedName1 = arrproId
  .slice(0, arrproId.length - 1)
  .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
  .join(' ');

  return {
    title: capitalizedName1,
    description: "Default description for the page.",
    openGraph: {
      title: capitalizedName1,
      description:"Description for the Open Graph",
    },
    
  };
}


const getData = async (slug, proId) => {
  try {
    
    const db = await pool;
    const q =
      "SELECT * from property_module where pro_id = ?";
    const [rows] = await db.query(q, proId);

  
   const q1 = "SELECT * from property_module_images WHERE img_cnct_id = ?";
   const [images] = await db.query(q1, proId);
   const updatedImages = [...images, { img_link: "default.webp" }]

   const q2 = `SELECT DISTINCT property_module_images.* , property_module.* , agent_data.agent_type as user_type, agent_data.agent_name , agent_data.agent_sub_district, agent_data.agent_city, agent_data.agent_state FROM property_module left join property_module_images on 
    property_module.pro_id = property_module_images.img_cnct_id left join (SELECT agent_type,user_cnct_id,agent_name ,agent_sub_district, agent_city, agent_state FROM agent_module) as agent_data on 
    property_module.pro_user_id = agent_data.user_cnct_id where pro_listed = 1 group by pro_id ORDER BY pro_id DESC`
   const [latestProperty] = await db.query(q2);

   console.log("latestProperty : " , latestProperty);
    return { row: rows[0], images: updatedImages, latestProperty : latestProperty };
  } catch (err) {
    console.log("err : " , err);
    return err;
  }
};



const PropertyDetail = async ({ params }) => {
  const currentUser  = "";
  const { slug } = params;
  if (!slug) {
    return <div>Invalid Property ID</div>;
  }
  console.log("slug : " , slug);
  const arrproId = slug.split("-");
  const proId1 = arrproId[arrproId.length - 1];


  
  try {
    const { row : propertyData, images, latestProperty: latestProperty } = await getData(slug, proId1);
    console.log(images, propertyData);

    return (
      <>
        
      <div>
       <div className="container">
        <div className="row">
          <div className="col-md-12">
           

            <div>
              <section className="property-view-outer">
                {propertyData.pro_listed !== 0 ? (
                  <ul className="coming-field-content">
                    <li>
                       <Link
                        title="Click to View All Properties"
                        href="/allproperties"
                      > 
                        All Properties
                        <span>
                          <IconChevronRight className="sidebar-faicon" />
                        </span>
                       </Link> 

                      
                    </li>
                    <li>
                      <Link
                        title={`Click to view ${
                          propertyData.pro_type ? propertyData.pro_type.split(",")[1] : ""
                        } Properties`}
                        href={`/listing/${
                          propertyData.pro_type ? propertyData.pro_type.split(",")[1] : ""
                        }`}
                      >
                        
                        {propertyData.pro_type ? propertyData.pro_type.split(",")[1] : ""}
                        
                       
                      </Link>
                    </li>
                    <li>{propertyData.pro_sub_cat}</li>
                  </ul>
                ) : propertyData.pro_sale_status === 1 ? (
                  <div class="no-longer-available">
                    <h1>This property has been sold.</h1>
                    <p>Check out our other listings.</p>
                  </div>
                ) : (
                  <div class="no-longer-available">
                    <h1>This property is no longer available.</h1>
                    <p>We apologize for any inconvenience this may cause.</p>
                  </div>
                )}
                {propertyData !== undefined && propertyData.pro_listed !== 0 && (
                  <div className="property-view-inner">
                    <div className="row">
                     <StickyHeader propertyData={propertyData} arrproId={arrproId} slug={slug} />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="leftblock">
                          <div className="photosection">
                              {images?.length > 1 ? (
                               
                                <EmblaCarouselWrapper propertyData={propertyData} images={images} />
                              ) : (
                                <div>
                                  <img
                                    src="/images/default.webp"
                                    fetchPriority="high"
                                      decoding="async"
                                      width="489px"
                                      height="410px"
                                    alt={`Property For ${
                                      propertyData.pro_ad_type === "Rent"
                                        ? "Rent"
                                        : "Sale"
                                    } in ${
                                      propertyData.pro_city
                                        ? propertyData.pro_city + ", " + propertyData.pro_state
                                        : propertyData.pro_state
                                    }`}
                                    //alt="No Image"
                                    // alt={
                                    //   data.pro_area_size +
                                    //   " " +
                                    //   data.pro_area_size_unit +
                                    //   " " +
                                    //   data.pro_type && data.pro_type.split(",")[0] +
                                    //   " For" +
                                    //   " " +
                                    //   data.pro_ad_type +
                                    //   " in " +
                                    //   data.pro_city
                                    // }
                                    
                                    className="img-fluid"
                                  />
                                  {/* <marquee
                                    width="100%"
                                    direction="right"
                                    height="28px"
                                    className="scrolling-text"
                                  >
                                    This property has been sold out.
                                  </marquee> */}
                                  <div className="top-left-2">
                                    {propertyData.pro_views !== null &&
                                      parseInt(propertyData.pro_views) > 0 && (
                                        <ul>
                                        <li className="property-view-count ">
                                          <IconEye width={16} height={16} />
                                          Views {propertyData.pro_views}
                                        </li>
                                        </ul>
                                      )}
                                  </div>
                                </div>
                               )}
                            </div> 
                          </div>
                        </div>
                        <div className="col-md-6">
                          <SinglePropertyDetails propertyData={propertyData} />
                        </div>
                      </div>



                    </div>
                  </div>
                )}

               

                <div className="row">
                  <div className="col-md-12">
                    {propertyData !== undefined && propertyData.pro_listed !== 0 && (
                      <MoreDetails propertyData={propertyData} />
                    )}
                 
                 {propertyData !== undefined && propertyData.pro_listed !== 0 && (
                      <div className="property-more-detail">
                        <div className="row">
                          <div className="col-md-12">

                 <Map3 data={propertyData} />
                 </div>
                        </div>
                      </div>
                    )}

                    {propertyData !== undefined && propertyData.pro_listed !== 0 && (
                      <DynmaicDesc data={propertyData} />
                    )}
                   
                   <RecenetListed data={latestProperty} />
                  
                   
                    <Disclaimer />
                  </div>
                </div>
              </section>
            </div>

            
          </div>
        </div>
      </div>
      </div>

      </>
    );
  } catch (error) {
    console.error("Error fetching property propertyData:", error);
    return <div>Error loading property propertyData</div>;
  }
};

export default PropertyDetail;

