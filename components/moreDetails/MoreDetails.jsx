"use client"

const MoreDetails = ({propertyData}) => {
    const cleanString = (input) => {
        return input.replace(/^,|,$/g, ''); 
      };
  return (
    <div className="property-more-detail">
    <div className="row">
      <div className="col-md-12">
        <div className="details">
          <div className="row">
            <div className="col-md-12">
              <div className="more-detail-heading">
                More Details
              </div>
            </div>
          </div>
          <div className="row moreDetail">
            <div className="col-md-3 more-detail-right">
              Price
            </div>
            <div className="col-md-9 more-detail-left">
              
Ask Price
            </div>
          </div>
          <div className="row moreDetail">
            <div className="col-md-3 more-detail-right">
              Address
            </div>
            <div className="col-md-9 more-detail-left">
              {propertyData.pro_locality},&nbsp;
              {propertyData.pro_sub_district
                ? propertyData.pro_sub_district + ", "
                : ""}
              {propertyData.pro_city},&nbsp;
              {propertyData.pro_state}
            </div>
          </div>
          <div className="row moreDetail">
            <div className="col-md-3 more-detail-right">
              Facing Road Width
            </div>
            <div className="col-md-9 more-detail-left">
              {propertyData.pro_facing_road_width
                ? propertyData.pro_facing_road_width +
                  " " +
                  propertyData.pro_facing_road_unit
                : "-"}
            </div>
          </div>

          <div className="row moreDetail">
            <span className="col-md-3 more-detail-right">
              Description &nbsp;
            </span>
            <span className="col-md-9 more-detail-left ">
              {propertyData.pro_desc}
            </span>
          </div>

          {propertyData.pro_other_rooms && (
            <div className="row moreDetail">
              <span className="col-md-3 more-detail-right">
                Other Rooms &nbsp;
              </span>
              <span className="col-md-9 more-detail-left ">
                {cleanString(propertyData.pro_other_rooms)}
              </span>
            </div>
          )}
          {propertyData.pro_near_by_facilities && (
            <div className="row moreDetail">
              <span className="col-md-3 more-detail-right">
                Near By Facilities &nbsp;
              </span>
              <span className="col-md-9 more-detail-left ">
                {cleanString(propertyData.pro_near_by_facilities)}
              </span>
            </div>
          )}
          {propertyData.pro_corner === 'Yes' && (
            <div className="row moreDetail">
              <span className="col-md-3 more-detail-right">
                Corner Property &nbsp;
              </span>
              <span className="col-md-9 more-detail-left ">
                {cleanString(propertyData.pro_corner)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default MoreDetails
