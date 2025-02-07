import React from "react";
import pool from "../libs/mysql";
import PaginationComp from "@/components/allProperties/Pagination";
import Providers from "../progressBarprovider";
import SearchBar from "@/components/allProperties/SearchBar";
import MapProduct from "@/components/allProperties/MapProduct";
import { Page1 } from "./test1";

const getData = async () => {
    try {
      
      const db = await pool;
      const q =
        `SELECT DISTINCT property_module_images.* ,property_module.* ,agent_data.agent_type as user_type, agent_data.agent_name , agent_data.agent_sub_district, agent_data.agent_city, agent_data.agent_state FROM property_module left join property_module_images on 
    property_module.pro_id = property_module_images.img_cnct_id left join (SELECT agent_type,user_cnct_id,agent_name ,agent_sub_district, agent_city, agent_state FROM agent_module) as agent_data on 
    property_module.pro_user_id = agent_data.user_cnct_id where pro_listed = 1 group by pro_id ORDER BY pro_id DESC`;
      const q1 = "SELECT COUNT(*) as total from property_module where pro_listed = 1";
      const [rows] = await db.query(q);
      const [total] = await db.query(q1);

      return { row: rows, total: total };
    } catch (err) {
      
      return err;
    }
  };


const AllProperties = async ({ searchParams }) => {

    const currentUser = "";
 let currentPage = searchParams["page"] || 1;
  const res = await getData(currentPage);
  const data = res.row;



  const recordsPerPage = 12;
  const nPages = Math.ceil(res.total[0].total / recordsPerPage);
  
  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = currentPage * recordsPerPage;




  return (
    <Providers>
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

<div style={{display: "none"}}>
    {data.map((item,index) => (
        <a key={index} href={`/${item.pro_url}`} >{item.pro_url}</a>
    ))}
</div>
<Page1 data={data} currentUser={currentUser} recordsPerPage={recordsPerPage} currentPage={currentPage} />
     
    </div>
    </Providers>
  );
};

export default AllProperties;
