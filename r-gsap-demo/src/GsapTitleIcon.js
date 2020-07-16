import React, { Component } from "react";
import gsap from "gsap";
import logo from "./logo.svg";
import "./GsapTitleIcon.css";

// const Box = ({ color, elBox }) => {
//   return (
//     <div ref={(el) => (elBox = el)} className={"stagger-box " + color}>
//       <div className="stagger-title">{color}</div>
//     </div>
//   );
// };

export default class GsapTitleIcon extends Component {
  constructor(props) {
    super(props);
    this.myTween = gsap.timeline({ paused: true });
    this.iconElements = [];
    this.titleElements = [];
  }

  componentDidMount() {
    const STAGGER = 0.2;

    this.myTween
      // Title - Show
      .to(
        this.titleElements,
        {
          duration: 2,
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
          duration: 2,
          scale: 1,
          opacity: 0,
          delay: 0,
          stagger: STAGGER,
          ease: "elastic",
          force3D: true,
        },
        STAGGER
      )
      // Icon - Show
      .from(
        this.iconElements,
        {
          duration: 2,
          scale: 0.5,
          opacity: 0,
          delay: 0,
          stagger: STAGGER,
          ease: "elastic",
          force3D: true,
        },
        STAGGER + 0.15
      )
      .play();
  }

  render() {
    // const Boxes = [
    //   <Box color="green" elBox={this.boxElements[0]} />,
    //   <Box color="orange" />,
    //   <Box color="gray" />,
    //   <Box color="pink" />,
    //   <Box color="green" />,
    //   <Box color="orange" />,
    //   <Box color="gray" />,
    //   <Box color="pink" />,
    // ];

    return (
      //   <div className="stagger-container">
      //     {Boxes.map((b, i) => (
      //       <div key={i} ref={(el) => (this.iconElements[i] = el)}>
      //         {b}
      //       </div>
      //     ))}
      //   </div>

      <React.Fragment>
        <div className="portfolio-container">
          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <img className="img-fluid" src={logo} alt="" ref={(el) => (this.iconElements[0] = el)} />
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[0] = el)}>
                <div className="project-name">React</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <img className="img-fluid" src={logo} alt="" ref={(el) => (this.iconElements[1] = el)} />
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[1] = el)}>
                <div className="project-name">Angular</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <img className="img-fluid" src={logo} alt="" ref={(el) => (this.iconElements[2] = el)} />
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[2] = el)}>
                <div className="project-name">.NET</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <img className="img-fluid" src={logo} alt="" ref={(el) => (this.iconElements[4] = el)} />
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[4] = el)}>
                <div className="project-name">Visual Studio</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <img className="img-fluid" src={logo} alt="" ref={(el) => (this.iconElements[5] = el)} />
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[5] = el)}>
                <div className="project-name">National Instruments</div>
              </div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <img className="img-fluid" src={logo} alt="" ref={(el) => (this.iconElements[6] = el)} />
              <div className="portfolio-box-caption" ref={(el) => (this.titleElements[6] = el)}>
                <div className="project-name">Java</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
