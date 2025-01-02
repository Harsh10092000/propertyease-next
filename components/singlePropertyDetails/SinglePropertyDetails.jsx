import React from 'react'

const SinglePropertyDetails = ({propertyData}) => {
  return (
    <div className={"property-side-detail"}>
    <div style={{ fontSize: "10px" }}>
      Property ID
      <span className="propertypage-id">
        {5000}
      </span>
    </div>
    <div className="property-no-detail">
      <div className={"property-small-detail"}>
        {propertyData.pro_type ? (
          propertyData.pro_type.split(",")[1] == "Commercial" ||
          propertyData.pro_type.split(",")[1] ==
            "Residential" ? (
            <>
              <div className="property-numbers">
                <img src="/img/bedroom.webp" height="15px" width="15px" loading="lazy"  alt="" />
                <span className="propertyHeading">
                  Bedroom(s)
                </span>
                <span className="propertyData">
                  {propertyData.pro_bedroom}
                </span>
              </div>
              <div className="property-numbers">
                <img src="/img/shower.webp"  height="15px" width="15px" loading="lazy" alt="" />
                <span className="propertyHeading">
                  Washroom(s)
                </span>
                <span className="propertyData">
                  {propertyData.pro_washrooms}
                </span>
              </div>
              <div className="property-numbers">
                <img src="/img/balcony.webp"  height="15px" width="15px" loading="lazy" alt="" />
                <span className="propertyHeading">
                  Balconies
                </span>
                <span className="propertyData">
                  {propertyData.pro_balcony}
                </span>
              </div>
              <div className="property-numbers">
                <img src="/img/tiles.webp"  height="15px" width="15px" loading="lazy" alt="" />
                <span className="propertyHeading">
                  Floor(s)
                </span>
                <span className="propertyData">
                  {propertyData.pro_floor}
                </span>
              </div>
            </>
          ) : (
            ""
          )
        ) : (
          ""
        )}

        <div className="property-numbers">
          <img src="/img/transfer.webp"  height="15px" width="15px" loading="lazy" alt="" />
          <span className="propertyHeading">
            Side Open(s)
          </span>
          <span className="propertyData">
            {(propertyData.pro_open_sides)}
          </span>
        </div>
        <div className="property-numbers">
          <img src="/img/face-detection.webp"  height="15px" width="15px" loading="lazy" alt="" />
          <span className="propertyHeading">
            Facing
          </span>
          <span className="propertyData">
            {(propertyData.pro_facing)}
          </span>
        </div>
        <div className="property-numbers">
          <img src="/img/ownership.webp"  height="15px" width="15px" loading="lazy" alt="" />
          <span className="propertyHeading">
            Possession Available
          </span>
          <span className="propertyData">
            {(propertyData.pro_possession)}
          </span>
        </div>
        {propertyData.pro_type == "Commercial" ||
        propertyData.pro_type == "Residential" ? (
          <div className="property-numbers">
            <img src="/img/parking.webp" height="15px" width="15px" loading="lazy" alt="" />
            <span className="propertyHeading">
              Car Parking(s)
            </span>
            <span className="propertyData">
              {(propertyData.pro_parking)}
            </span>
          </div>
        ) : (
          <div className="property-numbers">
            <img src="/img/age.webp" height="15px" width="15px" loading="lazy" alt="" />
            <span className="propertyHeading">
              Property Age
            </span>
            <span className="propertyData">
              {(propertyData.pro_age)}
            </span>
          </div>
        )}
      </div>
    </div>
    <div className=" mmmm">
      <div className="large-detials">
        <img
          src="/img/meter.webp"
          alt=""
          className="desc"
          height="15px" width="15px"
          loading="lazy"
        />
        <span className="propertyHeading">
          Plot Size &amp; Dimension
        </span>
        <p>
          <span className="propertyData">
            <span className="measure">
              {propertyData.pro_width
                ? propertyData.pro_width +
                  " Feet * " +
                  propertyData.pro_length +
                  " Feet"
                : "-"}
            </span>
          </span>
        </p>
      </div>
      <div className="large-detials">
        <img
          src="/img/rent.webp"
          alt=""
          className="desc"
           height="15px" width="15px" loading="lazy"
        />
        <span className="propertyHeading">
          Already Rent
        </span>
        <p>
          <span className="propertyData">
            {(propertyData.pro_rental_status)}
          </span>
        </p>
      </div>
    </div>
    <div className=" mmmm" id="interest">
      <div className="large-detials">
        <img
          src="/img/ownership-type.webp"
          alt=""
          className="desc"
           height="15px" width="15px" loading="lazy"
        />
        <span className="propertyHeading">
          Type Of Ownership
        </span>
        <p>
          <span className="propertyData">
            {(propertyData.pro_ownership_type)}
          </span>
        </p>
      </div>
      <div className="large-detials">
        <img
          src="/img/rent.webp"
          alt=""
          className="desc"
           height="15px" width="15px" loading="lazy"
        />
        <span className="propertyHeading">
          Authority Approval
        </span>
        <p>
          <span className="propertyData">
            {(propertyData.pro_approval)}
          </span>
        </p>
      </div>
    </div>
    {propertyData.pro_type ? (
      propertyData.pro_type.split(",")[1] == "Commercial" ||
      propertyData.pro_type.split(",")[1] == "Residential" ? (
        <>
          <div className=" mmmm">
            <div className="large-detials">
              <img
                src="/img/age.webp"
                alt=""
                className="desc"
                 height="15px" width="15px" loading="lazy"
              />
              <span className="propertyHeading">
                Property Age
              </span>
              <p>
                <span className="propertyData">
                  {(propertyData.pro_age)}
                </span>
              </p>
            </div>
            <div className="large-detials">
              <img
                src="/img/furnishing.webp"
                alt=""
                className="desc"
                 height="15px" width="15px" loading="lazy"
              />
              <span className="propertyHeading">
                Furnishing
              </span>
              <p>
                <span className="propertyData">
                  {(propertyData.pro_furnishing)}
                </span>
              </p>
            </div>
          </div>
        </>
      ) : null
    ) : (
      ""
    )}
    <div></div>
  </div>
  )
}

export default SinglePropertyDetails
