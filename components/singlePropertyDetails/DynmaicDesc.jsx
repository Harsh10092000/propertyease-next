import React from 'react'

const DynmaicDesc = ({ data }) => {
    console.log(data)
    const propertyType1 = data !== undefined && [
        {
          type: "Apartment",
          description: `${data.pro_area_size} ${data.pro_area_size_unit} ${
            data.pro_type ? data.pro_type.split(",")[0] : ""
          } for ${data.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${
            data.pro_locality ? data.pro_locality + ", " : ""
          }${data.pro_sub_district ? data.pro_sub_district + ", " : ""}${
            data.pro_city
          } is available. The open floor plan is 
          bright and airy, with huge windows that let in tons of natural light. The kitchen is a chef's dream - gorgeous countertops and 
          enough space to cook for a crowd comfortably. 
          It is in the city's heart but feels like a relaxing urban oasis. Contact us now to make this apartment yours. 
          `,
        },
        {
          type: "Independent House",
          description: `This stunning ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${data.pro_city} is a total 
          showstopper when you pull up. Its open layout is perfect for entertaining, with huge windows that flood the place with natural 
          light. 
          The kitchen will make you want to quit your job and become a chef. It has premium appliances and a gorgeous island just for 
          hosting parties. 
          Upstairs, the master suite is a private oasis with a nice bathroom and comfortable surroundings. 
          This beauty checks every box in one of the most sought-after neighborhoods.
          `,
        },
    
        {
          type: "Builder Floor",
          description: `This ${data.pro_area_size} ${data.pro_area_size_unit} ${
            data.pro_type ? data.pro_type.split(",")[0] : ""
          } for ${data.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${
            data.pro_locality ? data.pro_locality + ", " : ""
          }${data.pro_sub_district ? data.pro_sub_district + ", " : ""}${
            data.pro_city
          } is lovely. It's a blank slate ready for you to work your magic and make it 
        completely yours. The open layout is perfect for getting that creativity flowing - will you go modern and sleek or 
        have more of a cozy vibe? And with those oversized windows, you'll have natural light for days. 
    
        All the best shops, restaurants, you name it, it is nicely connected to all the necessary places. 
        Don't miss this opportunity to build your dream place from the ground up. This baby's ready for you to make it home.
        `,
        },
        {
          type: "Farm HouseRaw House",
          description: `Checkout the ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${
            data.pro_city
          }, it is an absolute blank canvas ready for your creativity! It 
        needs some TLC, but that's the fun part. Imagine stripping it down and making it exactly how you want - a concept kitchen with a 
        sweet island for all your hosting needs, a cozy living room with amazing built-ins, and maybe even an extra bedroom for your 
        at-home gym. 
    
        The possibilities are endless when you start from scratch! The location can't be beat—a quiet residential street minutes from 
        all the action. I'm telling you, get in on this fixer-upper before somebody else scoops it up. Roll up those sleeves and make 
        this place your masterpiece!
        `,
        },
        {
          type: "Retirement Community",
          description: `Discover a vibrant community designed exclusively for those seeking an active and 
        enriching retirement lifestyle. This ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${
            data.pro_city
          } offers an array of amenities tailored to promote well-being and social connections. 
    
        Enjoy a maintenance-free lifestyle in beautifully appointed homes while enjoying access to the best recreational facilities. 
        Experience a carefree and fulfilling retirement in this warm and welcoming community.
        `,
        },
        {
          type: "Studio Apartment",
          description: `A studio apartment is a compact living space typically featuring a combined bedroom, 
        living room, kitchen area, and separate bathroom. It's designed to maximize functionality in a limited space, offering individuals 
        or couples a convenient and often affordable housing option.
    
        This ${data.pro_area_size} ${data.pro_area_size_unit} ${
            data.pro_type ? data.pro_type.split(",")[0] : ""
          } for ${data.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${
            data.pro_locality ? data.pro_locality + ", " : ""
          }${data.pro_sub_district ? data.pro_sub_district + ", " : ""}${
            data.pro_city
          } will meet all your expectations and requirements. If you are interested, Contact us now.
        `,
        },
        {
          type: "Residential Land",
          description: `Check-out ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${data.pro_city}.
         Its neighborhood is great for a dream home. Located near the supermarket. A lovely backyard was recently renovated, with a 
         patio ideal for entertaining guests. Good schools, parks, and shops are nearby. Whether you are moving in tomorrow or today, 
         this house is ready to be occupied. If you want a residential property at a key location, contact us now!
        `,
        },
        {
          type: "Commercial Land",
          description: `Great ${data.pro_area_size} ${data.pro_area_size_unit} ${
            data.pro_type ? data.pro_type.split(",")[0] : ""
          } for ${data.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${
            data.pro_locality ? data.pro_locality + ", " : ""
          }${data.pro_sub_district ? data.pro_sub_district + ", " : ""}${
            data.pro_city
          } in a 
        convenient spot. Lots of parking spaces. Easy to see from the road. Flexible open spaces inside. Secure entry. Close to highways 
        and shopping areas. Perfect place for your executing your commercial goals 
    
        Great commercial Property is available at key locations at affordable rates! Don't miss this fantastic opportunity!
        `,
        },
        {
          type: "Industrial Land",
          description: `Check out the ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${data.pro_city} set 
        aside for factories, warehouses, and other large workplaces. It is located in areas with good roads, power, and water for big 
        buildings and machinery. The lots are big enough to fit the manufacturing plants and storage facilities. 
    
        The highway's connectivity makes goods and products easily transportable. Contact us if you want to acquire the perfect piece 
        of land to set up an industry. 
        `,
        },
        {
          type: "Agricultural Land",
          description: `When we refer to agricultural land, we mean areas where people grow crops, raise livestock, and 
          do other farming activities. Get the ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${data.pro_city} in 
          rural or semi-rural settings. These lands have ample space for seedbeds and pasturing. 
          Zoning laws prevent non-agricultural uses on these lands to maintain the purpose and the continuation of food production 
          in an agricultural economy. If you are interested in this land, contact us now. 
        `,
        },
        {
          type: "Farm House Land",
          description: `${data.pro_area_size} ${data.pro_area_size_unit} ${
            data.pro_type ? data.pro_type.split(",")[0] : ""
          } for ${data.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${
            data.pro_locality ? data.pro_locality + ", " : ""
          }${data.pro_sub_district ? data.pro_sub_district + ", " : ""}${
            data.pro_city
          } is perfect for a farmhouse that combines residential living with agricultural 
        activities. These properties often feature a primary dwelling, such as a traditional farmhouse or a modern home, surrounded by 
        ample acreage suitable for farming operations. 
        Farmhouse properties offer a blend of rural tranquility and self-sustaining agricultural lifestyle, appealing to those 
        seeking a connection to the land and a taste of country living.
        `,
        },
        {
          type: "Retail Showroom",
          description: `A retail showroom is a dedicated space where products or merchandise are displayed and 
        showcased to potential customers. It is a physical location for retailers to present their offerings, allowing customers to
         view, inspect, and experience the products in person. 
        Check this amazing place ${data.pro_area_size} ${data.pro_area_size_unit} ${
            data.pro_type ? data.pro_type.split(",")[0] : ""
          } for ${data.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${
            data.pro_locality ? data.pro_locality + ", " : ""
          }${data.pro_sub_district ? data.pro_sub_district + ", " : ""}${
            data.pro_city
          }, for a perfect 
        start to your business. Contact us for more details.
        `,
        },
        {
          type: "Commercial Building",
          description: `Rare opportunity to own a well-maintained ${
            data.pro_area_size
          } ${data.pro_area_size_unit} ${
            data.pro_type ? data.pro_type.split(",")[0] : ""
          } for ${data.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${
            data.pro_locality ? data.pro_locality + ", " : ""
          }${data.pro_sub_district ? data.pro_sub_district + ", " : ""}${
            data.pro_city
          }. This versatile building features spacious open floor plans and ample natural 
          lighting, making it suitable for various businesses. 
        With its strategic location, high visibility, and convenient access to major transportation routes, this property offers 
        excellent exposure and accessibility for your thriving enterprise. Don't miss this chance to secure a prime commercial space 
        that caters to your business needs.
        `,
        },
        {
          type: "Office Complex",
          description: `Check this prime ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${
            data.pro_city
          }, It is a real gem in the city's heart. Its sleek, modern design 
        and floor-to-ceiling windows make it a bright and inspiring workplace. The open layouts encourage collaboration, while 
        the private offices provide plenty of space for heads-down focus. 
        The location can't be beat, it is perfect for all your office needs. If you want to upgrade your office space, this complex 
        checks all the boxes.
        `,
        },
        {
          type: "Software Technology Park",
          description: `This innovative ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${data.pro_city} is home to some of the brightest minds in tech. 
        The vibe is amazing, with startups and established companies collaborating under one roof. The spaces are designed for productivity. 
        Whether you're a coding guru or the next Zuckerberg, this park has everything you need to improve your software game. 
        For more details, please contact us. 
        `,
        },
        {
          type: "Warehouse",
          description: `This ${data.pro_area_size} ${data.pro_area_size_unit} ${
            data.pro_type ? data.pro_type.split(",")[0] : ""
          } for ${data.pro_ad_type === "Rent" ? "Rent" : "Sale"} in ${
            data.pro_locality ? data.pro_locality + ", " : ""
          }${data.pro_sub_district ? data.pro_sub_district + ", " : ""}${
            data.pro_city
          } warehouse means business. With its prime location right off the highway, you 
        have straight shipping and receiving connectivity. 
        It's not just massive—it's smart, too. It has top-notch security systems and climate-controlled areas to protect your goods. 
        Whether you're stocking up on inventory or fulfilling orders left and right, this place has you covered. For a warehouse that 
        works as hard as you do, drive on over and check it out.
        `,
        },
        {
          type: "Industrial Estate",
          description: `Checkout this ${data.pro_area_size} ${
            data.pro_area_size_unit
          } ${data.pro_type ? data.pro_type.split(",")[0] : ""} for ${
            data.pro_ad_type === "Rent" ? "Rent" : "Sale"
          } in ${data.pro_locality ? data.pro_locality + ", " : ""}${
            data.pro_sub_district ? data.pro_sub_district + ", " : ""
          }${
            data.pro_city
          }, made for hard-working contractors like you. Its location is 
        prime real estate with easy access to all the major roads and highways. The utilities include heavy-duty power, water, and 
        sewage. You name it—this place can handle it all. 
        Security is also high-quality—24/7 patrols and world-class systems protect your assets. Whether you're in construction, 
        manufacturing, or the trades, this estate has everything a thriving industrial business needs. For more details, contact us. 
        `,
        },
      ];
  return (
    <div className="property-more-detail">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="details">
                              <div className="row">
                                {data.pro_type && (
                                  <div className="col-md-12">
                                    <div className="more-detail-heading">
                                      More About this Property
                                    </div>

                                  

{propertyType1.map(
                                      (item) =>
                                        data.pro_type.split(",")[0] ===
                                          item.type && <p>{item.description}</p>
                                    )}

                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  )
}

export default DynmaicDesc
