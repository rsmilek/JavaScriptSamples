import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Logo } from "./logo.svg";
// import "./index.css";
// import "./App.css";
import "./GsapTitleIcon.css";

const TitleIcon = ({ items }) => {
  console.log(items);
  return (
    <div className="icon-container">
      {items.map((item, index) => (
        <div key={index} className="icon-wrapper">
          <div className="icon-box">
            <div className="img-fluid" ref={item.iconElementRef}>
              {item.icon}
            </div>
            <div className="icon-box-caption" ref={item.titleElementRef}>
              <div className="icon-title">{item.title}</div>
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

    this.icons2 = [
      { icon: <Logo />, title: "React", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: "Angular", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: ".NET", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: "Visual Studio", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: "National Instruments", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: "Java", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
    ];
  }

  componentDidMount() {
    const STAGGER = 0.3;
    const DURATION = 6 * STAGGER;

    const iconElements2Current = this.icons2.map((item) => item.iconElementRef.current);
    const titleElements2Current = this.icons2.map((item) => item.titleElementRef.current);

    this.myTween
      // Title - Show
      .to(this.titleElements, { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, "Start")
      // Title - Hide
      .to(this.titleElements, { duration: DURATION, scale: 1, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, STAGGER + 0.1)
      // Icon - Show
      .from(this.iconElements, { duration: DURATION, scale: 0.5, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, 2 * STAGGER)
      //
      // Title2 - Show
      .to(titleElements2Current, { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, "Start")
      // Title2 - Hide
      .to(titleElements2Current, { duration: DURATION, scale: 1, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, STAGGER + 0.1)
      // Icon2 - Show
      .from(iconElements2Current, { duration: DURATION, scale: 0.5, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, 2 * STAGGER)
      .play();
  }

  render() {
    return (
      <React.Fragment>
        <div className="icon-container">
          <div className="icon-wrapper">
            <div className="icon-box">
              {/* <div className="img-fluid" ref={(el) => (this.iconElements[0] = el)}> */}
              <div className="img-fluid" ref={(el) => this.setIconRef(el, 0)}>
                <Logo />
              </div>
              <div className="icon-box-caption" ref={(el) => (this.titleElements[0] = el)}>
                <div className="icon-title">React</div>
              </div>
            </div>
          </div>

          <div className="icon-wrapper">
            <div className="icon-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[1] = el)}>
                <Logo />
              </div>
              <div className="icon-box-caption" ref={(el) => (this.titleElements[1] = el)}>
                <div className="icon-title">Angular</div>
              </div>
            </div>
          </div>

          <div className="icon-wrapper">
            <div className="icon-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[2] = el)}>
                <Logo />
              </div>
              <div className="icon-box-caption" ref={(el) => (this.titleElements[2] = el)}>
                <div className="icon-title">.NET</div>
              </div>
            </div>
          </div>

          <div className="icon-wrapper">
            <div className="icon-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[3] = el)}>
                <Logo />
              </div>
              <div className="icon-box-caption" ref={(el) => (this.titleElements[3] = el)}>
                <div className="icon-title">Visual Studio</div>
              </div>
            </div>
          </div>

          <div className="icon-wrapper">
            <div className="icon-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[4] = el)}>
                <Logo />
              </div>
              <div className="icon-box-caption" ref={(el) => (this.titleElements[4] = el)}>
                <div className="icon-title">National Instruments</div>
              </div>
            </div>
          </div>

          <div className="icon-wrapper">
            <div className="icon-box">
              <div className="img-fluid" ref={(el) => (this.iconElements[5] = el)}>
                <Logo />
              </div>
              <div className="icon-box-caption" ref={(el) => (this.titleElements[5] = el)}>
                <div className="icon-title">Java</div>
              </div>
            </div>
          </div>
        </div>

        <TitleIcon items={this.icons2} />
      </React.Fragment>
    );
  }
}
