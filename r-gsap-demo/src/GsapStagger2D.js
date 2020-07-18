import React, { Component } from "react";
import gsap from "gsap";
import "./GsapStagger2D.css";

export default class GsapStagger2D extends Component {
  constructor(props) {
    super(props);
    this.tl = gsap.timeline({ paused: true });
  }

  componentDidMount() {
    gsap
      .to("#grid2D div i", {
        duration: 1,
        scale: 0.1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.1,
          //   from: "center",
          //   from: "ends",
          from: "edges",
          //   from: "random",
          ease: "none",
          //   ease: "power3.inOut",
          //   ease: "power4.in",
        },
      })
      .play();
  }

  render() {
    return (
      <div className="container">
        <div id="grid2D">
          <div>
            <i>1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
          </div>
        </div>
        <div id="grid2D">
          <div>
            <i>5</i>
            <i>6</i>
            <i>7</i>
            <i>8</i>
          </div>
        </div>
        <div id="grid2D">
          <div>
            <i>9</i>
            <i>10</i>
            <i>11</i>
            <i>12</i>
          </div>
        </div>
      </div>
    );
  }
}
