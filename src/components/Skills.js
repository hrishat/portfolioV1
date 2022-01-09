import React from "react";
import "../../assets/skills.mp4";

const Skills = () => {
  return (
    <div id="skills" className="container" style={{ height: "95vh" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          zIndex: "-1"
        }}
      >
        <source src={"skills.mp4"} type={"video/mp4"} />
      </video>

      <div className="row justify-content-between align-items-center" style={{ height: "95vh" }}>
        <div className="col card border-success skills skills-font" style={{ height: "71.25vh" }}>
          <div className="card-body row justify-content-between align-items-center">
            <div className="card-text col-12 text-center">
              <h3>Skills</h3>
            </div>

            <div className="card-text col">
              <h3 className="text-success">Frontend Skills</h3>
              <hr />
              <span className="text-success">HTML</span><br />
              <span>CSS</span><br />
              <span>Flexbox</span><br />
              <span className="text-success">Bootstrap</span><br />
              <span className="text-success">JavaScript</span><br />
              <span>TypeScript</span><br />
              <span className="text-success">React</span><br />
              <span>Angular</span>
            </div>

            <div className="card-text col">
              <h3 className="text-success">Backend Skills</h3>
              <hr />
              <span className="text-success">Node.js</span><br />
              <span className="text-success">Express</span><br />
              <span className="text-success">MangoDB</span><br />
              <span>SQL</span>
            </div>

            <div className="card-text col">
              <h3 className="text-success">Additional Skills</h3>
              <hr />
              <span>Cordova</span><br />
              <span className="text-success">Ionic</span><br />
              <span className="text-success">webpack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;