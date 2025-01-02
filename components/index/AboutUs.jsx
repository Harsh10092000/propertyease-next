import React from 'react'

const AboutUs = () => {
  return (
    <div className="container about-us-wrapper-1">
    <div className="section-title text-left">
      <h3 className="aboutus">
        About Us
        <div className="heading-divider "></div>
      </h3>
      <p>
        Founded in 2023, Propertyease.in aims to make buying and selling
        property easy and stress-free. We connect buyers and sellers
        directly and provide helpful tools, detailed listings, and
        valuable information to support smart decisions. That is why we
        are the best property dealer in town. Our platform is designed for
        transparency and efficiency, ensuring a smooth and reliable
        experience. Whether you're buying your dream home or selling a
        property, Propertyease.in simplifies the process for you.
      </p>
    </div>

    <div className="row about-us-sec">
      <div className="col-md-6 about-us-left about-us-left-1">
        <div className="about-us-img-wrap about-img-left">
          <img
            // src="images/pro-about-6.webp"
            // srcSet="images/pro-about-resized-6.webp"
            src="images/pro-about-resized-6.webp"
            className=""
            alt="Buy a new home"
            loading="lazy"
            width="526px"
            height="420px"
            fetchPriority="low"
          />
        </div>
      </div>

      <div className="col-lg-6 align-self-center about-us-right">
        <div className="about-us-info-wrap">
          <div className="section-title-area ltn__section-title-2--- mb-30">
            <h4 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
              For Sellers
            </h4>
            <p>
              We serve over 10,000 buyers across numerous countries, with
              500 experts to guide you every step of the way.
            </p>
          </div>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span>
                <img
                  src="images/about-us-1-3.webp"
                  className="about-us-icon"
                  alt="Sale Property on propertyease"
                  loading="lazy"
                  width="48px"
                  height="55px"
                />
              </span>
            </div>
            <div className="ltn__feature-info">
              <h4>Find Buyers</h4>
              <p>Find buyers effortlessly with our expert assistance.</p>
            </div>
          </div>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span>
                <img
                  src="images/about-us-1-1.webp"
                  className="about-us-icon"
                  alt="Buy Property on propertyease"
                  loading="lazy"
                  width="55px"
                  height="55px"
                />
              </span>
            </div>
            <div className="ltn__feature-info">
              <h4>Free Listings</h4>
              <p>
                List your property for free and attract potential buyers.
              </p>
            </div>
          </div>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span>
                <img
                  src="images/about-us-1-2.webp"
                  className="about-us-icon"
                  alt="List property for free on propertyease"
                  loading="lazy"
                  width="55px"
                  height="55px"
                />
              </span>
            </div>
            <div className="ltn__feature-info">
              <h4>3D Tours</h4>
              <p>Show off your property with virtual 3D tours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row about-us-sec about-us-sec-2">
      <div className="col-lg-6 align-self-center about-us-right">
        <div className="about-us-info-wrap">
          <div className="section-title-area ltn__section-title-2--- mb-30">
            <h4 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
              For Buyers
            </h4>
            <p>
              We help sellers list their properties for free and connect
              with potential buyers and best selling experience.
            </p>
          </div>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span>
                <img
                  src="images/about-us-1-5.png"
                  className="about-us-icon"
                  alt="Buy a new home"
                  loading="lazy"
                  width="55px"
                  height="55px"
                />
              </span>
            </div>
            <div className="ltn__feature-info">
              <h4>Lots of Listings</h4>
              <p>Browse a wide range of properties easily.</p>
            </div>
          </div>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span>
                <img
                  src="images/about-us-1-2.webp"
                  className="about-us-icon"
                  alt="Buy a new home"
                  loading="lazy"
                  width="55px"
                  height="55px"
                />
              </span>
            </div>
            <div className="ltn__feature-info">
              <h4>3D Tours</h4>
              <p>
                We offer immersive 3D tours to showcase your property.
              </p>
            </div>
          </div>
          <div className="ltn__feature-item ltn__feature-item-3">
            <div className="ltn__feature-icon">
              <span>
                <img
                  src="images/about-us-1-4.webp"
                  className="about-us-icon"
                  alt="Buy a new home"
                  loading="lazy"
                  width="55px"
                  height="55px"
                />
              </span>
            </div>
            <div className="ltn__feature-info">
              <h4>Meet Sellers</h4>
              <p>
                After you find a property you like, we'll set up a meeting
                with the seller.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 about-us-left about-us-left-2">
        <div className="about-us-img-wrap about-img-left ">
          <img
            // src="images/pro-about-7.webp"
            // srcSet="images/pro-about-resized-7.webp"
            src="images/pro-about-resized-7.webp"
            className=""
            alt="Buy a new home"
            loading="lazy"
            width="534px"
            height="420px"
            fetchPriority="low"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs

