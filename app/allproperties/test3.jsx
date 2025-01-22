import React from "react";
import PropertyCard from "@/components/propertyCard/PropertyCard";
import pool from "../libs/mysql";
import PaginationComp from "@/components/allProperties/Pagination";
import Providers from "../progressBarprovider";
import SideBar from "@/components/allProperties/SideBar";
import Sidebar2 from "@/components/allProperties/Sidebar2";
import SearchBar from "@/components/allProperties/SearchBar";
import MapProduct from "@/components/allProperties/MapProduct";

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
    //const result = await getData();
    //const records = result.row;


    let currentPage = searchParams["page"] || 1;
  const res = await getData(currentPage);
  // console.log(res);
  

  //const records1 = records.slice(0, 2)
   // console.log("record : " , records);
    //const currentPageNo = 1;
  //   const currentPage = 1;
  //   const recordsPerPage = 10;
  // const lastIndex = currentPage * recordsPerPage;
  // let firstIndex = lastIndex - recordsPerPage;

  // const records = records1?.slice(firstIndex, lastIndex);
  // const nPages = Math.ceil(records1?.length / recordsPerPage);

  const data = res.row;

  const sort_by = searchParams["sortby"] || "Recent Listed";
  if (sort_by === 'Recent-Listed') {
    currentPage = 1;
    data.sort((a, b) => b.pro_id - a.pro_id);
  } else if (sort_by === 'Most-Popular') {
    currentPage = 1;
    data.sort((a, b) => b.pro_views - a.pro_views);
  }


  const recordsPerPage = 12;
  const nPages = Math.ceil(res.total[0].total / recordsPerPage);
  
  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = currentPage * recordsPerPage;
  const records = res.row.slice(firstIndex, lastIndex); 



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
      <div className={"main"}>
        <section className="main-content">
          <div className="container">
            <div className="title">
              <h2>
                All Properties
                {/* <span className="ml-2 numberProperties">{records.length}</span> */}
              </h2>
            </div>
<SearchBar data={data}/>
            <div className="row">
              <div className="col-md-9">
                <MapProduct data={data} currentUser={currentUser} recordsPerPage={recordsPerPage} currentPage={currentPage} />
                  
              </div>
              <div className="col-md-3 d-flex flex-column gap-3">
                    {/* <SideBar /> */}
                   
                  </div>
              
            </div>
            {currentPage > 1 &&
            <a href={`/allproperties?page=${parseInt(currentPage) - 1}`}>Prev</a>
}
            <PaginationComp Pages={nPages} currentPage={currentPage} />
            {currentPage < 16 &&
            <a href={`/allproperties?page=${parseInt(currentPage) + 1}`}>Next</a>
}
          </div>
        </section>
      </div>
    </div>
    </Providers>
  );
};

export default AllProperties;
