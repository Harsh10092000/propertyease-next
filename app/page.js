import Link from "next/link";
import { IconSend, IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import pool from "./libs/mysql";
//import Navbar from "../../components/navbar/Navbar";
//import Footer from "../../components/footer/Footer";

//import axios from "axios";
//import { Helmet } from "react-helmet";

//import Loader from "../../components/loader/Loader";
//import Dialog from "@mui/material/Dialog";
//import { regEx } from "../regEx";
//import { Snackbar } from "@mui/material";
//import { AuthContext } from "../../context/AuthContext";
//import { useContext } from "react";
// import PropertyCard2 from "@/components/propertyCard2/PropertyCard2";
// import RecentListHeader from "@/components/propertyCard2/RecentListHeader";
// import AllPropertyButton from "@/components/propertyCard2/AllPropertyButton";
import CtaSection from "@/components/index/CtaSection";
import TopPropertyPicks from "@/components/index/TopPropertyPicks";
import ExploreTypes from "@/components/index/ExploreTypes";
import Services from "@/components/index/Services";
import PostRequirment from "@/components/index/PostRequirment";
import AboutUs from "@/components/index/AboutUs";
import RecenetListed from "@/components/index/RecenetListed";
import HeroSection from "@/components/index/HeroSection";

export async function generateMetadata() {

    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      name: "Propertyease",
      url: "https://propertyease.in",
      datePosted: "2024-12-01",
      author: {
        "@type": "Organization",
        name: "Propertyease",
      },
      image: "https://propertyease.in/images/logo.webp",
      description:
        "Discover your dream property at PropertyEase.in! Explore a wide range of residential and commercial listings, from luxurious homes to affordable plots. Start your journey to find the perfect property today!",
      relatedLink: ["https://propertyease.in/allproperties"],
      significantLink: [
        "https://propertyease.in/allproperties",
        "https://propertyease.in/listing/residential",
        "https://propertyease.in/listing/commercial",
        "https://propertyease.in/listing/land",
        "https://propertyease.in/contactus",
        "https://propertyease.in/DC-Rates-2024-25.pdf",
        "https://propertyease.in/documentsneededtobuyproperty.pdf",
        "https://propertyease.in/citymap/Kurukshetra",
      ],
    };



  return {
    title: "Propertyease - Buy and Sell Property",
    description: "Discover your dream property at PropertyEase.in! Explore a wide range of residential and commercial listings, from luxurious homes to affordable plots. Start your journey to find the perfect property today!",
    openGraph: {
      type: 'website',  
      url: 'https://propertyease.in',
      title: "Propertyease - Buy and Sell Property",
      description: "We specialize in buying, selling, and renting properties. Find your perfect home with our expert guidance.",
      images: [{
        url: 'https://propertyease.in/images/default.webp',
        width: 1200,
        height: 630,
        alt: 'Propertyease - Buy and Sell Property'
      }]
    },
    metadataBase: new URL('https://propertyease.in'),
    alternates: {
      canonical: 'https://propertyease.in'
    },
    other: {
      'schema.org': JSON.stringify(schema)
    }
  };
}

const getData = async () => {
  try {
    const db = await pool;
    const q = `SELECT DISTINCT property_module_images.* , property_module.* , agent_data.agent_type as user_type, agent_data.agent_name , agent_data.agent_sub_district, agent_data.agent_city, agent_data.agent_state FROM property_module left join property_module_images on 
    property_module.pro_id = property_module_images.img_cnct_id left join (SELECT agent_type,user_cnct_id,agent_name ,agent_sub_district, agent_city, agent_state FROM agent_module) as agent_data on 
    property_module.pro_user_id = agent_data.user_cnct_id where pro_listed = 1 group by pro_id ORDER BY pro_id DESC`;
    const [rows] = await db.query(q);

    const q1 =
    "SELECT count(pro_type) as pro_sub_cat_number , pro_type FROM property_module where pro_listed = 1 group by pro_type";


    const [subCatCount] = await db.query(q1);
    //console.log(rows, subCatCount);
    return { data: rows, subData: subCatCount };
  } catch (err) {
    console.log("err : ", err);
    return err;
  }
};

const Index = async () => {
  const { data ,subData  } = await getData();
  // const { currentUser } = useContext(AuthContext);

  // const options = {
  //   items: 2,
  //   margin: 10,
  //   transitionStyle: "backSlide",
  //   loop: true,
  //   autoplay: true,
  //   autoplaySpeed: 500,
  //   autoplayTimeout: 1000,
  // };

  // function updateOptions() {
  //   if (window.innerWidth <= 768) {
  //     options.items = 1;
  //   } else {
  //     options.items = 2;
  //   }
  // }

  // updateOptions();
  // window.addEventListener("resize", updateOptions);

  const services = [
    {
      sub_heading: "Buy Property",
      content: `Your dream home awaits here.`,
      image: "images/services-icon-1.webp",
      link: "/allproperties",
      title: "Click to View All Properties",
      alt: `Buy Property on propertyease.in`,
    },
    {
      sub_heading: "Sell Property",
      content: `Sell fast with our help at a good cost.`,
      image: "images/services-icon-2.webp",
      link: "/addproperty",
      title: "List Property",
      alt: "Sale Property on propertyease.in",
    },
    {
      sub_heading: "Rent Property",
      content: `Find your perfect rental today.`,
      image: "images/services-icon-2.webp",
      link: "/addproperty",
      title: "List Property",
      alt: "Rent Property on propertyease.in",
    },
  ];

  const proType = [
    {
      heading: "Residential",
      image: "images/pro-type-1.webp",
      link: "/listing/residential",
      title: "Click to View All Residential Properties",
      alt: "Check out Residential properties on propertyease.in",
    },
    {
      heading: "Commercial",
      image: "images/pro-type-2.webp",
      link: "/listing/commercial",
      title: "Click to View All Commercial Properties",
      alt: "Check out Commercial properties on propertyease.in",
    },
    {
      heading: "Land",
      image: "images/pro-type-3.webp",
      link: "/listing/land",
      title: "Click to View All Land/Plots Properties",
      alt: "Check out Land properties on propertyease.in",
    },
  ];

  const directSearchButtons = [
    {
      heading: "Residential",
      image: "images/pro-type-resized-1.webp",
      link: "/listing/residential",
      title: "Click to View All Residential Properties",
      alt: "Check out the best Residential properties on propertyease.in",
    },
    {
      heading: "Commercial",
      image: "images/pro-type-resized-2.webp",
      link: "/listing/commercial",
      title: "Click to View All Commercial Properties",
      alt: "Check out best Commercial properties on propertyease.in",
    },
    {
      heading: "Land",
      image: "images/pro-type-resized-3.webp",
      link: "/listing/land",
      title: "Click to View All Land/Plots Properties",
      alt: "Check out best Land properties on propertyease.in",
    },
    {
      heading: "Buy",
      image: "images/services-icon-resized-1.webp",
      link: "/allproperties",
      title: "Click to View All Properties",
      alt: `Buy Properties on propertyease.in`,
    },
    {
      heading: "Rent",
      image: "images/services-icon-resized-2.webp",
      link: "/addproperty",
      title: "List Property",
      alt: "Rent House on propertyease.in",
    },
    {
      heading: "List Property",
      image: "images/services-icon-resized-2.webp",
      link: "/addproperty",
      title: "List Property",
      alt: "Sale propeties on propertyease.in",
    },
  ];

  const propertyTypeOptions = [
    { type: "All Properties" },
    { type: "Residential" },
    { type: "Commercial" },
    { type: "Land" },
  ];

  const propertyAdTypeOptions = [
    { type: "All Properties" },
    { type: "Sale" },
    { type: "Rent" },
  ];

  // const [subData, setSubData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(process.env.webURL+ `/api/pro/fetchPropertySubCatNo`)
  //     .then((res) => {
  //       setSubData(res.data);
  //     });
  // }, []);

  // const [proData, setProData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(process.env.webURL+ "/api/pro/fetchPropertyData")
  //     .then((res) => {
  //       setProData(res.data);
  //       //setSkeleton(false);
  //     });
  // }, []);

  // const [open, setOpen] = useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   if (subscribedUser !== true) {
  //     const timer = setTimeout(() => {
  //       setOpen(false);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [subscribedUser]);

  // const [popupData, setPopupData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  // });

  // const [emailError, setEmailError] = useState(true);
  // useEffect(() => {
  //   if (!regEx[0].emailRegex.test(popupData.email)) {
  //     setEmailError(true);
  //   } else {
  //     setEmailError(false);
  //   }
  // }, [popupData.email]);

  // const [dupEntry, setDupEntry] = useState("");
  // const [subError, setSubError] = useState(false);
  // const handleSubmit = async () => {
  //   setLoader(true);
  //   try {
  //     await axios.post(
  //       process.env.webURL+ "/api/maildigest/addSubscriberData",
  //       popupData
  //     );
  //     setLoader(false);
  //     setOpen(false);

  //     setPopupData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     err.response.data.code === "ER_DUP_ENTRY"
  //       ? setDupEntry("Already Subscribed ")
  //       : setSubError(true);
  //     setLoader(false);
  //   }
  // };
  // const [openSubSnack, setOpenSubSnack] = useState(false);
  // const [loader, setLoader] = useState(false);
  // const [step, setStep] = useState(false);
  // const handleStep = () => {
  //   if (
  //     popupData.name !== "" &&
  //     popupData.phone.length > 9 &&
  //     popupData.phone.length < 11 &&
  //     emailError === false
  //   ) {
  //     setStep(false);

  //     handleSubmit();
  //   } else {
  //     setStep(true);
  //   }
  // };

  return (
    <div>
      {/* <Navbar /> */}
      {/* {loader ? <Loader /> : ""} */}

      <div>
        <HeroSection
          propertyTypeOptions={propertyTypeOptions}
          directSearchButtons={directSearchButtons}
          propertyAdTypeOptions={propertyAdTypeOptions}
          proData={data}
        />

        <RecenetListed data={data} />

        <section className="most-view-Property mt-5 mb-5">
          <div className="container"></div>
        </section>

        <AboutUs /> 
        <PostRequirment />
        <Services services={services} />
        <ExploreTypes proType={proType} data={data} />
        <TopPropertyPicks subData={subData} />
        <CtaSection />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
