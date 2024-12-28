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


const getData = async (slug) => {
  try {
    
    const db = await pool;
    const q =
      "SELECT * from property_module where pro_id = ?";
    const [rows] = await db.query(q, slug);

    console.log("slug inside fuc : " , slug);
   //const q1 = "SELECT * from property_module_images WHERE img_cnct_id = ?";
  // const [images] = await db.query(q1, proId);
   //const updatedImages = [...images, { img_link: "default.webp" }]

    return { row: rows[0] };
  } catch (err) {
    console.log("err : " , err);
    return err;
  }
};

const getData2 = async (proId) => {
    try {
    const db = await pool;
     const q1 = "SELECT * from property_module_images WHERE img_cnct_id = ?";
     const [images] = await db.query(q1, proId);
     const updatedImages = [...images, { img_link: "default.webp" }]
      return { images: updatedImages };
    } catch (err) {
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
    //const response = await axios.get(`https://localhost:8010/api/pro/fetchPropertyDataById/${slug}`);
    
    //const propertyData = response.propertyData.row;
    //console.log(response.propertyData.row)
    const propertyData = await getData(slug);
    const images = await getData2(proId1);
    console.log(propertyData.row);
    //const { pro_url, pro_id } = propertyData.row;

    return (
      <>
       
       <div className="container">
        <div className="row">
          <div className="col-md-12">
           

            <div>
              <section className="property-view-outer">
                {propertyData.row.pro_listed !== 0 ? (
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
                          propertyData.row.pro_type ? propertyData.row.pro_type.split(",")[1] : ""
                        } Properties`}
                        to={`/listing/${
                          propertyData.row.pro_type ? propertyData.row.pro_type.split(",")[1] : ""
                        }`}
                      >
                        
                        {propertyData.row.pro_type ? propertyData.row.pro_type.split(",")[1] : ""}
                        
                       
                      </Link>
                    </li> */}
                    <li>{propertyData.row.pro_sub_cat}</li>
                  </ul>
                ) : propertyData.row.pro_sale_status === 1 ? (
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
                {propertyData.row !== undefined && propertyData.row.pro_listed !== 0 && (
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
                              {propertyData.row.pro_locality},&nbsp;
                              {propertyData.row.pro_sub_district
                                ? propertyData.row.pro_sub_district + ", "
                                : ""}
                              {propertyData.row.pro_city},&nbsp;
                              {propertyData.row.pro_state}
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
                          <div className="photosection">
                              {images?.length > 1 ? (
                                <EmblaCarousel
                                  pro_area_size={propertyData.row.pro_area_size}
                                  pro_area_size_unit={propertyData.row.pro_area_size_unit}
                                  pro_type={propertyData.row.pro_type}
                                  pro_ad_type={propertyData.row.pro_ad_type}
                                  pro_city={propertyData.row.pro_city}
                                  slides={images}
                                  open={() => setOpen(true)}
                                  handleCurrentImage={handleCurrentImage}
                                  totalViews={propertyData.row.pro_views}
                                />
                              ) : (
                                <div>
                                  <img
                                    src="/images/default.webp"
                                    fetchPriority="high"
                                      decoding="async"
                                      width="489px"
                                      height="410px"
                                    alt={`Property For ${
                                      propertyData.row.pro_ad_type === "Rent"
                                        ? "Rent"
                                        : "Sale"
                                    } in ${
                                      propertyData.row.pro_city
                                        ? propertyData.row.pro_city + ", " + propertyData.row.pro_state
                                        : propertyData.row.pro_state
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
                                    {propertyData.row.pro_views !== null &&
                                      parseInt(propertyData.row.pro_views) > 0 && (
                                        <ul>
                                        <li className="property-view-count ">
                                          <IconEye width={16} height={16} />
                                          Views {propertyData.row.pro_views}
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
                          <div className={"property-side-detail"}>
                            <div style={{ fontSize: "10px" }}>
                              Property ID
                              <span className="propertypage-id">
                                {5000}
                              </span>
                            </div>
                            <div className="property-no-detail">
                              <div className={"property-small-detail"}>
                                {propertyData.row.pro_type ? (
                                  propertyData.row.pro_type.split(",")[1] == "Commercial" ||
                                  propertyData.row.pro_type.split(",")[1] ==
                                    "Residential" ? (
                                    <>
                                      <div className="property-numbers">
                                        <img src="/img/bedroom.webp" height="15px" width="15px" loading="lazy"  alt="" />
                                        <span className="propertyHeading">
                                          Bedroom(s)
                                        </span>
                                        <span className="propertyData">
                                          {propertyData.row.pro_bedroom}
                                        </span>
                                      </div>
                                      <div className="property-numbers">
                                        <img src="/img/shower.webp"  height="15px" width="15px" loading="lazy" alt="" />
                                        <span className="propertyHeading">
                                          Washroom(s)
                                        </span>
                                        <span className="propertyData">
                                          {propertyData.row.pro_washrooms}
                                        </span>
                                      </div>
                                      <div className="property-numbers">
                                        <img src="/img/balcony.webp"  height="15px" width="15px" loading="lazy" alt="" />
                                        <span className="propertyHeading">
                                          Balconies
                                        </span>
                                        <span className="propertyData">
                                          {propertyData.row.pro_balcony}
                                        </span>
                                      </div>
                                      <div className="property-numbers">
                                        <img src="/img/tiles.webp"  height="15px" width="15px" loading="lazy" alt="" />
                                        <span className="propertyHeading">
                                          Floor(s)
                                        </span>
                                        <span className="propertyData">
                                          {propertyData.row.pro_floor}
                                        </span>
                                      </div>
                                    </>
                                  ) : (
                                    ""
                                  )
                                ) : (
                                  ""
                                )}

                                <div className="property-numbers">
                                  <img src="/img/transfer.webp"  height="15px" width="15px" loading="lazy" alt="" />
                                  <span className="propertyHeading">
                                    Side Open(s)
                                  </span>
                                  <span className="propertyData">
                                    {(propertyData.row.pro_open_sides)}
                                  </span>
                                </div>
                                <div className="property-numbers">
                                  <img src="/img/face-detection.webp"  height="15px" width="15px" loading="lazy" alt="" />
                                  <span className="propertyHeading">
                                    Facing
                                  </span>
                                  <span className="propertyData">
                                    {(propertyData.row.pro_facing)}
                                  </span>
                                </div>
                                <div className="property-numbers">
                                  <img src="/img/ownership.webp"  height="15px" width="15px" loading="lazy" alt="" />
                                  <span className="propertyHeading">
                                    Possession Available
                                  </span>
                                  <span className="propertyData">
                                    {(propertyData.row.pro_possession)}
                                  </span>
                                </div>
                                {propertyData.row.pro_type == "Commercial" ||
                                propertyData.row.pro_type == "Residential" ? (
                                  <div className="property-numbers">
                                    <img src="/img/parking.webp" height="15px" width="15px" loading="lazy" alt="" />
                                    <span className="propertyHeading">
                                      Car Parking(s)
                                    </span>
                                    <span className="propertyData">
                                      {(propertyData.row.pro_parking)}
                                    </span>
                                  </div>
                                ) : (
                                  <div className="property-numbers">
                                    <img src="/img/age.webp" height="15px" width="15px" loading="lazy" alt="" />
                                    <span className="propertyHeading">
                                      Property Age
                                    </span>
                                    <span className="propertyData">
                                      {(propertyData.row.pro_age)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className=" mmmm">
                              <div className="large-detials">
                                <img
                                  src="/img/meter.webp"
                                  alt=""
                                  className="desc"
                                  height="15px" width="15px"
                                  loading="lazy"
                                />
                                <span className="propertyHeading">
                                  Plot Size &amp; Dimension
                                </span>
                                <p>
                                  <span className="propertyData">
                                    <span className="measure">
                                      {propertyData.row.pro_width
                                        ? propertyData.row.pro_width +
                                          " Feet * " +
                                          propertyData.row.pro_length +
                                          " Feet"
                                        : "-"}
                                    </span>
                                  </span>
                                </p>
                              </div>
                              <div className="large-detials">
                                <img
                                  src="/img/rent.webp"
                                  alt=""
                                  className="desc"
                                   height="15px" width="15px" loading="lazy"
                                />
                                <span className="propertyHeading">
                                  Already Rent
                                </span>
                                <p>
                                  <span className="propertyData">
                                    {(propertyData.row.pro_rental_status)}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className=" mmmm" id="interest">
                              <div className="large-detials">
                                <img
                                  src="/img/ownership-type.webp"
                                  alt=""
                                  className="desc"
                                   height="15px" width="15px" loading="lazy"
                                />
                                <span className="propertyHeading">
                                  Type Of Ownership
                                </span>
                                <p>
                                  <span className="propertyData">
                                    {(propertyData.row.pro_ownership_type)}
                                  </span>
                                </p>
                              </div>
                              <div className="large-detials">
                                <img
                                  src="/img/rent.webp"
                                  alt=""
                                  className="desc"
                                   height="15px" width="15px" loading="lazy"
                                />
                                <span className="propertyHeading">
                                  Authority Approval
                                </span>
                                <p>
                                  <span className="propertyData">
                                    {(propertyData.row.pro_approval)}
                                  </span>
                                </p>
                              </div>
                            </div>
                            {propertyData.row.pro_type ? (
                              propertyData.row.pro_type.split(",")[1] == "Commercial" ||
                              propertyData.row.pro_type.split(",")[1] == "Residential" ? (
                                <>
                                  <div className=" mmmm">
                                    <div className="large-detials">
                                      <img
                                        src="/img/age.webp"
                                        alt=""
                                        className="desc"
                                         height="15px" width="15px" loading="lazy"
                                      />
                                      <span className="propertyHeading">
                                        Property Age
                                      </span>
                                      <p>
                                        <span className="propertyData">
                                          {(propertyData.row.pro_age)}
                                        </span>
                                      </p>
                                    </div>
                                    <div className="large-detials">
                                      <img
                                        src="/img/furnishing.webp"
                                        alt=""
                                        className="desc"
                                         height="15px" width="15px" loading="lazy"
                                      />
                                      <span className="propertyHeading">
                                        Furnishing
                                      </span>
                                      <p>
                                        <span className="propertyData">
                                          {(propertyData.row.pro_furnishing)}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </>
                              ) : null
                            ) : (
                              ""
                            )}
                            <div></div>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>
                )}

               

                <div className="row">
                  <div className="col-md-12">
                    {propertyData.row !== undefined && propertyData.row.pro_listed !== 0 && (
                      <div className="property-more-detail">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="details">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="more-detail-heading">
                                    More Details
                                  </div>
                                </div>
                              </div>
                              <div className="row moreDetail">
                                <div className="col-md-3 more-detail-right">
                                  Price
                                </div>
                                <div className="col-md-9 more-detail-left">
                                  
Ask Price
                                </div>
                              </div>
                              <div className="row moreDetail">
                                <div className="col-md-3 more-detail-right">
                                  Address
                                </div>
                                <div className="col-md-9 more-detail-left">
                                  {propertyData.row.pro_locality},&nbsp;
                                  {propertyData.row.pro_sub_district
                                    ? propertyData.row.pro_sub_district + ", "
                                    : ""}
                                  {propertyData.row.pro_city},&nbsp;
                                  {propertyData.row.pro_state}
                                </div>
                              </div>
                              <div className="row moreDetail">
                                <div className="col-md-3 more-detail-right">
                                  Facing Road Width
                                </div>
                                <div className="col-md-9 more-detail-left">
                                  {propertyData.row.pro_facing_road_width
                                    ? propertyData.row.pro_facing_road_width +
                                      " " +
                                      propertyData.row.pro_facing_road_unit
                                    : "-"}
                                </div>
                              </div>

                              <div className="row moreDetail">
                                <span className="col-md-3 more-detail-right">
                                  Description &nbsp;
                                </span>
                                <span className="col-md-9 more-detail-left ">
                                  {propertyData.row.pro_desc}
                                </span>
                              </div>

                              {propertyData.row.pro_other_rooms && (
                                <div className="row moreDetail">
                                  <span className="col-md-3 more-detail-right">
                                    Other Rooms &nbsp;
                                  </span>
                                  <span className="col-md-9 more-detail-left ">
                                    {cleanString(propertyData.row.pro_other_rooms)}
                                  </span>
                                </div>
                              )}
                              {propertyData.row.pro_near_by_facilities && (
                                <div className="row moreDetail">
                                  <span className="col-md-3 more-detail-right">
                                    Near By Facilities &nbsp;
                                  </span>
                                  <span className="col-md-9 more-detail-left ">
                                    {cleanString(propertyData.row.pro_near_by_facilities)}
                                  </span>
                                </div>
                              )}
                              {propertyData.row.pro_corner === 'Yes' && (
                                <div className="row moreDetail">
                                  <span className="col-md-3 more-detail-right">
                                    Corner Property &nbsp;
                                  </span>
                                  <span className="col-md-9 more-detail-left ">
                                    {cleanString(propertyData.row.pro_corner)}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                 
                    

                    


                    {propertyData.row !== undefined && propertyData.row.pro_listed !== 0 && (
                      <div className="property-more-detail">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="details">
                              <div className="row">
                                {propertyData.row.pro_type && (
                                  <div className="col-md-12">
                                    <div className="more-detail-heading">
                                      More About this Property
                                    </div>

                                    {/* {propertyData.row.pro_type.split(",")[1] ===
                                  "Residential" ? (
                                    <p>
                                      Its neighborhood is great for a dream
                                      home. Located near the{" "}
                                      {propertyData.row.pro_sub_district
                                        ? propertyData.row.pro_sub_district + ", "
                                        : ""}
                                      {propertyData.row.pro_city}. A lovely backyard was
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
                   
                  
                   
                    <div className="property-more-detail">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="details">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="more-detail-heading">
                                  Disclaimer
                                </div>

                                <p>
                                  All images/information provided in this
                                  listing given by its owner, brokers or
                                  builders may be actual or used
                                  for illustrative purposes only and may not
                                  represent real individuals, places, or events.
                                   In real, images/information about this
                                  property may vary. Kindly verify the physical
                                  possession of the property and its owners and
                                  property documents and cross-check everything
                                  before any transaction. The company is not
                                  responsible for discrepancies found at any
                                  stage. Any resemblance to actual persons or
                                  copyrighted materials is purely coincidental.
                                  Unauthorized use or reproduction of these
                                  images/information is prohibited. If you
                                  believe any image/information violates your
                                  rights, don't hesitate to get in touch with us
                                  for prompt resolution.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
    console.error("Error fetching property propertyData.row:", error);
    return <div>Error loading property propertyData.row</div>;
  }
};

export default PropertyDetail;