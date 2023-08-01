import React from 'react';
import './review.css';
import { Link } from 'react-router-dom';

function Review() {
  return (
    <div>
      <div className="aboutcard">
        <div className="aboutnav">
          <Link to="/home">HOME</Link>
        </div>
        <br />
        <br />
        <br />
        <h2 className="abouth2">REVIEWS</h2>
        <br/>
        <p className="aboutp">
        Online Learning Platforms, or online course platforms, provide an architecture to create online courses and other educational products.
        </p>
        <br />
        <p className="aboutp">Online Learning platforms are used by businesses, educators, or solopreneurs to create, author, and/or self-publish educational material. Some provide an existing marketplace on which to sell online courses or help businesses market their content. Online Learning Platforms provide tools to create customizable study materials and streamline tasks, freeing up educators to focus on providing engaging, high-quality lessons. Some platforms allow instructors to integrate adaptive learning technology into their courses, offering a consistent experience across products</p>
        <br />
        <p className="aboutp">Online Learning Platforms are often implemented as standalone platforms, marketplace online course platforms, or all-in-one platforms. Additionally, this platform might be sold as an integrated solution within a learning management system (LMS) to help users administer their overall eLearning program.</p>
        <br />
        <p className="aboutp">Provide workflows for effectively managing and tracking educational content and students progress
           Track key metrics such as performance and study behavior
           Offer support for a variety of multimedia such as Word docs, video, audio, PDFs, text, PPT, HTML, voice-over slide presentations, survey, quizzes, downloadable attachments, and more</p>
        {/* <br />
        <p className="aboutp">-- Read and watch over 1M+ verified reviews from learners</p>
        <br />
        <p className="aboutp">-- Explore resources with advice on finding and evaluating software in our extensive library of the learners.</p>
        <br /> */}
        {/* <p className="abouth2">MILESTONES</p>
        <p className="aboutp">(2023)-- CREATED</p>
        <p className="aboutp">TO BE CONTINUED..</p> */}
      </div>
    </div>
  );
}

export default Review;
