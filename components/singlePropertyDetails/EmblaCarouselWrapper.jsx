"use client"
import React from 'react'
import EmblaCarousel from '../slider/EmblaCarousel'
import { useState } from 'react'
import ImageModal from './ImageModal';
const EmblaCarouselWrapper = ({propertyData, images}) => {
    const [currentImage, setCurrentImage] = useState("");
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
      };
      const handleCurrentImage = (item) => {
        setCurrentImage(item);
      };
  return (
    <>
    <EmblaCarousel
    pro_area_size={propertyData.pro_area_size}
    pro_area_size_unit={propertyData.pro_area_size_unit}
    pro_type={propertyData.pro_type}
    pro_ad_type={propertyData.pro_ad_type}
    pro_city={propertyData.pro_city}
    slides={images}
    open={() => setOpen(true)}
    handleCurrentImage={handleCurrentImage}
    totalViews={propertyData.pro_views}
  />

<ImageModal 
        open={open} 
        handleClose={handleClose} 
        currentImage={currentImage} 
        images={images} 
      />
  </>
  )
}

export default EmblaCarouselWrapper
