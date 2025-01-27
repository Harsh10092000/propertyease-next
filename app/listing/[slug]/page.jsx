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

const Listing = () => {
//   const { currentUser } = useContext(AuthContext);
const currentUser  = "";
  //const { cat } = useParams();
  const cat = "land";
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
  const [records, setRecords] = useState([]);
  const [nPages, setNPages] = useState(0);

  //const records = data.slice(firstIndex, lastIndex);
  //const nPages = Math.ceil(data.length / recordsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    axios
      .get(
        process.env.webURL + `/api/pro/fetchPropertyDataByCat/${cat}`
      )
      .then((res) => {
        setData(res.data);
      });
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
     {/* <Helmet>
  <title>Propertyease - {cat}</title>
  {cat === "residential" ? (
    <meta
      name="description"
      content="Explore residential properties for sale, from stylish apartments to spacious family homes. Whether you're a first-time buyer or looking for an investment, these properties offer comfort, modern amenities, and prime locations, ideal for individuals or families looking for a long-term home."
    />

  ) : cat === "commercial" ? (
    <meta
      name="description"
      content="Browse commercial properties for sale, including office spaces, retail stores, and mixed-use developments. These properties are located in high-demand business areas with strong foot traffic and offer excellent potential for businesses or investors seeking prime locations."
    />
  ) : cat === "land" ? (
    <meta
      name="description"
      content="Find available land for sale, ranging from residential plots to commercial and industrial spaces. These plots are located in growing areas with great investment potential, offering the flexibility to build your dream property or develop a new venture."
    />
  ) : ""}

{cat === "residential" ? (
<link defer rel="canonical" href="https://propertyease.in/listing/residential" />
) : cat === "commercial" ? (
<link defer rel="canonical" href="https://propertyease.in/listing/commercial" />
) : cat === "land" ? (
<link defer rel="canonical" href="https://propertyease.in/listing/land" />
) : ""}
</Helmet> */}

 
      <div className={"main padding-top"}>
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
