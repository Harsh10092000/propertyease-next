"use server"
import RecenetListed from "@/components/index/RecenetListed";
import pool from "../libs/mysql";
import EmblaCarousel from "@/components/slider/EmblaCarousel";
import {
    IconSend,
    //IconShare3,
    IconStarFilled,
    IconBrandWhatsapp,
    IconBrandFacebook,
    //IconX,
    IconEye,
  } from "@tabler/icons-react";
import MoreDetails from "@/components/moreDetails/MoreDetails";
import SinglePropertyDetails from "@/components/singlePropertyDetails/SinglePropertyDetails";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import PopSlider from "@/components/popSlider/PopSlider";
import Map3 from "@/components/googleMap/GoogleMap";

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

   const q2 = `SELECT DISTINCT property_module_images.img_cnct_id , property_module.* , property_module_images.img_link FROM property_module left join property_module_images on property_module.pro_id = property_module_images.img_cnct_id where pro_listed = 1 group by pro_id ORDER BY pro_id DESC LIMIT 6`
   const [latestProperty] = await db.query(q2);

   console.log("latestProperty : " , latestProperty);
    return { row: rows[0], images: updatedImages, latestProperty : latestProperty };
  } catch (err) {
    console.log("err : " , err);
    return err;
  }
};



const PropertyDetail = async ({ params }) => {
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
          {/* <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
      
        <PopSlider
          slides={images}
          handleClose={handleClose}
          currentImage={currentImage}
        />
      </Modal> */}
       <div className="container">
        <div className="row">
          <div className="col-md-12">
           

            <div>
              <section className="property-view-outer">
                {propertyData.pro_listed !== 0 ? (
                  <ul className="coming-field-content">
                    <li>
                      {/* <Link
                        title="Click to View All Properties"
                        to="/allproperties"
                      > */}
                        All Properties
                      {/* </Link> */}

                      <div>
                      All Properties
                      </div>
                    </li>
                    {/* <li>
                      <Link
                        title={`Click to view ${
                          propertyData.pro_type ? propertyData.pro_type.split(",")[1] : ""
                        } Properties`}
                        to={`/listing/${
                          propertyData.pro_type ? propertyData.pro_type.split(",")[1] : ""
                        }`}
                      >
                        
                        {propertyData.pro_type ? propertyData.pro_type.split(",")[1] : ""}
                        
                       
                      </Link>
                    </li> */}
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
                      <div
                        className={"top newClass pt-3" }
                        id="dynamic"
                      >
                        <div
                          className="d-flex flex-column pt-2 pt-md-0 pl-3 pl-md-0 pr-3 pr-md-0"
                          style={{ gap: "0", width: "100%" }}
                        >
                          
                            <h1 className="capitalize pl-md-0 d-flex pt-4 pt-md-0 align-items-center flex-wrap property-heading">
                              {arrproId
                                .slice(0, arrproId.length - 1)
                                .map((item) => (
                                  <span className="pro-slug-space">
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
                          
                          </div>
                      
                       
                        <div className="d-md-flex align-items-center justify-content-between p-1">
                         
                            <div className="d-flex align-items-center justify-content-between pl-md-0 ">
                              <div className="property-price">
                               
                                
                                  Ask Price
                              </div>
                            </div>
                         

                         
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="leftblock">
                          {/* <div className="photosection">
                              {images?.length > 1 ? (
                                <EmblaCarousel
                                  pro_area_size={propertyData.pro_area_size}
                                  pro_area_size_unit={propertyData.pro_area_size_unit}
                                  pro_type={propertyData.pro_type}
                                  pro_ad_type={propertyData.pro_ad_type}
                                  pro_city={propertyData.pro_city}
                                  slides={images}
                                  open={() => setOpen(true)}
                                  //handleCurrentImage={handleCurrentImage}
                                  totalViews={propertyData.pro_views}
                                />
                              ) : ( */}
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
                               {/* )}
                            </div> */}
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
                      <div className="property-more-detail">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="details">
                              <div className="row">
                                {propertyData.pro_type && (
                                  <div className="col-md-12">
                                    <div className="more-detail-heading">
                                      More About this Property
                                    </div>

                                    {/* {propertyData.pro_type.split(",")[1] ===
                                  "Residential" ? (
                                    <p>
                                      Its neighborhood is great for a dream
                                      home. Located near the{" "}
                                      {propertyData.pro_sub_district
                                        ? propertyData.pro_sub_district + ", "
                                        : ""}
                                      {propertyData.pro_city}. A lovely backyard was
                                      recently renovated, with a patio ideal for
                                      entertaining guests. Good schools, parks,
                                      and shops are nearby. Whether you are
                                      moving in tomorrow or today, this house is
                                      ready to be occupied.
                                    </p>
                                  ) 
                            
                                  : (
                                    ""
                                  
                                  )} */}


                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

      </>
    );
  } catch (error) {
    console.error("Error fetching property propertyData:", error);
    return <div>Error loading property propertyData</div>;
  }
};

export default PropertyDetail;

