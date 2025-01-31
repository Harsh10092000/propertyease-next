"use client"
// import { Link, useParams } from "react-router-dom";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Pagination from "@mui/material/Pagination";
//import DateTime from "../../dateTime";
//import NoResult from "../../components/noResult/NoResult";
//import SearchBar from "../../components/searchBar/SearchBar";
//import { AuthContext } from "../../context/AuthContext";
import PropertyCard from "@/components/propertyCard/PropertyCard";
import SearchBar from "@/components/searchBar/SearchBar";
import { useParams } from "next/navigation";

const Listing = () => {
//   const { currentUser } = useContext(AuthContext);
const currentUser  = "";
 // const { cat } = useParams();
 const params = useParams();
 const cat = params.cat;
 const slug = params.slug;
 const filCat = cat.replaceAll("-", " ");
 console.log("params : " , params);
  //const cat = "land";
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const [data, setData] = useState([]);
  const [subData, setSubData] = useState([]);
  const [rentData, setRentData] = useState([]);
  const [suggestions, setSuggestions] = useState();
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const [userCurrLocation, setUserCurrLocation] = useState("");
  const [searchValue, setSearchValue] = useState("");
  // const [filter, setFilter] = useState("All");
  //const [records, setRecords] = useState([]);
  //const [nPages, setNPages] = useState(0);


  // const q =
  //       `SELECT DISTINCT property_module_images.* ,property_module.* ,agent_data.agent_type as user_type, agent_data.agent_name , agent_data.agent_sub_district, agent_data.agent_city, agent_data.agent_state FROM property_module left join property_module_images on 
  //   property_module.pro_id = property_module_images.img_cnct_id left join (SELECT agent_type,user_cnct_id,agent_name ,agent_sub_district, agent_city, agent_state FROM agent_module) as agent_data on 
  //   property_module.pro_user_id = agent_data.user_cnct_id where pro_listed = 1 group by pro_id ORDER BY pro_id ORDER BY RAND() LIMIT 5;`

  

  const records = data.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(data.length / recordsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    console.log("slug : " , slug)
    if(slug == "rental") {
      axios
      .get(process.env.webURL + `/api/pro/rentalProperty/${filCat}`)
      .then((res) => {
        setData(res.data);
      });
    } else {
      axios
      .get(
        process.env.webURL + `/api/pro/fetchPropertyDataByCat/${filCat}`
      )
      .then((res) => {
        setData(res.data);
      });
    }
    
    axios
      .get(process.env.webURL + `/api/pro/fetchPropertySubCatNo`)
      .then((res) => {
        setSubData(res.data);
      });
    axios
      .get(process.env.webURL + `/api/pro/rentalPropertyTotal`)
      .then((res) => {
        setRentData(res.data);
      });
  }, []);

  useEffect(() => {
    data.forEach((item, i) => {
      item.pro_modified_id = 5000 + parseInt(item.pro_id);
    });
  }, [data]);

  console.log("data : " , data);

  const handleRecordsChange = (newRecords) => {
    setRecords(newRecords);
  };

  const handleNPagesChange = (newNPages) => {
    setNPages(newNPages);
  };

  const handleSearchValue = (value) => {
    console.log(value);
    setSearchValue(value);
  };

  const handleUserLocation = (value) => {
    setUserCurrLocation(value);
  };

  const handleCurrentPage = (value) => {
    setCurrentPage(value);
  };

  return (
    <div>


{slug === "rental" ? (
  cat === "apartment" ? (
    <>
      <title>Propertyease - Apartment Rentals</title>
      <meta
        name="description"
        content="Explore a variety of rental apartments, from cozy studios to spacious multi-bedroom units, offering modern amenities and comfortable living for individuals and families."
      />
    </>
  ) : cat === "independent-house" ? (
    <>
      <title>Propertyease - Independent House Rentals</title>
      <meta
        name="description"
        content="Find independent houses for rent, offering spacious living areas, privacy, and outdoor space. Ideal for families or individuals seeking peace away from shared living."
      />
    </>
  ) : cat === "builder-floor" ? (
    <>
      <title>Propertyease - Builder Floor Rentals</title>
      <meta
        name="description"
        content="Explore rental builder floors providing greater privacy and spacious layouts, perfect for those desiring a peaceful living experience with fewer neighbors."
      />
    </>
  ) : cat === "farm-house" ? (
    <>
      <title>Propertyease - Farm House Rentals</title>
      <meta
        name="description"
        content="Rent a farmhouse and enjoy peaceful country living. Spacious properties offering tranquility and outdoor environments, perfect for retreats away from city life."
      />
    </>
  ) : cat === "retirement-community" ? (
    <>
      <title>Propertyease - Retirement Community Rentals</title>
      <meta
        name="description"
        content="Discover retirement communities for rent, offering comfort, support, and age-friendly amenities designed for a fulfilling lifestyle in a peaceful environment."
      />
    </>
  ) : cat === "studio-apartment" ? (
    <>
      <title>Propertyease - Studio Apartment Rentals</title>
      <meta
        name="description"
        content="Rent a studio apartment offering efficient living spaces, modern designs, and convenience for singles or couples. Enjoy comfort in a compact setting."
      />
    </>
  ) : cat === "residential-land" ? (
    <>
      <title>Propertyease - Residential Land Rentals</title>
      <meta
        name="description"
        content="Rent residential land and create your dream home. These plots provide flexibility, space, and the opportunity to build in your ideal location."
      />
    </>
  ) : cat === "commercial-land" ? (
    <>
      <title>Propertyease - Commercial Land Rentals</title>
      <meta
        name="description"
        content="Rent commercial land in prime locations, perfect for setting up businesses such as retail outlets, offices, or other commercial ventures with high visibility."
      />
    </>
  ) : cat === "industrial-land" ? (
    <>
      <title>Propertyease - Industrial Land Rentals</title>
      <meta
        name="description"
        content="Rent industrial land ideal for warehouses, factories, or large-scale operations. Offering spacious plots in key locations to meet your business needs."
      />
    </>
  ) : cat === "agricultural-land" ? (
    <>
      <title>Propertyease - Agricultural Land Rentals</title>
      <meta
        name="description"
        content="Rent agricultural land for farming, livestock, or agricultural projects. Ideal for growing crops and raising animals in fertile and expansive plots."
      />
    </>
  ) : cat === "farm-house-land" ? (
    <>
      <title>Propertyease - Farm House Land Rentals</title>
      <meta
        name="description"
        content="Rent farm house land in a peaceful rural setting. Ideal for building a farmhouse or pursuing agricultural activities with ample space for various ventures."
      />
    </>
  ) : cat === "retail-showroom" ? (
    <>
      <title>Propertyease - Retail Showroom Rentals</title>
      <meta
        name="description"
        content="Rent retail showroom spaces in high-traffic areas for displaying your products. These properties offer excellent visibility and accessibility for customers."
      />
    </>
  ) : cat === "commercial-building" ? (
    <>
      <title>Propertyease - Commercial Building Rentals</title>
      <meta
        name="description"
        content="Rent commercial buildings for your business needs. Whether for offices, retail spaces, or mixed-use properties, these buildings offer modern infrastructure and prime locations."
      />
    </>
  ) : cat === "office-complex" ? (
    <>
      <title>Propertyease - Office Complex Rentals</title>
      <meta
        name="description"
        content="Rent office complex spaces, ideal for businesses of all sizes. Flexible layouts, essential amenities, and central locations provide an ideal work environment."
      />
    </>
  ) : cat === "software-technology-park" ? (
    <>
      <title>Propertyease - Software Technology Park Rentals</title>
      <meta
        name="description"
        content="Rent office spaces in a software technology park designed for tech companies. Modern infrastructure, collaboration spaces, and networking opportunities for innovation."
      />
    </>
  ) : cat === "warehouse" ? (
    <>
      <title>Propertyease - Warehouse Rentals</title>
      <meta
        name="description"
        content="Rent warehouse spaces with ample storage, security, and easy access to transportation links. Perfect for businesses in need of logistics and distribution space."
      />
    </>
  ) : cat === "industrial-estate" ? (
    <>
      <title>Propertyease - Industrial Estate Rentals</title>
      <meta
        name="description"
        content="Rent space in an industrial estate, perfect for manufacturing or logistics operations. Large plots with essential infrastructure support heavy-duty business activities."
      />
    </>
  ) : null
) : (
  cat === "apartment" ? (
    <>
      <title>Propertyease - Apartment</title>
      <meta
        name="description"
        content="Browse through a selection of apartments for sale, from modern studios to expansive family units. Find a perfect fit for your lifestyle in well-connected neighborhoods with top amenities."
      />
    </>
  ) : cat === "independent-house" ? (
    <>
      <title>Propertyease - Independent House</title>
      <meta
        name="description"
        content="Purchase an independent house offering privacy, ample space, and freedom to customize. Enjoy quiet living with large gardens and easy access to key locations."
      />
    </>
  ) : cat === "builder-floor" ? (
    <>
      <title>Propertyease - Builder Floor</title>
      <meta
        name="description"
        content="Invest in a builder floor that combines independent living with modern convenience. Spacious layouts, modern designs, and the benefit of a low-maintenance home."
      />
    </>
  ) : cat === "farm-house" ? (
    <>
      <title>Propertyease - Farm House</title>
      <meta
        name="description"
        content="Own a farmhouse set in serene countryside surroundings. Ideal for those looking for peace and tranquility, these properties offer large plots for agricultural use or relaxation."
      />
    </>
  ) : cat === "retirement-community" ? (
    <>
      <title>Propertyease - Retirement Community</title>
      <meta
        name="description"
        content="Buy a property in a retirement community that offers peace of mind, comfortable living, and dedicated amenities to support an active and independent lifestyle."
      />
    </>
  ) : cat === "studio-apartment" ? (
    <>
      <title>Propertyease - Studio Apartment</title>
      <meta
        name="description"
        content="Find compact and efficient studio apartments for sale. Perfect for singles or couples looking for a stylish and affordable living space with easy access to city life."
      />
    </>
  ) : cat === "residential-land" ? (
    <>
      <title>Propertyease - Residential Land</title>
      <meta
        name="description"
        content="Purchase residential land in desirable locations and build the home of your dreams. These plots provide flexibility and ample space to create your vision."
      />
    </>
  ) : cat === "commercial-land" ? (
    <>
      <title>Propertyease - Commercial Land</title>
      <meta
        name="description"
        content="Invest in prime commercial land perfect for retail, office, or mixed-use developments. These high-visibility plots are ideal for setting up successful ventures."
      />
    </>
  ) : cat === "industrial-land" ? (
    <>
      <title>Propertyease - Industrial Land</title>
      <meta
        name="description"
        content="Purchase industrial land to set up manufacturing units, warehouses, or logistics facilities. Offering spacious plots in strategic locations with easy access to major transport routes."
      />
    </>
  ) : cat === "agricultural-land" ? (
    <>
      <title>Propertyease - Agricultural Land</title>
      <meta
        name="description"
        content="Buy agricultural land with fertile soil and abundant space, ideal for farming, livestock, or other agricultural ventures. A smart investment for long-term growth."
      />
    </>
  ) : cat === "farm-house-land" ? (
    <>
      <title>Propertyease - Farm House Land</title>
      <meta
        name="description"
        content="Purchase land for a farmhouse, offering large plots in peaceful rural areas. Perfect for building a retreat, starting agricultural projects, or enjoying country living."
      />
    </>
  ) : cat === "retail-showroom" ? (
    <>
      <title>Propertyease - Retail Showroom</title>
      <meta
        name="description"
        content="Buy a retail showroom in bustling commercial areas with excellent foot traffic. A great investment for displaying your products and growing your business in a high-demand location."
      />
    </>
  ) : cat === "commercial-building" ? (
    <>
      <title>Propertyease - Commercial Building</title>
      <meta
        name="description"
        content="Purchase a commercial building offering versatile spaces for offices, retail shops, or mixed-use purposes. Situated in key business districts, it's a solid investment for business owners."
      />
    </>
  ) : cat === "office-complex" ? (
    <>
      <title>Propertyease - Office Complex</title>
      <meta
        name="description"
        content="Invest in an office complex that offers flexible workspaces, ideal for businesses of all sizes. These modern facilities are well-located and ready to accommodate your growing workforce."
      />
    </>
  ) : cat === "software-technology-park" ? (
    <>
      <title>Propertyease - Software Technology Park</title>
      <meta
        name="description"
        content="Buy office spaces in a cutting-edge technology park designed for tech companies. Modern infrastructure, high-speed internet, and access to an innovation-driven ecosystem make these spaces ideal for growth."
      />
    </>
  ) : cat === "warehouse" ? (
    <>
      <title>Propertyease - Warehouse</title>
      <meta
        name="description"
        content="Invest in warehouse space offering ample storage capacity and secure facilities. Perfect for distribution, inventory management, or logistics companies looking for operational efficiency."
      />
    </>
  ) : cat === "industrial-estate" ? (
    <>
      <title>Propertyease - Industrial Estate</title>
      <meta
        name="description"
        content="Purchase land in an industrial estate equipped with the infrastructure needed for large-scale operations. Ideal for businesses looking to expand or start manufacturing, storage, or logistics."
      />
    </>
  ) : null
)}

 {/* <div className={"main padding-top"}> */}
      <div className={"main "}>
        <section className="main-content">
          <div className="container">
            <div className="title">
              <h2 className="text-capitalize">{cat}</h2>
              {/* <SearchBar
                handleNPagesChange={handleNPagesChange}
                handleRecordsChange={handleRecordsChange}
                data={data}
                handleSearchValue={handleSearchValue}
                searchValue={searchValue}
              /> */}
              {/* <SearchBar
                handleNPagesChange={handleNPagesChange}
                handleRecordsChange={handleRecordsChange}
                data={data}
                handleSearchValue={handleSearchValue}
                handleUserLocation={handleUserLocation}
                searchValue={searchValue}
                handleCurrentPage={handleCurrentPage}
                currentPage={currentPage}
              /> */}
            </div>
            <div className="row">
              <div className="col-md-9">
                {records.length > 0 ? (
                  records.map((object, index) => (
                    <PropertyCard
                      // viewerRef= {viewerRef}
                      object={object}
                      index={index}
                      currentUser={currentUser}
                      key={index}
                      //DateTime={DateTime}
                    />
                  ))
                ) : (
                //   <NoResult
                //     searchValue={searchValue}
                //     userCurrLocation={userCurrLocation}
                //     handleSearchValue={handleSearchValue}
                //   />
                <div>No result</div>

                )}
              </div>
              <div className="col-md-3">
                <div>
                  <div className="p-1 shadow">
                    <div className="p-3 font-weight-bold text-black">
                      For Sale
                    </div>
                    {subData.map((sub, index) => (
                      <Link
                       href={`/${sub.pro_type
                          .split(",")[1]
                          .toLowerCase()}/${sub.pro_type
                          .split(",")[0]
                          .replaceAll(" ", "-")
                          .toLowerCase()}`}
                        key={index}
                      >
                        <div className="d-flex justify-content-between px-3 py-2">
                          <div>{sub.pro_type.split(",")[0]}</div>
                          <div>({sub.pro_sub_cat_number})</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <div className="p-1 shadow">
                    <div className="p-3 font-weight-bold text-black">Rent</div>
                    {rentData.map((rent, index) => (
                      <Link
                      href={`/rental/${rent.pro_type
                          .split(",")[0]
                          .replaceAll(" ", "-")
                          .toLowerCase()}`}
                        key={index}
                        className={
                          rent.pro_type.split(",")[0] === cat
                            ? "text-primary m-0"
                            : "text-secondary m-0"
                        }
                      >
                        <div className="d-flex justify-content-between px-3 py-2">
                          <div>{rent.pro_type.split(",")[0]}</div>
                          <div>({rent.pro_sub_cat_number})</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {records.length > 0 && (
              <Pagination
                page={currentPage}
                count={nPages}
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
                className="col-md-6 mx-auto py-2"
              />
            )}
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default Listing;
