// import React from "react";
// import './Course.css';
// import { Link } from "react-router-dom";
// // import { Link } from "react-router-dom";
// function Course(){
//     return(
// <>
//   <div className="menu-btn">
//     <i className="fas fa-bars fa-2x" />
//   </div>
//   <div className="container">
//     {/* Nav */}
//     <nav className="main-nav">
//       <img
//         src="https://tse2.mm.bing.net/th?id=OIP.JBfdU3sdOBTXUIzz5hr18AHaF7&pid=Api&P=0hh&h=180"
//         alt="LMS"
//         className="logo"
//       />
//       <ul className="main-menu-one">
      
//         <h1 text-align="center">COURSES & QUIZES</h1>
      
//       </ul>
//       <ul className="right-menu">
//         <li>
//           <a href="#">
//             <i className="fas fa-search" />
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fas fa-shopping-cart" />
//           </a>
//         </li>
//       </ul>
//     </nav>
    
//     <section className="home-cards">
//       <div>
//         <img src="https://tse2.mm.bing.net/th?id=OIP.TqepA3GdLnqY-LenzLP4jAHaEc&pid=Api&P=0&h=180" alt="" />
//         <h3>Python for Data Analysis</h3>
//         <p>
//           Complete Data Science Training: Mathematics, Statistics, Python,Advanced Statistics
//         </p>
//         <Link to ="/Quiz">Take Quiz</Link>
//       </div>
//       <div>
//         <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
//         <h3>Modern Artificial Intelligence</h3>
//         <p>
//           Harness the power of AI to solve practical and real world business problems.
//         </p>
//         <a href="#">
//           Join Now <i className="fas fa-chevron-right" />
//         </a>
//       </div>
//       <div>
//         <img src="https://tse2.mm.bing.net/th?id=OIP.brjYKZ2j0YMWYv1DvTA7FAHaES&pid=Api&P=0&h=180" alt="" />
//         <h3>Deep Learning</h3>
//         <p>
//           The most in-depth course on recommedation systems with Deep Learning.
//         </p>
//         <a href="#">
//           Join Now <i className="fas fa-chevron-right" />
//         </a>
//       </div>
//       <div>
//         <img src="https://tse3.mm.bing.net/th?id=OIP.r9w95AXyCGlkP8geYmPyJwHaEK&pid=Api&P=0&h=180" alt="" />
//         <h3>Fundamentals of Deep Learning</h3>
//         <p>
//           This course will start your career in Data Science
//         </p>
//         <a href="#">
//           Join Now <i className="fas fa-chevron-right" />
//         </a>
//       </div>
//     </section>
    
//     <section className="home-cards">
//       <div>
//         <img src="https://i.ibb.co/zVqhWn2/card5.png" alt="" />
//         <h3>The Secrets of Communicationn</h3>
//         <p>Learn to remove bad social programming, build expert social skills, and create a natural state of sparkling confidence.</p>
//         <a href="#">
//           Join Now <i className="fas fa-chevron-right" />
//         </a>
//       </div>
//       <div>
//         <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
//         <h3>Communication Skills: Effective Business Communication</h3>
//         <p>
//         A Comprehensive Course on Business Communication and Communication Skills.Become more confident holding conversations about difficult topics.
//         </p>
//         <a href="#">
//           Join Now <i className="fas fa-chevron-right" />
//         </a>
//       </div>
//       <div>
//         <img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
//         <h3>The Complete Computer Basics Guide for Beginners: 2023</h3>
//         <p>Computer Basics, Basic Computer Course, Windows 11 Basics, Microsoft Word, PowerPoint, Excel, Basic Computer Skills,2023</p>
//         <a href="#">
//           Join Now <i className="fas fa-chevron-right" />
//         </a>
//       </div>
//       <div>
//         <img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
//         <h3>Explore Kubernetes</h3>
//         <p>
//           Learn how Kubernetes works and get started with cloud native appdevelopment today.Learn Kubernetes in simple, easy and fun way with hands-on coding exercises.
//         </p>
//         <a href="#">
//           Join Now <i className="fas fa-chevron-right" />
//         </a>
//       </div>
//     </section>
   
//   </div>
  
// </>
//     );
// }
// export default Course;


import React, { useEffect, useState } from "react";
import axios from "axios";
import './Course.css';
import { Link } from "react-router-dom";

function Course() {
  // const [courses, setCourses] = useState([]);

  // useEffect(() =>
  //  {
  //   // Fetch courses from the backend API
  //   axios.get("/api/courses")
  //     .then(response =>
  //        {
  //       setCourses(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching courses:", error);
  //     });
  // }, []);
  const[posts,setPosts]=useState([]);
  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8080/api/getcourse', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setPosts(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  return (
    <>
      {/* Your existing JSX code here */}
      <div className="menu-btn">
        <i className="fas fa-bars fa-2x" />
      </div>
      <div className="container">
        {/* Rest of the JSX code here */}
        {/* Nav */}
    <nav className="main-nav">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.JBfdU3sdOBTXUIzz5hr18AHaF7&pid=Api&P=0hh&h=180"
        alt="LMS"
        className="logo"
      />
      <ul className="main-menu-one">
      
        <h1 text-align="center">COURSES & QUIZES</h1>
      
      </ul>
      {/* <ul className="right-menu">
        <li>
          <a href="#">
            <i className="fas fa-search" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-shopping-cart" />
          </a>
        </li>
      </ul> */}
    </nav>
        <section className="home-cards">
          {/* Map through the courses array and display course data */}
          {posts.map(course => (
            <div key={course.id}>
              {/* <img src={course.image} alt={course.title} /> */}
              <img src={"book.jpg"} // Provide a default image URL in case post.src is not available
            alt="Bus"
            // style={styles.image}
            onError={(e) => {
              e.target.src = "src/Images/education.jpg"; // If the actual image fails to load, display the default image
              e.target.alt = "Default Bus";
            }}
          />
          <div className="abc">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              
              <Link to="/Quiz">Take Quiz</Link>
             
              </div>
            </div>
          ))}
        </section>
        {/* Rest of the JSX code here */}
      </div>
      {/* Rest of the JSX code here */}
    </>
  );
}

export default Course;
