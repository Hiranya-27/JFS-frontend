// import React from 'react';
// import './contact.css';
// import { Link } from 'react-router-dom';

// function Contact() {
//   return (
//     <div>
//       <div className="aboutcard">
//         <div className="aboutnav">
//           <Link to="/home">HOME</Link>
//         </div>
//         <br />
//         <br />
//         <br />
//         <h2 className="abouth2"> TO CONTACT US</h2>
//         {/* <p className="aboutp">
//           Overwhelmed with endless software options and lackluster insights into the tools others in your industry love? We get it. That’s why at Our App, A Learning management management application is a software system designed to digitize and streamline the storage, organization, and retrieval of courses in healthcare settings. It serves as a central repository for course providers to store and manage educational information electronically, replacing traditional paper-based records.
//         </p> */}
       
//         <br />
//         <p className="aboutp">GoSkills </p>
//         <br/>
//         <p className="aboutp">12/45A</p>
//         <br/>
//         <p className="aboutp">Kuniyamuthur</p>
//         <br/>
//         <p className="aboutp">Coimbatore</p>
//         <br/>
//         <p className="aboutp">Mobile : 8975643467</p>
//         <br />
//         <p className="aboutp">Email : lms@gmail.com</p>
//         <br />
//         {/* <p className="aboutp">Address : 23A/345,Mount Road,
//         KniyamuthChennai</p>
//         <br /> */}
        
//         {/* <p className="aboutp">-- Explore resources with advice on finding and evaluating software in our extensive library of the learners.</p> */}
//         <br />
//         {/* <p className="abouth2">MILESTONES</p> */}
//         {/* <p className="aboutp">(2023)-- CREATED</p> */}
//         {/* <p className="aboutp">TO BE CONTINUED..</p> */}
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
function Contact(){
  return (
<>
  <section>
      <Link to="/home">HOME</Link>
    <div className="lp">
      <div className="hero-content-zone header-tile box-drk-green">
        <h1 className="heading-style-thin">Contact Us</h1>

      </div>
    </div>
  </section>
  <section className="feature-panel">
    <div className="box-mod-container">
      <div className="column">
        {/* <img
          className="icon"
          src="../src/Images/phone.png"
          alt="phone"
          width={100}
        /> */}
        <h3>
          <strong>General Enquiries</strong>
        </h3>
        
        <p>
          Phone:1300 410 272
          <br />
          Email: lms@gmail.com
          <br />
          <br />
          Office Hours: <br />
          Mon to Fri 9am to 7pm (AEST) <br />
          Saturday 9am to 1pm (AEST)
        </p>
      </div>
      <div className="column">
        {/* <img
          className="icon"
          src="/Media/NIBAU/icon/documents.svg"
          alt="documents"
          width={100}
        /> */}
        <h3>
          <strong>Claims</strong>
        </h3>
        <p>
          Phone: 1300 625 229
          <br />
          Telephone: +61 2 8263 0487
          <br />
          Email:{" "}
          
            lmdclaims@risks.com
        
          <br />
          <br />
          For information on submitting a claim visit the{" "}Office{" "}
        
        </p>
      </div>
      <div className="column">
        {/* <img
          className="icon"
          src="/Media/NIBAU/icon/Ambulance.svg"
          alt="ambulance"
          width={100}
        /> */}
        <h3>
          <strong>Head Office</strong>
        </h3>
        <p>
          Phone: +61 2 9234 3170
          <br />
          Telephone:
            +61 2 8256 1570
          {" "}
          <br />
          Email:{" "}
          travelassist@nib.com.au
          <br />
          <br /> For more information visit the{" "}Office
         {" "}
          
        </p>
      </div>
    </div>
  </section>
</>
  );
}
export default Contact;
