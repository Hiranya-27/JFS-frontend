// import React from 'react';
// import './about.css';
// import { Link } from 'react-router-dom';

// function About() {
//   return (
//     <div>
//       <div className="aboutcard">
//         <div className="aboutnav">
//           <Link to="/home">HOME</Link>
//         </div>
//         <br />
//         <br />
//         <br />
//         <h2 className="abouth2"> ABOUT US!!</h2>
//         <br/>
//         <p className="aboutp">
//         Welcome to our learning website! We are dedicated to providing you with a rich and engaging learning experience. Our mission is to empower learners of all ages and backgrounds to acquire new knowledge, develop valuable skills, and pursue their educational goals.
//         <br/><br/>
// Here at Learning Management System, we believe that learning is a lifelong journey, and we strive to make that journey both enjoyable and rewarding. Whether you're a student looking to supplement your classroom learning, a professional seeking to enhance your skills, or simply someone who has a thirst for knowledge, we have something for everyone.
// <br/><br/>
// Our team is comprised of passionate educators, subject matter experts, and technology enthusiasts who are committed to delivering high-quality educational content. We carefully curate our materials to ensure they are accurate, up-to-date, and aligned with the latest research and best practices in education.
// <br/><br/>
// Through our user-friendly platform, you'll have access to a wide range of courses, tutorials, articles, and interactive resources. We cover various subjects, including but not limited to science, mathematics, literature, history, languages, computer programming, arts, and personal development. Whether you prefer video lessons, interactive quizzes, or written content, we offer diverse learning formats to cater to different learning styles.
//         </p>
//         <br />
//         {/* <p className="aboutp">-- Compare pricing for top software side-by-side without endless internet searches.</p> */}
//         {/* <br />
//         <p className="aboutp">-- Get detailed product insights tailored to your records, backed by data and strategy.</p>
//         <br />
//         <p className="aboutp">-- Check out our Category Leaders to find the best of the best advisors</p>
//         <br />
//         <p className="aboutp">-- Read and watch over 1M+ verified reviews from learners</p>
//         <br />
//         <p className="aboutp">-- Explore resources with advice on finding and evaluating software in our extensive library of the learners.</p>
//         <br /> */}
//         {/* <p className="abouth2">MILESTONES</p>
//         <p className="aboutp">(2023)-- CREATED</p>
//         <p className="aboutp">TO BE CONTINUED..</p> */}
//       </div>
//     </div>
//   );
// }

// export default About;



import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
function About(){
  return (
<>
  <section>
      <Link to="/home">HOME</Link>
    <div className="lp">
      <div className="hero-content-zone header-tile box-drk-green">
        <h1 className="heading-style-thin">About Us</h1>

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
          <strong>About Courses</strong>
        </h3>
        
        <p>
        Welcome to our learning website! We are dedicated to providing you with a rich and engaging learning experience. Our mission is to empower learners of all ages and backgrounds to acquire new knowledge, develop valuable skills, and pursue their educational goals
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
          <strong>Quizes</strong>
        </h3>
        <p>
        Here at Learning Management System, we believe that learning is a lifelong journey, and we strive to make that journey both enjoyable and rewarding. Whether you're a student looking to supplement your classroom learning, a professional seeking to enhance your skills, or simply someone who has a thirst for knowledge, we have something for everyone.
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
export default About;