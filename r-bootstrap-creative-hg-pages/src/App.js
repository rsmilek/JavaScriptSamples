import React, { Component } from "react";
import $ from "jquery"; // Bootstrap core JS
import "jquery.easing"; // Third party plugin JS
import "magnific-popup"; // Third party plugin JS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome icons
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import portfolio1fullsize from "./assets/img/portfolio/fullsize/1.jpg";
import portfolio1thumbnail from "./assets/img/portfolio/thumbnails/1.jpg";
import portfolio2fullsize from "./assets/img/portfolio/fullsize/2.jpg";
import portfolio2thumbnail from "./assets/img/portfolio/thumbnails/2.jpg";
import portfolio3fullsize from "./assets/img/portfolio/fullsize/3.jpg";
import portfolio3thumbnail from "./assets/img/portfolio/thumbnails/3.jpg";
import portfolio4fullsize from "./assets/img/portfolio/fullsize/4.jpg";
import portfolio4thumbnail from "./assets/img/portfolio/thumbnails/4.jpg";
import portfolio5fullsize from "./assets/img/portfolio/fullsize/5.jpg";
import portfolio5thumbnail from "./assets/img/portfolio/thumbnails/5.jpg";
import portfolio6fullsize from "./assets/img/portfolio/fullsize/6.jpg";
import portfolio6thumbnail from "./assets/img/portfolio/thumbnails/6.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    /*!
     * Start Bootstrap - Creative v6.0.2 (https://startbootstrap.com/themes/creative)
     * Copyright 2013-2020 Start Bootstrap
     * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
     */

    /*
     * Begin of styles.js
     */
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (
        window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 72,
            },
            1000,
            "easeInOutExpo"
          );
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
      target: "#mainNav",
      offset: 75,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
      } else {
        $("#mainNav").removeClass("navbar-scrolled");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $("#portfolio").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
    });
    /*
     * End of styles.js
     */
  }

  state = {};

  render() {
    return (
      <div>
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  Your Favorite Source of Free Bootstrap Themes
                </h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  Start Bootstrap can help you build better websites using the Bootstrap framework! Just
                  download a theme and start customizing, no strings attached!
                </p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- About--> */}
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">We've got what you need!</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  Start Bootstrap has everything you need to get your new website up and running in no time!
                  Choose one of our open source, free to download, and easy to use themes! No strings
                  attached!
                </p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">
                  Get Started!
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services--> */}
        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fa-4x text-primary mb-4">
                    <FontAwesomeIcon icon={faGem} />
                  </i>
                  <h3 className="h4 mb-2">Sturdy Themes</h3>
                  <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fa-4x text-primary mb-4">
                    <FontAwesomeIcon icon={faLaptopCode} />
                  </i>
                  <h3 className="h4 mb-2">Up to Date</h3>
                  <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fa-4x text-primary mb-4">
                    <FontAwesomeIcon icon={faGlobe} />
                  </i>
                  <h3 className="h4 mb-2">Ready to Publish</h3>
                  <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fa-4x text-primary mb-4">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                  <h3 className="h4 mb-2">Made with Love</h3>
                  <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Portfolio--> */}
        <div id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={portfolio1fullsize}>
                  <img className="img-fluid" src={portfolio1thumbnail} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={portfolio2fullsize}>
                  <img className="img-fluid" src={portfolio2thumbnail} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={portfolio3fullsize}>
                  <img className="img-fluid" src={portfolio3thumbnail} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={portfolio4fullsize}>
                  <img className="img-fluid" src={portfolio4thumbnail} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={portfolio5fullsize}>
                  <img className="img-fluid" src={portfolio5thumbnail} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={portfolio6fullsize}>
                  <img className="img-fluid" src={portfolio6thumbnail} alt="" />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Call to action--> */}
        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">
              Download Now!
            </a>
          </div>
        </section>
        {/* <!-- Contact--> */}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Ready to start your next project with us? Give us a call or send us an email and we will get
                  back to you as soon as possible!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fa-3x mb-3 text-muted">
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                <div>+1 (555) 123-4567</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fa-3x mb-3 text-muted">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <a className="d-block" href="mailto:contact@yourwebsite.com">
                  contact@yourwebsite.com
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="bg-light py-5">
          <div className="container">
            <div className="small text-center text-muted">Copyright © 2020 - Start Bootstrap</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
