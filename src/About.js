// About.jsx
import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
      <h1>My React Application with Bootstrap</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>This is a Bootstrap column.</p>
          </div>
          <div className="col-md-6">
            <p>Another Bootstrap column.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
