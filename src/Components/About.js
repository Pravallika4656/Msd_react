import React from 'react';

const About = () => {
  return (
    <div className="content">
      <h2>About This Application</h2>
      <p>
        This project is a React application that showcases a collection of car models.
        It utilizes public APIs to dynamically fetch and display car details, enabling users to explore various specifications and features.
      </p>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>React.js</strong>: Core library for building user interfaces.</li>
        <li><strong>React Router</strong>: Routing library that enables navigation between components and views.</li>
        <li><strong>Axios</strong>: Promise-based HTTP client for making requests to public APIs.</li>
      </ul>

     
    </div>
  );
};

export default About;