import React from "react";
import { send } from "emailjs-com";
import { useState } from "react";
import "../../assets/contact.mp4";

const Contact = () => {

    const [toSend, setToSend] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""

    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_2uigeev',
            'template_yjvc9qr',
            toSend,
            'user_EbzE9lrIaojoqqOmvppxY'
        )
            .then((Response) => {
                // alert("Thank you for contacting me. I will get back to you ASAP");
                Response.status == 200 ? window.location.reload(false) : "";
            })
            .catch((err) => {
                alert("Sorry, something went wrong. Please try again");
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact" className="form-group container" style={{ height: "95vh" }}>
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
                <source src={"contact.mp4"} type={"video/mp4"} />
            </video>
            <form onSubmit={onSubmit}>
                <div className="row justify-content-center align-items-center" style={{ height: "12.7vh" }}>
                    <h3 className="col-auto">Contact Me</h3>
                </div>
                <div className="row align-items-center" style={{ height: "12.7vh" }}>
                    <div className="input-group col">
                        <span className="input-group-text text-light">Name</span>
                        <input type="text" className="form-control" name="name" placeholder="e.g. Tony Stark" value={toSend.name} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row align-items-center" style={{ height: "12.7vh" }}>
                    <div className="input-group col">
                        <span className="input-group-text text-light">Email</span>
                        <input type="email" className="form-control" name="email" placeholder="e.g. tony@starkenterprises.com" value={toSend.email} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row align-items-center" style={{ height: "12.7vh" }}>
                    <div className="input-group col">
                        <span className="input-group-text text-light">Phone Number</span>
                        <input type="tel" className="form-control" name="phoneNumber" placeholder="optional" value={toSend.phoneNumber} onChange={handleChange} />
                    </div>
                </div>
                <div className="row align-items-center" style={{ height: "31.7vh" }}>
                    <div className="form-floating">
                        <textarea className="form-control" name="message" style={{ height: "29vh" }} value={toSend.message} onChange={handleChange} required />
                        <label htmlFor={"message"}>Message</label>
                    </div>
                </div>
                <div className="row align-items-center" style={{ height: "12.7vh" }}>
                    <div className="col d-grid">
                        <button type="submit" className="btn btn-outline-info text-light">send</button>
                    </div>
                </div>
            </form>
        </div>
    )


};

export default Contact;