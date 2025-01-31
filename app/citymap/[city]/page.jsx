import Link from "next/link";
import SideBar2 from "@/components/sidebar2/SideBar2";
import pool from "@/app/libs/mysql";

const getData = async (city) => {
  try {
    const db = await pool;
    const q = "SELECT *  FROM city_map_module where map_city = ?;";
    const [data] = await db.query(q, city);

    const q1 =
      "SELECT distinct map_category FROM city_map_module where map_city = ?";
    const [subCatData] = await db.query(q1, city);

    const q2 = `SELECT distinct map_city FROM city_map_module`;
    const [cityData] = await db.query(q2);

    return { data: data, subCatData: subCatData, cityData: cityData };
  } catch (err) {
    console.log("err : ", err);
    return err;
  }
};

export const metadata = {
  title: "Propertyease - Kurukshetra Maps",
  description:
    "Discover detailed maps for Kurukshetra, including popular locations like Shree Vardhman City, Kohinoor City, and various HUDA sectors. Explore maps for Sector 2, Sector 3, Sector 4, Sector 5, Sector 7, Sector 8, Sector 9, and others to find key landmarks, residential, and commercial areas across Kurukshetra.",
};

const CityMaps = async ({ params }) => {
  const { city } = await params;
  const { data: data, subCatData, cityData } = await getData(city);
  return (
    <div>
      <div style={{ display: "none" }}>
        {data.map((item, index) => (
          <a key={index} href={`${process.env.webURL}/mapImages/${item.map_image}`}>
            {item.map_image}
          </a>
        ))}
      </div>
      <div className="main padding-top">
        <section className="main-content">
          <div className="container">
            <div className="title">
              <h2>
                {city} Maps
                <span className="ml-2 numberProperties">{data.length}</span>
              </h2>
              <div className="row ">
                <div className="col-md-9">
                  {subCatData.map((subCat) => (
                    <div key={subCat.map_category} className="px-2 pb-2 w-100 ">
                      <div className="map-cat-heading">
                        {subCat.map_category}
                      </div>
                      <div className="row pb-4">
                        {data
                          .filter((i) => i.map_category === subCat.map_category)
                          .map((item, index) => (
                            <div key={index} className="col-md-6 py-4">
                              <Link
                                href={`${process.env.webURL}/mapImages/${item.map_image}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  width="100%"
                                  height="85%"
                                  src={`${process.env.webURL}/mapImages/${item.map_image}`}
                                  alt={`Checkout ${
                                    item.map_sub_category !== "Kurukshetra"
                                      ? item.map_sub_category + " Kurukshetra"
                                      : ""
                                  } map. Explore everything about ${
                                    item.map_sub_category
                                  }`}
                                />
                              </Link>
                              <div className="pt-2 sub-heading">
                                {item.map_sub_category}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-3 d-flex flex-column gap-3">
                  {cityData.length > 1 && (
                    <div>
                      <div className="p-1 shadow">
                        <div className="p-3 font-weight-bold text-black">
                          Other Maps
                        </div>
                        {cityData.map((item, index) => (
                          <Link href={`/citymap/${item.map_city}`} key={index}>
                            <div className="d-flex justify-content-between px-3 py-2">
                              <div>{item.map_city} Maps</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  <SideBar2 />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CityMaps;
