import React from 'react'
import Link from 'next/link'
const ExploreTypes = ({proType, data}) => {
  return (
    <div className="propery-type">
    <div className="container ">
      <div className="row">
        <div
          className="col-md-4 pr-xl-13 fadeInLeft animated"
          data-animate="fadeInLeft"
        >
          <h2 className="text-heading lh-1625">
            Explore <br />
            by Property Type
          </h2>
          <span className="heading-divider"></span>

          <Link href="/allproperties" title="Click to View All Properties">
            <div className="pro-type-btn">
              {Math.floor(data?.length / 50) * 50}+ Available Properties
              <i className="far fa-long-arrow-right ml-1"></i>
            </div>
          </Link>
        </div>
        {proType.map((item) => (
          <div className="col-md">
            <Link href={item.link} title={item.title}>
              <div className="pro-type-card">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.alt}
                  width="100px"
                  height="85px"
                  loading="lazy"
                />
                <div className="card-body px-0  pb-0">
                  <h4 className="card-title mb-0 ">{item.heading}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ExploreTypes
