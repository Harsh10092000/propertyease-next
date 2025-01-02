import React from "react";
import PropertyCard from "@/components/propertyCard/PropertyCard";
import pool from "../libs/mysql";

const getData = async () => {
    try {
      
      const db = await pool;
      const q =
        `SELECT DISTINCT property_module_images.* , property_module.* , agent_data.agent_type as user_type, agent_data.agent_name , agent_data.agent_sub_district, agent_data.agent_city, agent_data.agent_state FROM property_module left join property_module_images on 
    property_module.pro_id = property_module_images.img_cnct_id left join (SELECT agent_type,user_cnct_id,agent_name ,agent_sub_district, agent_city, agent_state FROM agent_module) as agent_data on 
    property_module.pro_user_id = agent_data.user_cnct_id where pro_listed = 1 group by pro_id ORDER BY pro_id DESC`;
      const [rows] = await db.query(q);

      return { row: rows };
    } catch (err) {
      
      return err;
    }
  };

const AllProperties = async () => {
    const currentUser = "";
    const result = await getData();
    const records = result.row;
    console.log("records : " , records);
  return (
    <div>
      <title>Propertyease - View All Properties</title>
      <meta
        name="description"
        content="Discover a diverse range of properties for sale and rent in Kurukshetra, including residential lands, independent houses, commercial buildings, and agricultural lands. Explore your dream property today!"
      />
      <meta name="author" content="Propertyease" />
      <link rel="canonical" href="https://propertyease.in/allproperties" />
      <meta
        name="keywords"
        content={`Top real estate agents near me, Commercial real estate, Residential real estate, haryana, rent house, Property, Propertyease, houses for rent, mls,real estate agent, property for sale,  for sale near me, home, realtor, houses for sale Sale, Rent, Buy, India, Best Property `}
      />

      <div className={"main"}>
        <section className="main-content">
          <div className="container">
            <div className="title">
              <h2>
                All Properties
                <span className="ml-2 numberProperties">{records.length}</span>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-9">
                {records?.length > 0 &&
                  records.map((object, index) => (
                    <PropertyCard
                      // viewerRef= {viewerRef}
                      object={object}
                      index={index}
                      currentUser={currentUser}
                      
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllProperties;
