import React from "react";

function About() {
  return (
    <div className="bg-light my-5">
      <div className="container text-center py-5">
        <h1 className="text-center font-weight-light">
          <span className="text-info">About</span> me
        </h1>
        <div className="lead">
          I am a Java Developer.
          I can develop the front and the back of an app
        </div>
        <div className="row">
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What I can do?</h5>
            <p className="text-justify">
            I am an freelance Web Developer.I have experience in developing websites using different Web Technologies
              like HTML,CSS,JavaScript and ReactJS.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What am I doing currently?</h5>
            <p className="text-justify">
              I am currently persuing my Bachelors in Technology from Graphic Era University,Dehradun.I am persuing my
              major in Computer Science. I am an tech Enthusist and exploring different aspects of Computer Science.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What do I believe in?</h5>
            <p className="text-justify">
              I believe that Commitment and Consistency paves the way to success. Sticking to the 2 C's would definetely
              sharpen my abilities and skills.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>How I can help you?</h5>
            <p className="text-justify">
              I can help in building websites for both Front-end as well as back-end using latest Web-Technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
