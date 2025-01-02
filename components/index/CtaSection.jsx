import React from 'react'

const CtaSection = () => {
  return (
    <section
    className="contact-us-setion py-lg-13 py-11"
    data-animated-id="8"
  >
    <div className="container">
      <div className="row">
        <div
          className="col-ld-6 col-sm-7 fadeInLeft animated d-flex align-items-center"
          data-animate="fadeInLeft"
        >
          <div className="left-sec">
            <h2 className="contact-heading">
              For more information about our services,
              <span className="text-color"> get in touch</span> with our
              expert consultants
            </h2>
            <p className="contact-text">
              Take the first step towards your dream home by clicking
              here...
            </p>
          </div>
        </div>
        <div
          className="col-ld-6 col-sm-5 text-center mt-sm-0 mt-8 fadeInRight animated right-sec"
          data-animate="fadeInRight"
        >
          <p className=" phone-number-text">Call for help now!</p>

          <p className=" phone-number">89500 40151</p>
          <p className=" phone-number">99961 67778</p>

          <div
           // onClick={() => setOpen(true)}
            className="btn btn-primary contact-btn "
            title="Get Latest Property Updates "
          >
            Get Latest Property Updates
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CtaSection
