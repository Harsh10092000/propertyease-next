import React from 'react'
import Link from 'next/link'
import { IconArrowNarrowRight } from "@tabler/icons-react";
const Services = ({services}) => {
  return (
    <div className="container services-wrapper">
          <div className="section-title text-left">
            <h3 className="aboutus">
              Services Offered
              <div className="heading-divider "></div>
            </h3>
            <p>
              We offer a variety of real estate services, including buying,
              selling, renting, and property management. As the best property
              dealer in town, our experts guide you through the market and help
              you reach your goals. Whether you're looking for a new home, an
              office space, or a rental property, we provide the best services.
            </p>
          </div>
          <div className="row services-wrapper-inside">
            {services.map((item, index) => (
              <div
                className="col-lg-4 mb-6 mb-lg-0 zoomIn animated"
                data-animate="zoomIn"
                key={index}
              >
                <div className="ser-card border-hover shadow-2 shadow-hover-lg-1   h-100 hover-change-image">
                  <div className="row ">
                    <div className="col-sm-3 ">
                      <img
                        src={item.image}
                        className=""
                        loading="lazy"
                        alt={item.alt}
                        width="126px"
                        height="101px"
                      />
                    </div>
                    <div className="col-sm-9 ser-text-wrapper">
                      <div>
                        <Link href={item.link} title={item.title}>
                          <div className="services-heading mb-2 d-flex align-items-center pointer ">
                            <div className="ser-heading ">
                              {item.sub_heading}
                            </div>

                            <span className="ser-icon">
                              <IconArrowNarrowRight
                                stroke={1}
                                height={32}
                                width={32}
                              />
                            </span>
                          </div>
                        </Link>

                        <div>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Services
