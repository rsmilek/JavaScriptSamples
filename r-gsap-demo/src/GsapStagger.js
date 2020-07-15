import React, { Component } from "react";
import { TimelineLite, Elastic } from "gsap/all";
import "./GsapStagger.css";

const Box = ({ color }) => {
  return <div className={"stagger-box " + color}></div>;
};

class Box3 extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), this.props.delay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    if (this.state.seconds < 1) {
      clearInterval(this.interval);
      return <div className="stagger-box-title">{this.props.title}</div>;
    } else {
      return <div className={"stagger-box " + this.props.color}></div>;
    }
  }
}

class GsapStagger extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite({ paused: true });
    this.myElements = [];
    this.myElements3 = [];
    this.myElements3_2 = [];
  }

  componentDidMount() {
    // this.myTween
    //   .to(this.myElements[1], 0.5, { x: 100 })
    //   .to(this.myElements[1], 0.5, { y: 100, rotation: 180 })
    //   .play();

    // this.myTween.staggerTo(this.myElements, 0.5, { autoAlpha: 1, y: 50 }, 0.1).play();

    // this.myTween.from(this.myElements, {}, "Start")

    this.myTween
      .from(
        this.myElements3,
        {
          duration: 2.4,
          scale: 0.5,
          opacity: 0,
          //   delay: 0.5,
          delay: 0.2,
          //   stagger: 0.2,
          stagger: 0,
          // ease: "elastic",
          ease: Elastic.easeOut.config(1.2, 0.2),
          force3D: true,
        },
        "+=0"
        // "Start"
      )
      .from(
        this.myElements3_2,
        {
          duration: 2.4,
          scale: 0.5,
          opacity: 0,
          //   delay: 0.5,
          delay: 0.2,
          //   stagger: 0.2,
          stagger: 0,
          ease: "elastic",
          // ease: Power4.easeOut,
          force3D: true,
        },
        // "+=0"
        0
      )
      .from(
        this.myElements,
        {
          duration: 2.4,
          scale: 0.5,
          opacity: 0,
          //   delay: 0.5,
          delay: 0,
          //   stagger: 0.2,
          stagger: 0.1,
          // ease: "elastic",
          ease: Elastic.easeOut,
          force3D: true,
        },
        // "+=0"
        0.0
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

    const offset = 100;
    const base = 300;

    const Boxes3 = [
      <Box3 title="green" color="green" delay={1 * offset + base} />,
      <Box3 title="orange" color="orange" delay={2 * offset + base} />,
      <Box3 title="gray" color="gray" delay={3 * offset + base} />,
      <Box3 title="pink" color="pink" delay={4 * offset + base} />,
      <Box3 title="green" color="green" delay={5 * offset + base} />,
      <Box3 title="orange" color="orange" delay={6 * offset + base} />,
      <Box3 title="gray" color="gray" delay={7 * offset + base} />,
      <Box3 title="pink" color="pink" delay={8 * offset + base} />,
    ];

    const Boxes3_2 = [
      <Box3 title="green" color="green" delay={1 * offset + base} />,
      <Box3 title="orange" color="orange" delay={2 * offset + base} />,
      <Box3 title="gray" color="gray" delay={3 * offset + base} />,
      <Box3 title="pink" color="pink" delay={4 * offset + base} />,
      <Box3 title="green" color="green" delay={5 * offset + base} />,
      <Box3 title="orange" color="orange" delay={6 * offset + base} />,
      <Box3 title="gray" color="gray" delay={7 * offset + base} />,
      <Box3 title="pink" color="pink" delay={8 * offset + base} />,
    ];

    return (
      <React.Fragment>
        <div className="stagger-container">
          {Boxes3.map((b, i) => (
            <div key={i} ref={(el) => (this.myElements3[i] = el)}>
              {b}
            </div>
          ))}
        </div>

        <div className="stagger-container">
          {Boxes3_2.map((b, i) => (
            <div key={i} ref={(el) => (this.myElements3_2[i] = el)}>
              {b}
            </div>
          ))}
        </div>

        <div className="stagger-container">
          {Boxes.map((b, i) => (
            <div key={i} ref={(el) => (this.myElements[i] = el)}>
              {b}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default GsapStagger;
