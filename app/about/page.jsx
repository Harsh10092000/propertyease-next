import React from "react";

export const metadaat = {
  title : 'Propertyease - About Us',
  description : 'Discover who we are at Propertyease.in, a trusted real estate platform dedicated to helping you find your perfect property. Learn about our team, mission, and commitment to providing top-notch real estate services in your area.'
}

const About = () => {
  return (
    <div>
   
      <div className="container">
        <section className="main-content">
          <div className="aboutus-content">
            <div className="col-md-12">
              <h2>About Us</h2>
              <p>
                Propertyease.in is a registered website founded in 2023, with
                the sole mission and objective of simplifying the transparent
                process of selling and buying property. Our purpose is to start
                this website to minimize the gap between seller and buyer and
                provide them convenience in their choice to decide about the
                property. For sellers, we find out the potential buyers from
                their properties and also offer them to list their property for
                free on a website and also offer them to set up a 3D View or
                virtual tour of their property.
              </p>
              <p>
                Also, We help buyers to search out a list of properties on a
                website or also to show them the first 3DView or virtual tours
                of the property before visiting sellers, which helps them to
                minimize the cost. And once they like the virtual tour of the
                property, then we arrange the physical meeting with the sellers.
              </p>
              <p>
                <b>Our 3 core working principles:</b>
              </p>
              <ol>
                <li>
                  <strong>Transparency:</strong> Our whole process is fully
                  transparent and ethical ,and you will be getting updates in
                  every single step.
                </li>
                <li>
                  <strong>Assistance:</strong> We assist our clients from deal
                  start/meeting to execution/completion and offer them an
                  extended range of services to give them a better experience.
                </li>
                <li>
                  <strong>Convenience:</strong> We constantly innovate and find
                  new ways to make property search easier for you. Our 3D Floor
                  Plans &amp; Virtual Tours ensure that you get a feel of the
                  property without even having to visit it.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    
    </div>
  );
};

export default About;