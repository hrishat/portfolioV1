import React from "react";

const Footer = () => {
    return (
        <div id="footer" className="container-fluid footer">
            <div className="row justify-content-start align-items-end" style={{ height: "15vh" }}>
                <span className="col-auto footer-font">This portfolio was built using:</span>
                <span className="footer-font text-center">React</span>
                <span className="footer-font text-center">CSS</span>
                <span className="footer-font text-center">bootstrap</span>
                <span className="footer-font text-center">Webpack</span>
            </div>
        </div>
    )
};

export default Footer;