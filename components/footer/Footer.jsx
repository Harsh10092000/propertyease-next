// "use client"
// import {

//   IconCurrencyDollar,
//   IconDeviceMobile,
//   IconGlobe,
//   IconHome,
//   IconPhone,
//   IconScale,
//   IconSchool,
//   IconSquareRoundedCheckFilled,
//   IconWorld,
//   IconX
// } from "@tabler/icons-react";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import { TextField, Button, InputAdornment, Snackbar } from "@mui/material";
// import axios from "axios";
// //import Loader from "../loader/Loader";
// //import { regEx } from "../../pages/regEx";
// //import SpeedDialComp from "../speedDail/SpeedDial";
// import "./footer.css";
// import SubscribeUs from "./SubscribeUs";

// const Footer = () => {

//   const [loader, setLoader] = useState(false);
//   const [disabled, setDisabled] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [snack, setSnack] = useState(false);
  
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const handleClickOpen = () => {
//     setOpen(true);
//   };



//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSnack = () => {
//     setSnack(false);
//   };

//   const handleSubmit = async () => {
//     setLoader(true);

//     try {
//       await axios.post(
//         import.meta.env.VITE_BACKEND + "/api/contact/freeEnquiry",
//         data
//       );
//       setLoader(false);
//       handleClose();
//       setSnack(true);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const [emailError, setEmailError] = useState(true);
//   useEffect(() => {
//     if (!regEx[0].emailRegex.test(data.email)) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//   }, [data.email]);

//   useEffect(() => {
//     if (emailError === false && data.name !== "" && data.phone.length > 9) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   }, [data, emailError]);


//   const quickLinks = [
//     { lintto: "/contactus", type: "Contact Us", target: "_self" },
//     { lintto: "/citymap/Kurukshetra", type: "Kurukshetra Maps", target: "_self" },
//     { lintto: "/agentlist", type: "Our Brokers", target: "_self" },
//     { lintto: "/about", type: "About Us", target: "_self" },
//     { lintto: "/DC-Rates-2024-25.pdf", type: "DC Rates 2024-25" ,  target: "_blank" },
//     { lintto: "/termsandconditions", type: "Terms & Conditions", target: "_self" },
//     { lintto: "/privacypolicy", type: "Privacy Policy", target: "_self" },
//     { lintto: "/documentsneededtobuyproperty.pdf", type: "Documents Needed To Buy Property", target: "_blank" },
//     { lintto: "/Balaji-PropertyEase-Brochure.pdf", type: "Propertyease Brochure", target: "_blank" },
//     { lintto: "/disclaimer", type: "Disclaimer", target: "_self" },
    
//   ];


//   const plotsPropertyType = [
//     { lintto: "/residential/apartment", type: "Apartment" },
//     { lintto: "/residential/independent-house", type: "Independent House" },
//     { lintto: "/residential/builder-floor", type: "Builder Floor" },
//     { lintto: "/residential/independent-house", type: "Farm HouseRaw House" },
//     { lintto: "/residential/retirement-community", type: "Retirement Community" },
//     { lintto: "/residential/studio-apartment", type: "Studio Apartment" },

//   ];

//   const landPropertyType = [

//     { lintto: "/land/residential-land", type: "Residential Land" },
//     { lintto: "/land/commercial-land", type: "Commercial Land" },
//     { lintto: "/land/industrial-land", type: "Industrial Land" },
//     { lintto: "/land/agricultural-land", type: "Agricultural Land" },
//     { lintto: "/land/farm-house-land", type: "Farm House Land" },

//   ];

//   const CommercialPropertyType = [
//     { lintto: "/commercial/retail-showroom", type: "Retail Showroom" },
//     { lintto: "/commercial/commercial-building", type: "Commercial Building" },
//     { lintto: "/commercial/office-complex", type: "Office Complex" },
//     { lintto: "/commercial/software-technology-park", type: "Software Technology Park" },
//     { lintto: "/commercial/warehouse", type: "Warehouse" },
//     { lintto: "/commercial/industrial-estate", type: "Industrial Estate" },
//   ];



  

 

  
//   const [subError, setSubError] = useState(false);
 
//   const [loader1, setLoader1] = useState(false);
  



//   return (
//     <>

//     {loader1 && <Loader /> }



//          <Snackbar
//            ContentProps={{
//              sx: {
//                background: "green",
//                color: "white",
//              },
//            }}
//            anchorOrigin={{ vertical: "top", horizontal: "center" }}
//            open={snack}
//            autoHideDuration={1000}
//            onClose={handleSnack}
//            message="We Will Contact you soon !.."
//          />
//     <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>
//             <img src="/images/logo.webp" alt="Looking for your dream property? Contact PropertyEase!" />
//             <p className="font-weight-bold text-danger mb-0 call_headline ">
//               Free Enquiry
//             </p>
//           </DialogTitle>
//           <DialogContent>
//             <TextField
//               autoFocus
//               required
//               id="name"
//               name="name"
//               label="Name"
//               type="text"
//               value={data.name}
//               helperText={data.name === "" ? "Required" : ""}
//               onChange={(e) =>
//                 setData({
//                   ...data,
//                   name: e.target.value.replace(/[^a-zA-Z ]/g, ""),
//                 })
//               }
//               inputProps={{
//                 maxLength: 40,
//               }}
//               fullWidth
//               variant="standard"
//             />
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="email"
//               name="email"
//               label="Email Address"
//               type="email"
//               inputProps={{
//                 maxLength: 40,
//               }}
//               helperText={emailError ? "Please enter valid email address" : ""}
//               value={data.email}
//               onChange={(e) =>
//                 setData({
//                   ...data,
//                   email: e.target.value.replace(/[^a-zA-Z.@0-9/]/g, ""),
//                 })
//               }
//               fullWidth
//                variant="standard"
//              />
//              <div className="mt-3">
//                <TextField
//                  id="mobile"
//                  fullWidth
//                  autoFocus
//                  name="phone"
//                  helperText={
//                    data.phone.length < 10
//                      ? "Please enter valid phone number"
//                      : ""
//                  }
//                  value={data.phone}
//                  inputProps={{
//                    maxLength: 10,
//                  }}
//                  onChange={(e) =>
//                    setData({
//                      ...data,
//                      phone: e.target.value.replace(
//                        regEx[2].phoneNumberValidation,
//                        ""
//                      ),
//                    })
//                  }
//                  margin="dense"
//                  InputProps={{
//                    startAdornment: (
//                      <InputAdornment position="start">+91 </InputAdornment>
//                    ),
//                  }}
//                  variant="standard"
//                />
//              </div>
//              <div className="bg-gray-300 mt-4 py-4">
//                <p className="font-weight-bold text-center">Our Promise</p>
//                <div className="d-flex ">
//                  <div className="col-md-3 text-center ">
//                    <IconSquareRoundedCheckFilled /> <br />
//                    Assured <br /> Privacy
//                  </div>
//                  <div className="col-md-3 text-center ">
//                    <IconSchool className=" text-red" />
//                    <br />
//                    Expert <br /> Consultation
//                  </div>
//                  <div className="col-md-3 text-center">
//                    <IconWorld />
//                    <br />
//                    Free Site Visit
//                  </div>
//                  <div className="col-md-3 text-center">
//                    <IconCurrencyDollar />
//                    <br />
//                    Best <br />
//                    Price
//                  </div>
//                </div>
//              </div>
//            </DialogContent>
//            <DialogActions>
//              <Button onClick={handleClose}>Cancel</Button>
//              <Button type="submit" onClick={handleSubmit} disabled={disabled}>
//                Submit
//              </Button>
//            </DialogActions>
//          </Dialog>
//     <footer id="app_footer">
//       <div className="footer-content">
//         <div className="footer-logo  justify-content-between align-items-center">

//           <img src="https://propertyease.in/images/logo.webp" alt="Propertyease" width="228px" loading="lazy"
//                         height="60px" />
//         </div>
//         <div className="footer-items">
//           <div className="footer-lists">
//             <ul className="footer-lists-container">
//               <li className="footer-list-heading">Quick Links</li>
//               {quickLinks.map((item,index) => (
//                 <li className="footer-list-item" key={index}>
//                 <Link href={item.lintto} target={item.target} >{item.type} </Link>
//               </li>
//               ))}


              
//             </ul>
//             <ul className="footer-lists-container">
//               <li className="footer-list-heading">Residential/Plots</li>

//               {plotsPropertyType.map((item,index) => (
//                 <li className="footer-list-item" key={index}>
//                 <Link href={item.lintto}>{item.type} </Link>
//               </li>
//               ))}

              
             
//             </ul>
//             <ul className="footer-lists-container">
//               <li className="footer-list-heading">Land</li>

//               {landPropertyType.map((item,index) => (
//                 <li className="footer-list-item" key={index}>
//                 <Link href={item.lintto}>{item.type} </Link>
//               </li>
//               ))}
             
//             </ul>
//             <ul className="footer-lists-container">
//               <li className="footer-list-heading">Commercial</li>
//               {CommercialPropertyType.map((item,index) => (
//                 <li className="footer-list-item" key={index}>
//                 <Link href={item.lintto}>{item.type} </Link>
//               </li>
//               ))}
             
//             </ul>
//           </div>
//          <SubscribeUs />
//         </div>
//         <hr />
//         <div className="footer-end">
//           <small>
//             Copyright © 2024 Propertyease - Information. All Rights Reserved | Designed & Developed By CAL info Training & Consultancy Private Limited
//             {/* CAL info Training & Consultancy Private Limited */}
//           </small>
//           <div className="social">
//             <i className="fa-brands fa-instagram"></i>
//             <i className="fa-brands fa-facebook"></i>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//             <div className="fontFoot">Complete Support</div>
//             <ul>
//               <li className="mobile-hide">
//                 <a href="#" title="Get a Call" onClick={handleClickOpen}>
//                   <span className="mr-1">
//                     <IconDeviceMobile className="sidebar-faicon" />
//                   </span>
//                   <span className="mobile-hidden">Get a Call</span>
//                 </a>
//               </li>
//               <li className="mobile-hide">
//                 <a href="#" title="Site Visit" onClick={handleClickOpen}>
//                   <span className="mr-1">
//                     <IconGlobe className="sidebar-faicon" />
//                   </span>
//                   <span className="mobile-hidden">Site Visit</span>
//                 </a>
//               </li>
//               <li className="mobile-hide">
//                 <a href="#" title="Home Loan" onClick={handleClickOpen}>
//                   <span className="mr-1">
//                     <IconHome className="sidebar-faicon" />
//                   </span>
//                   <span className="mobile-hidden">Home Loan</span>
//                 </a>
//               </li>
//               <li className="mobile-hide">
//                 <a href="#" title="Legal Advise" onClick={handleClickOpen}>
//                   <span className="mr-1">
//                     <IconScale className="sidebar-faicon" />
//                   </span>
//                   <span className="mobile-hidden">Legal Advise</span>
//                 </a>
//               </li>

//               <li>
//                 <a href="tel:8950040151" title="Call Now">
//                   <span className="mr-1">
//                     <IconPhone className="sidebar-faicon" />
//                   </span>
//                   <span className="mobile-hidden">+91 89500 40151</span>
//                 </a>
//               </li>
             
             
//             </ul>
//           </div>
//     </footer>
//     {/* <SpeedDialComp /> */}
//     </>
//   )
// }

// export default Footer



"use client"
import {

  IconCurrencyDollar,
  IconDeviceMobile,
  IconGlobe,
  IconHome,
  IconPhone,
  IconScale,
  IconSchool,
  IconSquareRoundedCheckFilled,
  IconWorld,
  IconX
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Button, InputAdornment, Snackbar } from "@mui/material";
import axios from "axios";
//import Loader from "../loader/Loader";
import { regEx } from "../regEx";
import SpeedDialComp from "../speedDail/SpeedDial";
import "./footer.css";

const Footer = () => {

  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseSub = () => {
    setOpen1(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnack = () => {
    setSnack(false);
  };

  const handleSubmit = async () => {
    setLoader(true);

    try {
      await axios.post(
        import.meta.env.VITE_BACKEND + "/api/contact/freeEnquiry",
        data
      );
      setLoader(false);
      handleClose();
      setSnack(true);
    } catch (err) {
      console.log(err);
    }
  };
  const [emailError, setEmailError] = useState(true);
  useEffect(() => {
    if (!regEx[0].emailRegex.test(data.email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [data.email]);

  useEffect(() => {
    if (emailError === false && data.name !== "" && data.phone.length > 9) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [data, emailError]);


  const quickLinks = [
    { lintto: "/contactus", type: "Contact Us", target: "_self" },
    { lintto: "/citymap/Kurukshetra", type: "Kurukshetra Maps", target: "_self" },
    { lintto: "/agentlist", type: "Our Brokers", target: "_self" },
    { lintto: "/about", type: "About Us", target: "_self" },
    { lintto: "/DC-Rates-2024-25.pdf", type: "DC Rates 2024-25" ,  target: "_blank" },
    { lintto: "/termsandconditions", type: "Terms & Conditions", target: "_self" },
    { lintto: "/privacypolicy", type: "Privacy Policy", target: "_self" },
    { lintto: "/documentsneededtobuyproperty.pdf", type: "Documents Needed To Buy Property", target: "_blank" },
    { lintto: "/Balaji-PropertyEase-Brochure.pdf", type: "Propertyease Brochure", target: "_blank" },
    { lintto: "/disclaimer", type: "Disclaimer", target: "_self" },
    
  ];


  const plotsPropertyType = [
    { lintto: "/residential/apartment", type: "Apartment" },
    { lintto: "/residential/independent-house", type: "Independent House" },
    { lintto: "/residential/builder-floor", type: "Builder Floor" },
    { lintto: "/residential/independent-house", type: "Farm HouseRaw House" },
    { lintto: "/residential/retirement-community", type: "Retirement Community" },
    { lintto: "/residential/studio-apartment", type: "Studio Apartment" },

  ];

  const landPropertyType = [

    { lintto: "/land/residential-land", type: "Residential Land" },
    { lintto: "/land/commercial-land", type: "Commercial Land" },
    { lintto: "/land/industrial-land", type: "Industrial Land" },
    { lintto: "/land/agricultural-land", type: "Agricultural Land" },
    { lintto: "/land/farm-house-land", type: "Farm House Land" },

  ];

  const CommercialPropertyType = [
    { lintto: "/commercial/retail-showroom", type: "Retail Showroom" },
    { lintto: "/commercial/commercial-building", type: "Commercial Building" },
    { lintto: "/commercial/office-complex", type: "Office Complex" },
    { lintto: "/commercial/software-technology-park", type: "Software Technology Park" },
    { lintto: "/commercial/warehouse", type: "Warehouse" },
    { lintto: "/commercial/industrial-estate", type: "Industrial Estate" },
  ];



  const [popupData, setPopupData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [subEmailError, setSubEmailError] = useState(true);
  useEffect(() => {
    if (!regEx[0].emailRegex.test(popupData.email)) {
      setSubEmailError(true);
    } else {
      setSubEmailError(false);
    }
  }, [popupData.email]);

  const [dupEntry, setDupEntry] = useState("");
  const [subError, setSubError] = useState(false);
  const handleSubmitSub = async () => {
    setLoader1(true);
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND + "/api/maildigest/addSubscriberData",
        popupData
      );
      setLoader1(false);
      setOpen(false);

      setPopupData({
        name: "",
        email: "",
        phone: "",
      });
      setOpenSubSnack(true);
      handleCloseSub(false);
      //setSnack(true);
    } catch (err) {
      console.log(err);
      err.response.data.code === "ER_DUP_ENTRY"
        ? setDupEntry("Already Subscribed ")
        : setSubError(true);
        setLoader1(false);
    }
  };
  const [openSubSnack, setOpenSubSnack] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [step, setStep] = useState(false);
  const handleStep = () => {
    if (
      popupData.name !== "" &&
      popupData.phone.length > 9 &&
      popupData.phone.length < 11 &&
      subEmailError === false
    ) {
      setStep(false);
      
      handleSubmitSub();
    } else {
      setStep(true);
      
    }
  };



  return (
    <>

    {loader1 && <Loader /> }


    <Dialog
        open={open1}
        onClose={handleCloseSub}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialog-wrapper"
        role="dialog"
      >
           <div className="mail-popup">
          <div className="popup-heading-wrapper d-flex">
            <div>
              <div className="popup-heading">Be the first to know!</div>
              <div className="popup-subheading">
                Subscribers are the first one to hear about new listed
                properties and best deals.
              </div>
            </div>

            <div onClick={handleCloseSub} className="pointer" title="close">
              <IconX />
            </div>
          </div>
          <div className="popup-content-wrapper">
            <div className="popup-content-sec d-flex justify-content-between">
              <div className="mb-3">
                <input
                  className="pf-input-1 "
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) =>
                  {
                    setSubError(false);
                    setPopupData({
                      ...popupData,
                      name: e.target.value.replace(/[^a-zA-Z ]/g, ""),
                    })
                  }
                  }
                />
                <span className="popup-error-msg">
                  {step && popupData.name === "" ? "Required" : ""}
                </span>
              </div>
              <div className="mb-3">
                <input
                  className="pf-input-1 "
                  // type="text"
                  placeholder="Phone"
                  required
                  value={popupData.phone}
                  onChange={(e) =>
                    {
                      setSubError(false);
                    setPopupData({
                      ...popupData,
                      phone: e.target.value.replace(
                        regEx[2].phoneNumberValidation,
                        ""
                      ),
                    })
                  }
                }
                />
                <span className="popup-error-msg">
                  {step && popupData.phone.length !== 10
                    ? "Phone number must be 10 digits."
                    : ""}
                </span>
              </div>
            </div>
            <div className="mb-3">
              <input
                className="pf-input"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => {
                  setDupEntry("");
                  
                    setSubError(false);
                  setPopupData({
                    ...popupData,
                    email: e.target.value.replace(/[^a-zA-Z.@0-9/]/g, ""),
                  })
                }
                }
              />
              <span className="popup-error-msg">
                {step && emailError ? "Please enter valid email address" :dupEntry.length > 1 ? dupEntry : ""}
              </span>
            </div>
            {/* <div className="popup-btn-text">
              Subscribe to recieve the latest news by email about properties.
              Unsubscribe any time.
            </div> */}
            <div>
              <button
                className="pf-submit hover-opacity"
                onClick={handleStep}
                title="Click to Subscribe"
              >
                Submit
              </button>
            </div>
            <div className="popup-botton-text">
              We don't share data with anyone.
            </div>
            <div>{subError && "Please try again after some time."}</div>
          </div>
        </div>
      </Dialog>

      {loader ? <Loader /> : ""}
      
      <Snackbar
        ContentProps={{
          sx: {
            background: "green",
            color: "white",
            textAlign: "center",
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSubSnack}
        autoHideDuration={2000}
        onClose={() => setOpenSubSnack(false)}
        message={
          "Thank You for subscribing us."
        }
      />

         <Snackbar
           ContentProps={{
             sx: {
               background: "green",
               color: "white",
             },
           }}
           anchorOrigin={{ vertical: "top", horizontal: "center" }}
           open={snack}
           autoHideDuration={1000}
           onClose={handleSnack}
           message="We Will Contact you soon !.."
         />
    <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <img src="/images/logo.webp" alt="Looking for your dream property? Contact PropertyEase!" />
            <p className="font-weight-bold text-danger mb-0 call_headline ">
              Free Enquiry
            </p>
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              id="name"
              name="name"
              label="Name"
              type="text"
              value={data.name}
              helperText={data.name === "" ? "Required" : ""}
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value.replace(/[^a-zA-Z ]/g, ""),
                })
              }
              inputProps={{
                maxLength: 40,
              }}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              inputProps={{
                maxLength: 40,
              }}
              helperText={emailError ? "Please enter valid email address" : ""}
              value={data.email}
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value.replace(/[^a-zA-Z.@0-9/]/g, ""),
                })
              }
              fullWidth
               variant="standard"
             />
             <div className="mt-3">
               <TextField
                 id="mobile"
                 fullWidth
                 autoFocus
                 name="phone"
                 helperText={
                   data.phone.length < 10
                     ? "Please enter valid phone number"
                     : ""
                 }
                 value={data.phone}
                 inputProps={{
                   maxLength: 10,
                 }}
                 onChange={(e) =>
                   setData({
                     ...data,
                     phone: e.target.value.replace(
                       regEx[2].phoneNumberValidation,
                       ""
                     ),
                   })
                 }
                 margin="dense"
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">+91 </InputAdornment>
                   ),
                 }}
                 variant="standard"
               />
             </div>
             <div className="bg-gray-300 mt-4 py-4">
               <p className="font-weight-bold text-center">Our Promise</p>
               <div className="d-flex ">
                 <div className="col-md-3 text-center ">
                   <IconSquareRoundedCheckFilled /> <br />
                   Assured <br /> Privacy
                 </div>
                 <div className="col-md-3 text-center ">
                   <IconSchool className=" text-red" />
                   <br />
                   Expert <br /> Consultation
                 </div>
                 <div className="col-md-3 text-center">
                   <IconWorld />
                   <br />
                   Free Site Visit
                 </div>
                 <div className="col-md-3 text-center">
                   <IconCurrencyDollar />
                   <br />
                   Best <br />
                   Price
                 </div>
               </div>
             </div>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose}>Cancel</Button>
             <Button type="submit" onClick={handleSubmit} disabled={disabled}>
               Submit
             </Button>
           </DialogActions>
         </Dialog>
    <footer id="app_footer">
      <div className="footer-content">
        <div className="footer-logo  justify-content-between align-items-center">

          <img src="https://propertyease.in/images/logo.webp" alt="Propertyease" width="228px" loading="lazy"
                        height="60px" />
        </div>
        <div className="footer-items">
          <div className="footer-lists">
            <ul className="footer-lists-container">
              <li className="footer-list-heading">Quick Links</li>
              {quickLinks.map((item, index) => (
                <li className="footer-list-item" key={index}>
                <Link href={item.lintto} target={item.target} >{item.type} </Link>
              </li>
              ))}


              
            </ul>
            <ul className="footer-lists-container">
              <li className="footer-list-heading">Residential/Plots</li>

              {plotsPropertyType.map((item, index) => (
                <li className="footer-list-item" key={index}>
                <Link href={item.lintto}>{item.type} </Link>
              </li>
              ))}

              
             
            </ul>
            <ul className="footer-lists-container">
              <li className="footer-list-heading">Land</li>

              {landPropertyType.map((item, index) => (
                <li className="footer-list-item" key={index}>
                <Link href={item.lintto}>{item.type} </Link>
              </li>
              ))}
             
            </ul>
            <ul className="footer-lists-container">
              <li className="footer-list-heading" >Commercial</li>
              {CommercialPropertyType.map((item, index) => (
                <li className="footer-list-item" key={index}>
                <Link href={item.lintto}>{item.type} </Link>
              </li>
              ))}
             
            </ul>
          </div>
          <div className="footer-inputs">
          <p className="pb-1">Subscribe Us</p>
          <p className="footer-inputs-para">Get the latest news about new properties and price updates.</p>
            <div className="footer-form">
              <input
                type="text"
                name="name"
                id="footer_name_input"
                placeholder="Your name"
                value={popupData.name}
                onChange={(e) => {
                  setSubError(false);
                  setPopupData({
                    ...popupData,
                    name: e.target.value.replace(/[^a-zA-Z ]/g, ""),
                  });
                }}
              />
              <span className="popup-error-msg">
                  {step && popupData.name === "" ? "Required" : ""}
                </span>
              <input
                type="email"
                name="email"
                id="footer_email_input"
                placeholder="Your email"
                value={popupData.email}
                onChange={(e) => {
                  setDupEntry("");
                  setSubError(false);
                  setPopupData({
                    ...popupData,
                    email: e.target.value.replace(/[^a-zA-Z.@0-9/]/g, ""),
                  });
                }}
              />
              <span className="popup-error-msg">
                {step && subEmailError
                  ? "Please enter valid email address"
                  : dupEntry.length > 1
                  ? dupEntry
                  : ""}
              </span>
              <input
                type="tel"
                name="Phone"
                id="footer_phone_input"
                placeholder="Your phone no"
                value={popupData.phone}
                onChange={(e) => {
                  setSubError(false);
                  setPopupData({
                    ...popupData,
                    phone: e.target.value.replace(
                      regEx[2].phoneNumberValidation,
                      ""
                    ),
                  });
                }}
                
              />
              <span className="popup-error-msg">
                  {step && popupData.phone.length !== 10
                    ? "Phone number must be 10 digits."
                    : ""}
                </span>
              <button onClick={handleStep}
                title="Click to Subscribe">
                Subscribe <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-end">
          <small>
            Copyright © 2024 Propertyease - Information. All Rights Reserved | Designed & Developed By CAL info Training & Consultancy Private Limited
            {/* CAL info Training & Consultancy Private Limited */}
          </small>
          <div className="social">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
            <div className="fontFoot">Complete Support</div>
            <ul>
              <li className="mobile-hide">
                <a href="#" title="Get a Call" onClick={handleClickOpen}>
                  <span className="mr-1">
                    <IconDeviceMobile className="sidebar-faicon" />
                  </span>
                  <span className="mobile-hidden">Get a Call</span>
                </a>
              </li>
              <li className="mobile-hide">
                <a href="#" title="Site Visit" onClick={handleClickOpen}>
                  <span className="mr-1">
                    <IconGlobe className="sidebar-faicon" />
                  </span>
                  <span className="mobile-hidden">Site Visit</span>
                </a>
              </li>
              <li className="mobile-hide">
                <a href="#" title="Home Loan" onClick={handleClickOpen}>
                  <span className="mr-1">
                    <IconHome className="sidebar-faicon" />
                  </span>
                  <span className="mobile-hidden">Home Loan</span>
                </a>
              </li>
              <li className="mobile-hide">
                <a href="#" title="Legal Advise" onClick={handleClickOpen}>
                  <span className="mr-1">
                    <IconScale className="sidebar-faicon" />
                  </span>
                  <span className="mobile-hidden">Legal Advise</span>
                </a>
              </li>

              <li>
                <a href="tel:8950040151" title="Call Now">
                  <span className="mr-1">
                    <IconPhone className="sidebar-faicon" />
                  </span>
                  <span className="mobile-hidden">+91 89500 40151</span>
                </a>
              </li>
             
             
            </ul>
          </div>
    </footer>
    <SpeedDialComp />
    </>
  )
}

export default Footer



