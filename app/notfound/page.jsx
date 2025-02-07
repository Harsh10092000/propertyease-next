import React from "react";
import Link from "next/link";
const NotFound = () => {
  return (
    <div>

        <title>Propertyease - 404 </title>

      <div className="main-content">
        <div className="full-width-header">

        </div>
        <div className="col-md-12 error-content">
          <div className="error-pict">
            <img src="/images/404-error.webp" alt="dev logo" />
          </div>
          <Link href="/" className="btn btn-primary mt-5">
            Go To Home page
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NotFound;
