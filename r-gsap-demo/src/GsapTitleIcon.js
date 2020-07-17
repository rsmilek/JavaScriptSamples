import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Logo } from "./logo.svg";
import "./GsapTitleIcon.css";

const TitleIcon = ({ icons2, iconElements2, titleElements2 }) => {
  return (
    <div className="portfolio-container">
      {icons2.map((icon, index) => (
        <div key={index} className="portfolio-wrapper">
          <div className="portfolio-box">
            <div className="img-fluid" ref={iconElements2[index]}>
              {icon}
            </div>
            <div className="portfolio-box-caption" ref={titleElements2[index]}>
              <div className="project-name">Angular</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default class GsapTitleIcon extends Component {
  constructor(props) {
    super(props);
    this.myTween = gsap.timeline({ paused: true });
    this.iconElements = [];
    this.titleElements = [];

    this.setIconRef = (el, i) => {
      this.iconElements[i] = el;
    };

    this.icons2 = [<Logo />, <Logo />, <Logo />, <Logo />, <Logo />, <Logo />];
    this.iconElements2 = [];
    this.titleElements2 = [];
    for (let index = 0; index < this.icons2.length; index++) {
      this.iconElements2[index] = React.createRef();
      this.titleElements2[index] = React.createRef();
    }
  }

  componentDidMount() {
    const STAGGER = 0.3;
    const DURATION = 6 * STAGGER;

    // console.log(this.titleElements[0]);
    // console.log(this.titleElements2[0].current);

    const titleElementsCurrent = this.titleElements2.map(title => title.current);
    const iconElementsCurrent = this.iconElements2.map(icon => icon.current);

    this.myTween
      // Title - Show
      .to(
        this.titleElements,
        {
          duration: DURATION,
          scale: 1,
          opacity: 1,
          delay: 0,
          stagger: STAGGER,
          ease: "elastic",
          force3D: true,
        },
        "Start"
      )
      // Title - Hide
      .to(
        this.titleElements,
        {
          duration: DURATION,
          scale: 1,
          opacity: 0,
          delay: 0,
          stagger: STAGGER,
          ease: "elastic",
          force3D: true,
        },
        STAGGER + 0.1
      )
      // Icon - Show
      .from(
        this.iconElements,
        {
          duration: DURATION,
          scale: 0.5,
          opacity: 0,
          delay: 0,
          stagger: STAGGER,
          ease: "elastic",
          force3D: true,
        },
        2 * STAGGER
      )
      //
      //
      // Title - Show
      .to(
        titleElementsCurrent,
        {
          duration: DURATION,
          scale: 1,
          opacity: 1,
          delay: 0,
          stagger: STAGGER,
          ease: "elastic",
          force3D: true,
        },
        "Start"
      )
      // Title - Hide
      .to(
        titleElementsCurrent,
        {
          duration: DURATION,
          scale: 1,
          opacity: 0,
          delay: 0,
          stagger: STAGGER,
          ease: "elastic",
          force3D: true,
        },
        STAGGER + 0.1
      )
      // Icon - Show
      .from(
        iconElementsCurrent,
        {
          duration: DURATION,
          scale: 0.5,
          opacity: 0,
          delay: 0,
          stagger: STAGGER,
          ease: "elastic",
          force3D: true,
        },
        2 * STAGGER
      )
      .play();
  }

  render() {
    return (
      <React.Fragment>
        <div className="portfolio-container">
          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              {/* <div className="img-fluid" ref={(el) => (this.iconElements[0] = el)}> */}
              <div className="img-fluid" ref={(el) => this.setIconRef(el, 0)}>
                <Logo />
              </div>
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[0] = el)}>
                <div className="project-name">React</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[1] = el)}>
                <Logo />
              </div>
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[1] = el)}>
                <div className="project-name">Angular</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[2] = el)}>
                <Logo />
              </div>
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[2] = el)}>
                <div className="project-name">.NET</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[3] = el)}>
                <Logo />
              </div>
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[3] = el)}>
                <div className="project-name">Visual Studio</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[4] = el)}>
                <Logo />
              </div>
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[4] = el)}>
                <div className="project-name">National Instruments</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[5] = el)}>
                <Logo />
              </div>
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[5] = el)}>
                <div className="project-name">Java</div>
              </div>
            </div>
          </div>
        </div>

        <TitleIcon
          icons2={this.icons2}
          iconElements2={this.iconElements2}
          titleElements2={this.titleElements2}
        />
      </React.Fragment>
    );
  }
}
