"use client"
import React from 'react'
import Sidebar2 from './Sidebar2';
import { useState, useEffect } from 'react';

const SideBar = () => {
    const [propertyAdTypeFilter, setPropertyAdTypeFilter] =
    useState("All Properties");
  const [openPropertyAdTypeOptions, setOpenPropertyAdTypeOptions] =
    useState(false);
  const propertyAdTypeOptions = [
    { type: "All Properties" },
    { type: "Sale" },
    { type: "Rent" },
  ];

  const [furnishingStatusFilter, setFurnishingStatusFilter] = useState([]);
  const [openFurnishingOptions, setOpenFurnishingOptions] = useState(false);
  const furnishingStatusOptions = [
    { type: "Fully Furnished" },
    { type: "Semi Furnished" },
    { type: "Unfurnished" },
  ];

  const [possessionAvailableFilter, setPossessionAvailableFilter] = useState(
    []
  );
  const [openPossessionOptions, setOpenPossessionOptions] = useState(false);
  const possessionAvailableOptions = [
    { type: "Immediate" },
    { type: "0-3 Month" },
    { type: "3-6 Month" },
    { type: "After 6 Months" },
  ];

  const [authorityApprovedFilter, setAuthorityApprovedFilter] = useState([]);

  const [openAuthorityOptions, setOpenAuthorityOptions] = useState(false);
  const authorityApprovedOptions = [
    { type: "HSVP" },
    { type: "MC" },
    { type: "DTP" },
    { type: "Other" },
  ];

  const [proCategoryFilter, setProCategoryFilter] = useState([]);

  const [openProCategoryOptions, setOpenProCategoryOptions] = useState(false);
  const proCategoryOptions = [
    { type: "Residential" },
    { type: "Commercial" },
    { type: "Land" },
  ];

  const [proWithPhotos, setProWithPhotos] = useState(false);
  const [proWithParking, setProWithParking] = useState(false);

  const [sortBy, setSortBy] = useState("Recent Listed");
  const [openSortByOptions, setOpenSortByOptions] = useState(false);

  const [selectedSubTypeFilter, setSelectedSubTypeFilter] = useState([]);
  

  const propertySubTypeOptions = [
    { id: "t1", type: "Apartment", parent_type: "Residential" },
    { id: "t2", type: "Independent House", parent_type: "Residential" },
    { id: "t3", type: "Builder Floor", parent_type: "Residential" },
    { id: "t4", type: "Farm HouseRaw House", parent_type: "Residential" },
    { id: "t5", type: "Retirement Community", parent_type: "Residential" },
    { id: "t6", type: "Studio Apartment", parent_type: "Residential" },
    { id: "t7", type: "Residential Land", parent_type: "Land" },
    { id: "t8", type: "Commercial Land", parent_type: "Land" },
    { id: "t9", type: "Industrial Land", parent_type: "Land" },
    { id: "t10", type: "Agricultural Land", parent_type: "Land" },
    { id: "t11", type: "Farm House Land", parent_type: "Land" },

    { id: "t12", type: "Retail Showroom", parent_type: "Commercial" },
    { id: "t13", type: "Commercial Building", parent_type: "Commercial" },
    { id: "t14", type: "Office Complex", parent_type: "Commercial" },
    { id: "t15", type: "Software Technology Park", parent_type: "Commercial" },
    { id: "t16", type: "Warehouse", parent_type: "Commercial" },
    { id: "t18", type: "Industrial Estate", parent_type: "Commercial" },
  ];
  const [openProSubOptions, setOpenProSubOptions] = useState(false);

  const handleProSubTypeToggle = (type) => {
    console.log(type);
    //props.handleCurrentPage(1);
    if (selectedSubTypeFilter.includes(type)) {
      setSelectedSubTypeFilter(
        selectedSubTypeFilter.filter((item) => item !== type)
      );
    } else {
      setSelectedSubTypeFilter([...selectedSubTypeFilter, type]);
    }
  };

  const handleAllSubTypes = () => {
    setSelectedSubTypeFilter((prevSelectedTypes) => {
      const updatedTypes = propertySubTypeOptions
        .map((item) => item.type)
        .filter((type) => !prevSelectedTypes.includes(type));
      return [...prevSelectedTypes, ...updatedTypes];
    });
  };

  const handleToggleFurnishing = (type) => {
    //props.handleCurrentPage(1);
    if (furnishingStatusFilter.includes(type)) {
      setFurnishingStatusFilter(
        furnishingStatusFilter.filter((item) => item !== type)
      );
    } else {
      setFurnishingStatusFilter([...furnishingStatusFilter, type]);
    }
  };

  const handleToggleAuthority = (type) => {
    //props.handleCurrentPage(1);
    if (authorityApprovedFilter.includes(type)) {
      setAuthorityApprovedFilter(
        authorityApprovedFilter.filter((item) => item !== type)
      );
    } else {
      setAuthorityApprovedFilter([...authorityApprovedFilter, type]);
    }
  };

  const handleTogglePossession = (type) => {
    //props.handleCurrentPage(1);
    if (possessionAvailableFilter.includes(type)) {
      setPossessionAvailableFilter(
        possessionAvailableFilter.filter((item) => item !== type)
      );
    } else {
      setPossessionAvailableFilter([...possessionAvailableFilter, type]);
    }
  };

  const handleToggleProCategory = (type) => {
    //props.handleCurrentPage(1);
    if (proCategoryFilter.includes(type)) {
      setProCategoryFilter(proCategoryFilter.filter((item) => item !== type));
    } else {
      setProCategoryFilter([...proCategoryFilter, type]);
    }
  };

  useEffect(() => {
    const unique1 = Array.from(
      new Set(data?.slice(0, 60).map((item) => item.pro_city.trim()))
    );
    const uniqueState = Array.from(
      new Set(data?.slice(0, 60).map((item) => item.pro_state.trim()))
    );

    const unique2 = Array.from(
      new Set(
        data
          ?.slice(0, 60)
          .map(
            (item) =>
              (item.pro_sub_district
                ? item.pro_sub_district.trim() + ", "
                : "") + item.pro_city.trim()
          )
      )
    );
    const unique3 = Array.from(
      new Set(
        data
          ?.slice(0, 60)
          .map(
            (item) =>
              (item.pro_locality ? item.pro_locality.trim() + ", " : "") +
              (item.pro_sub_district
                ? item.pro_sub_district.trim() + ", "
                : "") +
              item.pro_city.trim()
          )
      )
    );

    const arr = [
      ...unique1,
      ...uniqueState,
      ...unique2,
      ...unique3,
      searchValue,
    ];

    const unique4 = Array.from(
      new Set(arr.slice(0, 200).map((item) => item.trim()))
    );
    const unique = unique4.filter((i) =>
      i.toLowerCase().startsWith(searchValue.toLowerCase())
    );

    if (searchValue === "") {
      setOpenSuggestions(false);
    }

    setSuggestions(unique);
  }, [searchValue]);

  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    setSortedUsers(data);
    if (sortBy === "Recent Listed") {
      sortedUsers.sort((a, b) => b.pro_id - a.pro_id);
    } else if (sortBy === "Most Popular") {
      sortedUsers.sort((a, b) => b.pro_views - a.pro_views);
    }
  }, [data, sortBy]);
  //let sortedUsers = [...data];

  const handleSearch = () => {
    setOpenSuggestions(false);
    let searchWords = searchValue?.toLowerCase().split(",");
    setSearchValue1(searchValue);

    const filteredData = (results.length > 0 ? results : sortedUsers).filter(
      (item) => {
        const itemValues =
          item.pro_locality +
          " " +
          item.pro_city +
          " " +
          item.pro_sub_district +
          " " +
          item.pro_street +
          " " +
          item.pro_state;

        return searchWords.every((word) =>
          itemValues.toLowerCase().includes(word)
        );
      }
    );

    setResults(filteredData);
  };

  useEffect(() => {
    let searchWords = searchValue1?.toLowerCase().split(",");
    console.log(sortedUsers, searchWords);
    const filteredData = sortedUsers
      .filter((code) => {
        if (proWithPhotos === true) {
          return code.img_id !== null;
        } else if (proWithPhotos === false) {
          return true;
        }
      })
      .filter((code) => {
        if (proWithParking === true) {
          
          return code.pro_parking > 0;
        } else if (proWithParking === false) {
          return true;
        }
      })
      .filter((code) => {
        if (propertyAdTypeFilter === "Sale") {
          return code.pro_ad_type === "Sale";
        } else if (propertyAdTypeFilter === "Rent") {
          return code.pro_ad_type === "Rent";
        } else if (propertyAdTypeFilter === "All Properties") {
          return true;
        }
      })
      .filter((item) => {
        const result = furnishingStatusFilter.includes(item.pro_furnishing);
        if (result === true) {
          return item;
        } else if (furnishingStatusFilter.length === 0) {
          return true;
        }
      })
      .filter((item) => {
        const result = proCategoryFilter.includes(item.pro_type.split(",")[1]);
        if (result === true) {
          return item;
        } else if (proCategoryFilter.length === 0) {
          return true;
        }
      })
      .filter((item) => {
        const result = selectedSubTypeFilter.includes(
          item.pro_type.split(",")[0]
        );

        if (result === true) {
          return item;
        } else if (selectedSubTypeFilter.length === 0) {
          return true;
        }
      })
      .filter((item) => {
        const result = authorityApprovedFilter.includes(item.pro_approval);
        if (result === true) {
          return item;
        } else if (authorityApprovedFilter.length === 0) {
          return true;
        }
      })
      .filter((item) => {
        const result = possessionAvailableFilter.includes(item.pro_possession);
        if (result === true) {
          return item;
        } else if (possessionAvailableFilter.length === 0) {
          return true;
        }
      })
      .filter((item) => {
        const itemValues =
          item.pro_locality +
          " " +
          item.pro_city +
          " " +
          item.pro_sub_district +
          " " +
          item.pro_street +
          " " +
          item.pro_state;

        if (searchWords.length !== 0) {
          return searchWords.every((word) =>
            itemValues.toLowerCase().includes(word)
          );
        } else {
          return true;
        }
      });
    setCurrentPage(1);
    setResults(filteredData);
  }, [
    sortedUsers,
    sortBy,
    searchValue1,
    propertyAdTypeFilter,
    furnishingStatusFilter,
    proCategoryFilter,
    selectedSubTypeFilter,
    possessionAvailableFilter,
    authorityApprovedFilter,
    proWithPhotos,
    change,
    proWithParking
  ]);
  return (
   
              <div className="allproperty-filter">
                <div className="all-pro-filter shadow">
                  <div className="p-1 ">
                    {/* ########### filter 1 ########### */}

                    <div
                      className={`property-type-filter pointer position-relative ${
                        openPropertyAdTypeOptions ? "arrow-up" : "arrow-down"
                      }`}
                      onClick={() =>
                        setOpenPropertyAdTypeOptions(!openPropertyAdTypeOptions)
                      }
                    >
                      <div>Purchase Type</div>
                      <span className="selected">{propertyAdTypeFilter}</span>
                    </div>

                    {openPropertyAdTypeOptions &&
                      propertyAdTypeOptions.map((item) => (
                        <div
                          className={`${
                            propertyAdTypeFilter === item.type
                              ? "selected-option pointer"
                              : "options pointer"
                          }`}
                          onClick={() => {
                            setPropertyAdTypeFilter(item.type);
                            //,setOpenPropertyAdTypeOptions(false);
                          }}
                        >
                          {item.type}
                        </div>
                      ))}

                    {/* ########### filter 2 ########### */}
                    <div
                      className={`property-type-filter pointer position-relative border-top ${
                        openProCategoryOptions ? "arrow-up" : "arrow-down"
                      }`}
                      onClick={() =>
                        setOpenProCategoryOptions(!openProCategoryOptions)
                      }
                    >
                      <div>Property Types</div>


                      <span className="selected">
                        {proCategoryFilter.length > 0 ? (
                          proCategoryFilter[0] +
                          (proCategoryFilter.length > 1
                            ? " + " + (proCategoryFilter.length - 1) + " more"
                            : "")
                        ) : (
                          <span className="text-danger ml-0"></span>
                        )}
                      </span>
                    </div>

                    {openProCategoryOptions &&
                      proCategoryOptions.map((item, index) => (
                        <div
                          className={`${
                            proCategoryFilter.includes(item.type)
                              ? "selected-check-box-option pointer"
                              : "check-box-options pointer"
                          }`}
                          onClick={() => handleToggleProCategory(item.type)}
                        >
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            //style={{ marginRight: 8 }}
                            checked={proCategoryFilter.includes(item.type)}
                          />

                          {item.type}
                        </div>
                      ))}

                    {/* ########### filter 3 ########### */}

                    <div
                      className={`property-type-filter pointer position-relative border-top ${
                        openProSubOptions ? "arrow-up" : "arrow-down"
                      }`}
                      onClick={() => setOpenProSubOptions(!openProSubOptions)}
                    >
                      <div>Property Sub Type</div>

                      <span className="selected">
                        {selectedSubTypeFilter.length > 0 ? (
                          selectedSubTypeFilter[0] +
                          (selectedSubTypeFilter.length > 1
                            ? " + " +
                              (selectedSubTypeFilter.length - 1) +
                              " more"
                            : "")
                        ) : (
                          <span className="text-danger ml-0"></span>
                        )}
                      </span>
                    </div>

                    {openProSubOptions && (
                      <div
                        className="sub-pro-type-wrapper"
                        style={{ height: openProSubOptions ? "400px" : "auto" }}
                      >
                        {selectedSubTypeFilter.length === 17 ? (
                          <div
                            onClick={() => setSelectedSubTypeFilter([])}
                            className="selected-check-box-option pointer"
                          >
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              //style={{ marginRight: 8 }}
                              checked={true}
                            />
                            {/* <IconMinus width={16} height={16} className="mr-1" stroke={1} /> */}
                            Deselect All
                          </div>
                        ) : (
                          <div
                            onClick={handleAllSubTypes}
                            className="check-box-options pointer"
                          >
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              //style={{ marginRight: 8 }}
                              checked={false}
                            />
                            {/* <IconPlus width={16} height={16} className="mr-1" /> */}
                            Select All
                          </div>
                        )}

                        {propertySubTypeOptions.map((item, index) =>
                          proCategoryFilter.includes(item.parent_type) ||
                          proCategoryFilter.length === 0 ? (
                            <div
                              className={`${
                                selectedSubTypeFilter.includes(item.type)
                                  ? "selected-check-box-option pointer"
                                  : "check-box-options pointer"
                              }`}
                              onClick={() => handleProSubTypeToggle(item.type)}
                            >
                              <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                //style={{ marginRight: 8 }}
                                checked={selectedSubTypeFilter.includes(
                                  item.type
                                )}
                              />

                              {item.type}
                            </div>
                          ) : (
                            <div
                              className={`${
                                selectedSubTypeFilter.includes(item.type)
                                  ? "selected-check-box-option blocked-pointer dis-color "
                                  : "check-box-options blocked-pointer dis-color"
                              }`}
                              //onClick={() => handleProSubTypeToggle(item.type)}
                            >
                              <Checkbox
                                disabled
                                icon={icon}
                                checkedIcon={checkedIcon}
                                //style={{ marginRight: 8 }}
                                checked={selectedSubTypeFilter.includes(
                                  item.type
                                )}
                              />

                              {item.type}
                            </div>
                          )
                        )}
                      </div>
                    )}
                    {/* ########### filter 4 ########### */}
                    <div
                      className={`property-type-filter pointer position-relative border-top ${
                        openFurnishingOptions ? "arrow-up" : "arrow-down"
                      }`}
                      onClick={() =>
                        setOpenFurnishingOptions(!openFurnishingOptions)
                      }
                    >
                      <div>Furnishing Status</div>

                      <span className="selected">
                        {furnishingStatusFilter.length > 0 ? (
                          furnishingStatusFilter[0] +
                          (furnishingStatusFilter.length > 1
                            ? " + " +
                              (furnishingStatusFilter.length - 1) +
                              " more"
                            : "")
                        ) : (
                          <span className="text-danger ml-0"></span>
                        )}
                      </span>
                    </div>

                    {openFurnishingOptions &&
                      furnishingStatusOptions.map((item, index) => (
                        <div
                          className={`${
                            furnishingStatusFilter.includes(item.type)
                              ? "selected-check-box-option pointer"
                              : "check-box-options pointer"
                          }`}
                          onClick={() => handleToggleFurnishing(item.type)}
                        >
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            //style={{ marginRight: 8 }}
                            checked={furnishingStatusFilter.includes(item.type)}
                          />

                          {item.type}
                        </div>
                      ))}

                    {/* ########### filter 5 ########### */}

                    <div
                      className={`property-type-filter pointer position-relative border-top ${
                        openAuthorityOptions ? "arrow-up" : "arrow-down"
                      }`}
                      onClick={() =>
                        setOpenAuthorityOptions(!openAuthorityOptions)
                      }
                    >
                      <div>Authority Approved</div>

                      <span className="selected">
                        {authorityApprovedFilter.length > 0 ? (
                          authorityApprovedFilter[0] +
                          (authorityApprovedFilter.length > 1
                            ? " + " +
                              (authorityApprovedFilter.length - 1) +
                              " more"
                            : "")
                        ) : (
                          <span className="text-danger ml-0"></span>
                        )}
                      </span>
                    </div>

                    {openAuthorityOptions &&
                      authorityApprovedOptions.map((item, index) => (
                        <div
                          className={`${
                            authorityApprovedFilter.includes(item.type)
                              ? "selected-check-box-option pointer"
                              : "check-box-options pointer"
                          }`}
                          onClick={() => handleToggleAuthority(item.type)}
                        >
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            //style={{ marginRight: 8 }}
                            checked={authorityApprovedFilter.includes(
                              item.type
                            )}
                          />

                          {item.type}
                        </div>
                      ))}

                    {/* ########### filter 6 ########### */}

                    <div
                      className={`property-type-filter pointer position-relative border-top ${
                        openPossessionOptions ? "arrow-up" : "arrow-down"
                      }`}
                      onClick={() =>
                        setOpenPossessionOptions(!openPossessionOptions)
                      }
                    >
                      <div>Possession availability</div>

                      <span className="selected">
                        {possessionAvailableFilter.length > 0 ? (
                          possessionAvailableFilter[0] +
                          (possessionAvailableFilter.length > 1
                            ? " + " +
                              (possessionAvailableFilter.length - 1) +
                              " more"
                            : "")
                        ) : (
                          <span className="text-danger ml-0"></span>
                        )}
                      </span>
                    </div>

                    {openPossessionOptions &&
                      possessionAvailableOptions.map((item, index) => (
                        <div
                          className={`${
                            possessionAvailableFilter.includes(item.type)
                              ? "selected-check-box-option pointer"
                              : "check-box-options pointer"
                          }`}
                          onClick={() => handleTogglePossession(item.type)}
                        >
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            //style={{ marginRight: 8 }}
                            checked={possessionAvailableFilter.includes(
                              item.type
                            )}
                          />

                          {item.type}
                        </div>
                      ))}

                    {/* ########### filter 7 ########### */}
                    <div
                      className={`switch-filter pointer position-relative border-top `}
                    >
                      <div>Properties With Photos</div>
                      <div>
                        <Switch
                          size="small"
                          onClick={() => setProWithPhotos(!proWithPhotos)}
                        />
                      </div>
                    </div>

                    {/* ########### filter 8 ########### */}
                    <div
                      className={`switch-filter pointer position-relative border-top `}
                    >
                      <div>Parking Available</div>
                      <div>
                        <Switch
                          size="small"
                          onClick={() => setProWithParking(!proWithParking)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Sidebar2 handleForSale={handleForSale} handleForRent={handleForRent} />

               

              

                {/* {ad2?.length > 0 && (
                  <div>
                    <div className="p-1 shadow ad-2-wrapper">
                      <div className=" ad-2">
                        
                        <AllPropertySlider
                          className="ad-section"
                          slides={ad2}
                        />
                      </div>
                    </div>
                  </div>
                )} */}
                {/* {ad1?.length > 0 && (
                  <div className="p-1 shadow ">

                  
                
                  
                  <AdSlider3 className="ad-section" slides={ad1} />
                
              
              </div>
                )}  */}
                {/* ad section end */}

                {/* <div>
                  <CreateAgentAd />
                </div> */}

                </div>

  )
}

export default SideBar
