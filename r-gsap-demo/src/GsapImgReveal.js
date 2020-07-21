import React, { Component } from "react";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "./GsapImgReveal.css";
import People from "./people.webp";

export default class GsapImgReveal extends Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.peopleEl = null;
    gsap.registerPlugin(CSSRulePlugin); // ! IMPORTANT - Register just once only
    this.tl = gsap.timeline({ paused: true });
  }

  componentDidMount() {
    let imageReveal = CSSRulePlugin.getRule(".reveal-container-img::after");
    const DURATION = 1.0;
    this.tl.to(this.container, { duration: 0, css: { visibility: "visible" } });
    this.tl.to(imageReveal, { duration: 0, width: "100%" });
    this.tl.to(imageReveal, { duration: DURATION, width: "0%", ease: "power2.inOut" });
    this.tl.from(this.peopleEl, { duration: DURATION, scale: 1.6, ease: "power2.inOut", delay: -DURATION });
    this.tl.play();
  }

  render() {
    return (
      <section className="reveal-main">
        <p>GSAP IMAGE REVEAL</p>
        <div className="reveal-container" ref={(el) => (this.container = el)}>
          <>
            <div className="reveal-container-img">
              <img src={People} alt="" ref={(el) => (this.peopleEl = el)} />
            </div>
          </>
        </div>
      </section>
    );
  }
}
