import React, { Component } from "react";
import gsap from "gsap";
import "./GsapImgTransition.css";
import ImgFirst from "./img-first.png";
import ImgSecond from "./img-second.png";

export default class GsapImgTransition extends Component {
  constructor(props) {
    super(props);
    this.imgFirst = null;
    this.imgSecond = null;
    this.tl = gsap.timeline({ repeat: -1 /*, repeatDelay: 3*/, paused: true });
  }

  componentDidMount() {
    const DURATION = 0.5;
    const DELAY = 3;
    this.tl
      .to(this.imgFirst, {
        duration: DURATION,
        opacity: 1,
        ease: "power4.out",
      })
      .to(this.imgFirst, {
        duration: DURATION,
        opacity: 0,
        ease: "power4.in",
        delay: DELAY,
      })
      .to(this.imgSecond, {
        duration: DURATION,
        opacity: 1,
        ease: "power4.out",
      })
      .to(this.imgSecond, {
        duration: DURATION,
        opacity: 0,
        ease: "power4.in",
        delay: DELAY,
      })
      .play();
  }

  render() {
    return (
      <div className="transition-container">
        <div className="transition-wrapper">
          <div className="transition-img-box">
            <div className="transition-img-first" ref={(el) => (this.imgFirst = el)}>
              <img src={ImgFirst} alt="" />
            </div>
            <div className="transition-img-second" ref={(el) => (this.imgSecond = el)}>
              <img src={ImgSecond} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
