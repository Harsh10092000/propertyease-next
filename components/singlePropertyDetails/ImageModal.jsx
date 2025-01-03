"use client"
import React from 'react'
import PopSlider from '../popSlider/PopSlider'
import Modal from "@mui/material/Modal";
const ImageModal = ({ open, handleClose, currentImage, images }) => {
   
  return (
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
      
        <PopSlider
          slides={images}
          handleClose={handleClose}
          currentImage={currentImage}
        />
      </Modal>
  )
}

export default ImageModal
