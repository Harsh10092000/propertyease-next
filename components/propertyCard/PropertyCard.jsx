"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { IconEye, IconBrandWhatsapp, IconSend } from "@tabler/icons-react";
//import ContactUsForm from "../contactUsForm/ContactUsForm";

//import { Snackbar } from "@mui/material";
import moment from "moment";
import { ShowPrice } from "../HelperComponents";
//import { ShowPrice } from "../HelperComponents";

const PropertyCard = ({ object, index, currentUser }) => {

  const [openContactDialog, setOpenContactDialog] = useState(false);
  const [change, setChange] = useState();
  const handleCloseDialog = (value) => {
    setOpenContactDialog(value);
  };

  const handleContactCountChange = (value) => {
    setChange(value);
  };

  const handleChange = () => {
    setChange(change + 1);
   }

  const [snackDailog, setSnackDailog] = useState(false);
const handleSnackDialog = (value) => {
  console.log(value)
  setSnackDailog(value);
}



const formatString = (str) => str.toLowerCase().replace(/ /g, '-');

  return (
    <div className="list-group">
      {/* <Snackbar
          ContentProps={{
            sx: {
              background: "green",
              color: "white",
            },
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackDailog}
          autoHideDuration={2000}
          onClose={() => handleSnackDialog(false)}
          message="Thank you for showing your interest in this property. Our team will get back to you soon."
        /> */}
      {/* {openContactDialog ? (
        <ContactUsForm
          openContactDialog={openContactDialog}
          handleCloseDialog={handleCloseDialog}
          propertySlug={object.pro_url}
          pro_user_id={object.pro_user_id}
          pro_contacted={object.pro_contacted}
          proId={object.pro_id}
          handleContactCountChange={handleContactCountChange}
          change={change}
          handleSnackDialog={handleSnackDialog}
          handleChange={handleChange}
        />
      ) : (
        ""
      )} */}
      {/* <Snackbar
          ContentProps={{
            sx: {
              background: "green",
              color: "white",
            },
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackDailog}
          autoHideDuration={4000}
          onClose={() => handleSnackDialog(false)}
          message="We Will Contact you soon !.."
        /> */}
      <div className="row">
        <div className="col-md-auto flex-column text-center">
          <div className="buiness-logo">
            <Link href={`/${object.pro_url}`}>
              {object.img_link ? (
                <div>
                  <img
                    src={`${
                      process.env.webURL
                    }/propertyImages/watermark/${object.img_link}`}
                    alt={`Property For ${object.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${object.pro_city ? object.pro_city + ", " + object.pro_state : object.pro_state}`}
                  />
                  <div className="top-left-2">
                    {object.pro_views !== null &&
                      parseInt(object.pro_views) > 0 && (
                        <li className="property-view-count ">
                          <IconEye width={20} height={20} className="icon" />
                          {/* <span className="mobile-hidden pr-1">
                                            Views
                                          </span> */}
                          {object.pro_views}
                        </li>
                      )}
                  </div>
                </div>
              ) : (
                <div>
                  <img src="/images/default.webp" alt={`Property For ${object.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${object.pro_city ? object.pro_city + ", " + object.pro_state : object.pro_state}`} />
                  <div className="top-left-2">
                    {object.pro_views !== null &&
                      parseInt(object.pro_views) > 0 && (
                        <li className="property-view-count ">
                          <IconEye width={20} height={20} className="icon" />
                          {/* <span className="mobile-hidden pr-1">
                                            Views
                                          </span> */}
                          {object.pro_views}
                        </li>
                      )}
                  </div>
                </div>
              )}
            </Link>
          </div>
        </div>

        <div className="col" style={{ minWidth: 0 }}>
          <div className="recent-box-serv">
            <div className="recent-bus-content">
              <div className="property-listing-type">
                <Link href={`/${object.pro_url}`}>
                  <span className="text-wrap text-bold">
                    {object.pro_area_size +
                      " " +
                      object.pro_area_size_unit +
                      " " +
                      object.pro_type.split(",")[0] +
                      " "}
                    for {object.pro_ad_type === "Rent" ? "Rent" : "Sale"} in{" "}
                    <span className="text-capitalize">
                      {object.pro_locality}
                    </span>
                    ,&nbsp;
                    {object.pro_sub_district
                      ? object.pro_sub_district + ", "
                      : ""}
                    {object.pro_city},&nbsp;
                    {object.pro_state}
                  </span>
                </Link>
              </div>
              <ul>
                <li className="text-capitalize">
                  <img
                    src="/img/location.png"
                    className="property-slider-icon"
                  />
                  <strong className="frontPropIcon"></strong>
                  {object.pro_locality},&nbsp;
                  {object.pro_city}
                </li>
                {object.pro_width ? (
                  <li>
                    <img
                      src="/img/meter.png"
                      className="property-slider-icon"
                    />
                    <strong className="frontPropIcon">Dimension&nbsp;</strong>
                    {object.pro_width} Feet * {object.pro_length + " "}
                    Feet
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <img src="/img/rupee.png" className="property-slider-icon" />
                  <strong className="frontPropIcon">
                    {object.pro_amt && "Price"}
                  </strong>
                  &nbsp;
                  {object.pro_amt
                    ? ShowPrice(object.pro_ad_type,object.pro_amt)
                    : "Ask Price"}
                </li>

                <li>
                  <img src="/img/facing.png" className="property-slider-icon" />
                  <strong className="frontPropIcon">Property Facing</strong>
                  &nbsp;{object.pro_facing}
                </li>
              </ul>
              <Link
              title="View More" className="btn-viewmore"
                              href={`/property/${object.pro_type
                                .split(",")[0]
                                .replace(
                                  " ",
                                  "-"
                                )}-${object.pro_ad_type.replace(" ", "-")}_${
                                object.pro_id
                              }`}
                            >
                              {/* <a title="View More" className="btn-viewmore"> */}
                                View More
                              {/* </a> */}
                            </Link>
            </div>
            <div className="pt-3 d-flex justify-content-between align-items-center listing-details-wrapper">
              <div className=" listed pl-md-0 listing-details">
                {object.user_type === "Broker" &&
                object.pro_user_type === "Broker" ? (
                  <Link
                  href={`/agentProfile/${formatString(object.agent_name)}-in-${formatString(object.agent_sub_district)}-${formatString(object.agent_city)}-${formatString(object.agent_state)}-${object.pro_user_id}`}
                    title="Click to View Broker Profile"
                    
                  >
                    Listed by{" "}
                    {currentUser &&
                    object.pro_user_id == currentUser[0].login_id
                      ? "Me "
                      : object.agent_name +
                        " (" +
                        object.pro_user_type +
                        ")" +
                        " "}
                  </Link>
                ) : (
                  "Listed by " +
                  (currentUser && object.pro_user_id == currentUser[0].login_id
                    ? "Me "
                    : object.pro_user_type + " ")
                )}
                <br />
                {/* {DateTime(object.pro_date)} */}
                {moment(object.pro_creation_date).fromNow()}
              </div>

              <div className="d-flex listing-buttons">
                <div className="mr-2 mt-1 ">
                  <Link href={`/${object.pro_url}`} title="View complete details of this property" className=" btn-viewmore">
                    {/* <a
                      title="View complete details of this property"
                      className=" btn-viewmore"
                    > */}
                      View More
                    {/* </a> */}
                  </Link>
                </div>

                {/* <div
                  className={`d-flex flex-column mr-2 ${
                    object.pro_contacted !== null &&
                    object.pro_contacted !== undefined
                      ? "contacted-count contacted-count-pt"
                      : ""
                  }`}
                > */}
                {currentUser && object.pro_user_id == currentUser[0].login_id ? (
                  ""
                ) : (
                  <button
                    className="property-card-interest interest mr-2 "
                    title="Contact Us"
                    onClick={() => setOpenContactDialog(true)}
                  >
                    <span className="">Contact {object.pro_user_type}</span>
                  </button>
                )}
                {/* <span className="contacted-no text-center">
                                        {object.pro_contacted !== null && object.pro_contacted !== undefined
                                          ? "Contacted " +
                                            object.pro_contacted +
                                            " People"
                                          : ""}
                                      </span> */}
                {/* </div> */}

                <div>
                  <a
                    rel="noreferrer nofollow"
                    href={`https://wa.me/918950040151?text=https://www.propertyease.in/${object.pro_url}`}
                    target="_blank"
                    className="conatct-propertywp"
                    title=" Whatsapp/Contact for this property"
                  >
                    <IconBrandWhatsapp />
                    {/* <span className="pl-1">Whatsapp</span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
