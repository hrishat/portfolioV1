import React from "react";
import image from "../../assets/aboutImage.jpg";

const About = () => {
    return (
        <div id="about" className="container-fluid"
            style={{
                height: "95vh",
                backgroundImage: `url(${image})`,
                objectFit: "cover",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>

            <div className="row justify-content-end align-items-end" style={{ height: "95vh", paddingRight: "54px" }}>
                <div className="col-auto">
                    <div className="card border-info bg-dark mb-3 about-font" style={{ maxWidth: 330 }}>
                        <div className="card-header text-center text-info">About Me</div>
                        <div className="card-body">
                            <h4 className="card-title text-muted">Let me introduce myself properly</h4>
                            <p className="card-text text-info">As you already know, my name is Rezaul Karim. I'm a full-stack web developer with a stronger skill set in front-end development. I come from a business major doing sales jobs most of my life until I realized what I truly enjoy doing. Sales or marketing is a form of art that heavily relies on presentation and problem-solving. I started javaScript out of curiosity & after that, I never looked back. I finished a full-stack program from <a href="https://woz-u.com/" target="_blank">Woz-U</a> & self-taught along the way. I'm not an all-known programmer but I always find the solution to my problems. It's an ever-growing industry & I plan on expanding my knowledge heading toward. I'm a great student as I learn quickly & having a business background allows me to bring the best of both worlds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;