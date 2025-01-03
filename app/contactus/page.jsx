"use client"
import React from "react";
import { useState,useEffect } from "react";
//import Loader from "../../components/loader/Loader";
import axios from "axios";
import { InputAdornment, Snackbar } from "@mui/material";
import { regEx } from "@/components/regEx";
import {
  IconGlobe,
  IconMail,
  IconMap,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";
//import Navbar from "../../components/navbar/Navbar";
//import Footer from "../../components/footer/Footer";
import "./contact.css";
import { TextField } from "@mui/material";


const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async () => {
    setLoader(true);
    try {
      await axios.post(
        process.env.webURL + "/api/contact/contactUsData",
        data
      );
      setLoader(false);
      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSnack(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSnack = () => {
    setSnack(false);
  };

  const [snack, setSnack] = useState(false);
  const [step, setStep] = useState(false);
  const handleStep = () => {
    if (
      data.name !== "" &&
      data.phone.length > 9 &&
      emailError === false &&
      data.queryType !== ""
    ) {
      setStep(false);
      handleSubmit();
    } else {
      setStep(true);
    }
  };

  const [loader, setLoader] = useState(false);
  const [emailError, setEmailError] = useState(true);
  useEffect(() => {
    if (!regEx[0].emailRegex.test(data.email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [data.email]);

  return (
    <>
   
      {/* <Navbar /> */}
      {/* {loader ? <Loader /> : ""} */}
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
      <section
        className="ftco-section img bg-hero padding-top"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="wrapper">
                <div className="row no-gutters justify-content-between">
                  <div className="col-lg-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-5">
                      <h3 className="mb-4">Contact us</h3>
                      <div className="dbox w-100 ">
                        <div className="icond d-flex align-items-center justify-content-center bg-primary">
                          <IconMap />
                        </div>
                        <div className="text pl-4">
                          {/* <p>
                            <span>Address:</span> #211 P, Sector 7,
                            Kurukshetra-136118, Haryana-India
                          </p> */}
                          <p>
                            <span>Address:</span> Balaji Properties #1667 Sector 5 Kurukshetra-136118, Haryana-India
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100">
                        <div className="icond d-flex align-items-center justify-content-center bg-primary">
                          <IconPhone />
                        </div>
                        <div className="text pl-4">
                        <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://8950040151">+91 89500 40151</a>
                          </p>
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://9996167778">+91 99961 67778</a>
                          </p>
                          
                        </div>
                        
                      </div>
                      {/* <div className="dbox w-100">
                        <div className="icond d-flex align-items-center justify-content-center bg-primary">
                          <IconMail />
                        </div>
                        <div className="text pl-4">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:sbpb136118@gmail.com">
                              sbpb136118@gmail.com
                            </a>
                          </p>
                        </div>
                      </div> */}
                      <div className="dbox w-100">
                        <div className="icond d-flex align-items-center justify-content-center bg-primary">
                          <IconGlobe />
                        </div>
                        <div className="text pl-4">
                          <p>
                            <span>Website:</span>{" "}
                            <a href="https://propertyease.in">
                              propertyease.in
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>

                        <div className="row gap-3">
                          <div className="col-md-12">
                            <TextField
                              sx={{ width: ["100%"] }}
                              id="outlined-basic"
                              variant="outlined"
                              size="small"
                              label="Name"
                              className="w-full"
                              name="name"
                              value={data.name}

                              FormHelperTextProps={{ sx: { color: "red" } }}
                              helperText={
                                step && data.name === "" ? "Required" : ""
                              }
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  name: e.target.value.replace(
                                    /[^a-zA-Z ]/g,
                                    ""
                                  ),
                                })
                              }
                              inputProps={{
                                maxLength: 40,
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-12">
                            <TextField
                              sx={{ width: ["100%"] }}
                              id="outlined-basic"
                              variant="outlined"
                              size="small"
                              label="Email"
                              className="w-full"
                              name="Email"
                              required
                              type="email"
                              inputProps={{
                                maxLength: 40,
                              }}
                              FormHelperTextProps={{ sx: { color: "red" } }}
                              helperText={
                                step && emailError
                                  ? "Please enter valid email address"
                                  : ""
                              }
                              value={data.email}
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  email: e.target.value.replace(
                                    /[^a-zA-Z.@0-9/]/g,
                                    ""
                                  ),
                                })
                              }
                            />
                          </div>
                          <div className="col-md-12">
                            <TextField
                              sx={{ width: ["100%"] }}
                              id="outlined-basic"
                              variant="outlined"
                              size="small"
                              label="Phone No."
                              className="w-full"
                              name="phone"
                              required
                              inputProps={{ maxLength: 10 }}
                              FormHelperTextProps={{ sx: { color: "red" } }}
                              helperText={
                                step && data.phone.length < 10
                                  ? "Please enter valid phone number"
                                  : ""
                              }
                              value={data.phone}

                              onChange={(e) =>
                                setData({
                                  ...data,
                                  phone: e.target.value.replace(
                                    regEx[2].phoneNumberValidation,
                                    ""
                                  ),
                                })
                              }
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    +91
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                          <div className="col-md-12">
                            <TextField
                              multiline
                              sx={{ width: ["100%"] }}
                              id="outlined-basic"
                              variant="outlined"
                              size="small"
                              label="Message"
                              className="w-full"
                              name="message"
                              InputProps={{
                                rows: 5,
                              }}
                              value={data.message}

                              FormHelperTextProps={{ sx: { color: "red" } }}
                              helperText={
                                step && data.message.length > 500 ? "Message should be smaller than 500 characters" : ""
                              }
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  message: e.target.value.replace(
                                    /[^a-zA-Z . 0-9 ]/g,
                                    ""
                                  ),
                                })
                              }
                              inputProps={{
                                maxLength: 500,
                              }}
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                              onClick={handleStep}
                              title="Click to Submit Form"
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default ContactUs;

// import React from "react";
// import { useState, useEffect } from "react";
// import Loader from "../../components/loader/Loader";
// import axios from "axios";
// import { InputAdornment, Snackbar } from "@mui/material";
// import { regEx } from "../regEx";
// import {
//   IconGlobe,
//   IconMail,
//   IconMap,
//   IconPhone,
//   IconSend,
// } from "@tabler/icons-react";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
// import "./contact.css";
// import { TextField } from "@mui/material";

// const ContactUs = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = async () => {
//     setLoader(true);
//     try {
//       await axios.post(
//         process.env.webURL + "/api/contact/contactUsData",
//         data
//       );
//       setLoader(false);
//       setData({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//       setSnack(true);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleSnack = () => {
//     setSnack(false);
//   };

//   const [snack, setSnack] = useState(false);
//   const [step, setStep] = useState(false);
//   const handleStep = () => {
//     if (
//       data.name !== "" &&
//       data.phone.length > 9 &&
//       emailError === false &&
//       data.queryType !== ""
//     ) {
//       setStep(false);
//       handleSubmit();
//     } else {
//       setStep(true);
//     }
//   };

//   const [loader, setLoader] = useState(false);
//   const [emailError, setEmailError] = useState(true);
//   useEffect(() => {
//     if (!regEx[0].emailRegex.test(data.email)) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//   }, [data.email]);

//   return (
//     <>
//       <Navbar />
//       {loader ? <Loader /> : ""}

//       <div className="container">
//         <div className="row ">
//           <div className="col-lg-12">
//             <div className="info-wrap w-100 p-2 p-md-5">
//               <h3 className="mb-4 d-flex justify-content-center">Contact us</h3>
//               <div className="row">
//                 <div className="dbox w-100 col-lg-6">
//                   <div className="icond d-flex align-items-center justify-content-center bg-primary">
//                     <IconMap />
//                   </div>
//                   <div className="text pl-4">
//                     <p>
//                       <div>Address:</div> 
//                       <div>#1667, Sector 5, Urban Estate,
//                       Kurukshetra-136118, Haryana-India</div>
                      
//                     </p>
//                   </div>
//                 </div>
//                 <div className="dbox w-100 col-lg-6">
//                   <div className="icond d-flex align-items-center justify-content-center bg-primary">
//                     <IconPhone />
//                   </div>
//                   <div className="text pl-4">
//                     <p>
//                       <div>Phone:</div>{" "}
//                       <div><a href="tel://9996167778">+91 99967 16787</a></div>
//                       <div><a href="tel://8950040151">+91 8950040151</a></div>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="row">
//               <div className="dbox w-100 col-lg-6">
//                   <div className="icond d-flex align-items-center justify-content-center bg-primary">
//                     <IconGlobe />
//                   </div>
//                   <div className="text pl-4">
//                     <p>
//                       <div>Website</div>{" "}
//                       <a href="https://propertyease.in">propertyease.in</a>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="dbox w-100 col-lg-6">
//                   <div className="icond d-flex align-items-center justify-content-center bg-primary">
//                     <IconMail />
//                   </div>
//                   <div className="text pl-4">
//                     <p>
//                       <div>Email:</div>{" "}
//                       <a href="mailto:sbpb136118@gmail.com">
//                         sbpb136118@gmail.com
//                       </a>
//                     </p>
//                   </div>
//                 </div>
               
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactUs;
