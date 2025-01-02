

import React from 'react'
import Link from 'next/link'
const TopPropertyPicks = ({subData}) => {
  return (
    <section className="top-categories mb-0 pb-0">
          <div className="container">
            <div className="section-title text-left">
              <h3 className="aboutus">
                Top Property Picks
                <div className="heading-divider "></div>
              </h3>
              <p>
                At Property Ease, we aim to make buying and selling homes easy
                and stress-free. As the best property dealer in the town, our
                team does thorough research to bring you the best property
                listings. Whether buying your dream home or selling your
                property, we're here to guide you with expert advice and
                personalized service every step of the way.
              </p>
            </div>

            <div className="row">
              {subData !== null &&
                subData
                  .sort((a, b) => b.pro_sub_cat_number - a.pro_sub_cat_number)
                  .slice(0, 6)
                  .map((item, index) => (
                    <div className="col-md-4">
                      <div className="pro-picks-card">
                        <div className="image">
                          <img
                            src={`images/pro-picks-${index + 1}.webp`}
                            alt="Top property picks on https://propertyease.in/"
                            loading="lazy"
                          />
                        </div>
                        <div className="content">
                          <h3>
                            <Link
                              title={item.pro_type.split(",")[0]}
                              href={`/${item.pro_type
                                .split(",")[1]
                                .toLowerCase()}/${item.pro_type
                                .split(",")[0]
                                .replaceAll(" ", "-")
                                .toLowerCase()}`}
                            >
                              {item.pro_type.split(",")[0]}
                            </Link>
                          </h3>
                          <span>({item.pro_sub_cat_number} Properties)</span>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>
  )
}

export default TopPropertyPicks
