import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import "./GsapStagger.css";

const Box = ({ color }) => {
  return <div className={"stagger-box " + color}></div>;
};

class GsapStagger extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite({ paused: true });
    this.myElements = [];
  }

  componentDidMount() {
    // this.myTween
    //   .to(this.myElements[1], 0.5, { x: 100 })
    //   .to(this.myElements[1], 0.5, { y: 100, rotation: 180 })
    //   .play();

    // this.myTween.staggerTo(this.myElements, 0.5, { autoAlpha: 1, y: 50 }, 0.1).play();

    this.myTween
      .from(
        this.myElements,
        {
          duration: 2,
          scale: 0.5,
          opacity: 0,
          //   delay: 0.5,
          delay: 0,
          //   stagger: 0.2,
          stagger: 0.1,
          ease: "elastic",
          force3D: true,
        },
        "+=1"
      )
      .play();
  }

  render() {
    const Boxes = [
      <Box color="green" />,
      <Box color="orange" />,
      <Box color="gray" />,
      <Box color="pink" />,
      <Box color="green" />,
      <Box color="orange" />,
      <Box color="gray" />,
      <Box color="pink" />,
    ];

    return (
      <div className="stagger-container">
        {Boxes.map((b, i) => (
          <div key={i} ref={(id) => (this.myElements[i] = id)}>
            {b}
          </div>
        ))}
      </div>
    );
  }
}

export default GsapStagger;
