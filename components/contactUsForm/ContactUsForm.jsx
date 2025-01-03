"use client"
import React from 'react'
import { useEffect, useState } from "react";
import Link from 'next/link';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Button, InputAdornment, Snackbar } from "@mui/material";
import axios from "axios";
//import Loader from '../loader/Loader';
import { regEx } from '../regEx';


const ContactUsForm = (props) => {
  
    const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(props.openContactDialog);
  const [snack, setSnack] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    propertySlug: "",
    pro_user_id: "",
    pro_contacted: "",
    pro_id: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const handleSnack = () => {
    setSnack(false);
  };


 


  const handleSubmit = async () => {
    setLoader(true);
    data.propertySlug = props.propertySlug;
    data.pro_user_id = props.pro_user_id;
  
    if (props.pro_contacted === null || props.pro_contacted === undefined) {
      data.pro_contacted = 1;
    } else {
      data.pro_contacted = parseInt(props.pro_contacted) + 1;
    }
    data.pro_id = props.proId;
    
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND + "/api/contact/freeEnquiry2",
        data
      );
      setLoader(false);
      props.handleCloseDialog(false);
      props.handleContactCountChange(props.onChange + 1)
      
      props.handleSnackDialog(true);
      setSnack(true);
      props.handleChange();
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
  return (
    <div>
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
          autoHideDuration={2000}
          onClose={handleSnack}
          message="Thank you for showing your interest in this property. Our team will get back to you soon."
        />
       <Dialog open={open} onClose={() => props.handleCloseDialog(false)} role="dialog">
          <DialogTitle className='text-center'>
            <img src="/images/logo.png" />
            <p className="mb-0 call_headline contact-form-heading">
            Please share your contact details
            </p>
          </DialogTitle>
          <DialogContent>
            <TextField
              //autoFocus
              required
              id="name"
              name="name"
              label="Name"
              type="text"
              value={data.name}
              helperText={data.name === "" ? "Required" : " "}
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
              //autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              inputProps={{
                maxLength: 40,
              }}
              helperText={emailError ? "Please enter valid email address" : " "}
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
                //autoFocus
                name="phone"
                helperText={
                  data.phone.length < 10
                    ? "Please enter valid phone number"
                    : " "
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
          
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={() => props.handleCloseDialog(false)}>Cancel</Button> */}
            {/* <Button onClick={() => setData({name: "", phone: "", email: ""})}>Reset</Button>
            <Button type="submit" onClick={handleSubmit} disabled={disabled}>
              Submit
            </Button> */}
            <div className='col-md-6 p-2 pl-4'>
            <button onClick={() => setData({name: "", phone: "", email: ""})} className='btn btn-reset-contact-form'>Reset</button>
            </div>
            <div className='col-md-6 p-2 pr-4'>
            <button onClick={handleSubmit} disabled={disabled} className={`btn ${disabled ? "btn-submit-contact-form-dis" : "btn-submit-contact-form"}`}>Submit</button>
            </div>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default ContactUsForm
