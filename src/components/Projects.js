import React from "react";
import "../../assets/projects.mp4";

const Projects = () => {
    return (
        <div id="projects" className="container" style={{ height: "95vh" }}>
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
                <source src={"projects.mp4"} type={"video/mp4"} />
            </video>

            <div className="row justify-content-center align-items-center" style={{ height: "31.7vh" }}>
                <h3 className="col-auto projects-font">Projects</h3>
            </div>

            <div className="row justify-content-center align-items-center" style={{ height: "31.7vh" }}>
                <h5 className="col-auto text-muted projects-font">will be added soon...</h5>
            </div>

            <div className="row align-items-center" style={{ height: "31.7vh" }}>
                <div className="progress col-">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                        <h4 className="projects-bar-font">in production...</h4>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Projects;