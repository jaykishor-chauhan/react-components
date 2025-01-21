import React, { useEffect } from "react";
import $ from "jquery";
import WOW from "wowjs";

function Navbar() {
    useEffect(() => {
        // Initiate WOW.js
        new WOW.WOW().init();

        // Sticky Navbar
        const handleScroll = () => {
            if ($(window).scrollTop() > 45) {
                $(".navbar").addClass("sticky-top shadow-sm");
            } else {
                $(".navbar").removeClass("sticky-top shadow-sm");
            }
        };

        // Attach the scroll event listener
        $(window).on("scroll", handleScroll);

        // Cleanup
        return () => {
            $(window).off("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <div className=" container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <a href="index.html" className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>KishorJaiz</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu m-0">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                    <a href="feature.html" className="dropdown-item">Our features</a>
                                    <a href="team.html" className="dropdown-item">Team Members</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="quote.html" className="dropdown-item">Free Quote</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>
                        <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a>
                    </div>
                </nav>
                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjiSjGqTkwiIgBWGIVExHlProFLql-mnA5w&s" alt="Image" />
            </div>
        </div>
    )
}

export default Navbar
