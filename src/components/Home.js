import React from "react";
import Typical from "react-typical";
import Resume from "../../assets/resume.pdf";
import "../../assets/home.mp4";
import { Facebook, Twitter, Linkedin, Github, FileEarmarkPdf } from "react-bootstrap-icons";


const Home = () => {
    return (
        <div id="home" className="container home-font" style={{ height: "95vh" }}>
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
                <source src={"home.mp4"} type={"video/mp4"} />
            </video>

            <div className="row justify-content-center align-items-end" style={{ height: "31.7vh" }}>
                <h3 className="col-auto">Hi,</h3>
            </div>

            <div className="row justify-content-center align-items-start" style={{ height: "31.7vh" }}>
                <Typical className="col-auto"
                    steps={["My name is Rezaul", 2000,
                        "I'm a web developer", 2000]}
                    loop={Infinity}
                />
            </div>

            <div className="row justify-content-around align-items-center" style={{ height: "31.7vh" }}>
                <div className="col-auto">
                    <div className="row justify-content-start">
                        <div className="row">Check me out elsewhere</div>
                        <a className="col-auto" href={"https://www.facebook.com/hrishat.rezaul"} target={"_blank"}><Facebook /></a>
                        <a className="col-auto" href={"https://twitter.com/rezzie_rich"} target={"_blank"}><Twitter /></a>
                        <a className="col-auto" href={"https://www.linkedin.com/in/rezaul-karim-2ab49a199/"} target={"_blank"}><Linkedin /></a>
                        <a className="col-auto" href={"https://github.com/rishat54"} target={"_blank"}><Github /></a> </div>
                </div>
                <div className="col-auto">
                    <a href={Resume} download="Rezaul_Karim.pdf">
                        <button type="button" className="btn btn-outline-info text-light">Resume <FileEarmarkPdf /></button>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Home;