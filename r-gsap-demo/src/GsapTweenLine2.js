import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import "./App.css";

/*
 The main benefit of storing a TweenLite tween as a reference in the component, is that this pattern allows us to use 
 any of the methods GSAP has to offer like: play(), pause(), reverse(), restart(), seek(), change the speed (timeScale), etc., 
 to get full control of the animations. Also this approach allows us to create any GSAP animation (TweenLite, TweenMax, TimelineLite, etc.) 
 in the constructor. For example, we could use a timeline in order to create a complex animation:
*/

export default class GsapTweenLine2 extends Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    this.myTween = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    /*
      With this approach we create a paused Timeline in the constructor and add the individual tweens 
      using the shorthand methods. Since the Timeline was paused initially, we play it after adding all the tweens to it.
      We could also leave it paused and control it somewhere else in our app. The following example shows this technique:
    */
    this.myTween
      .to(this.myElement, 0.5, { x: 100 })
      .to(this.myElement, 0.5, { y: 100, rotation: 180 })
      .play();
  }

  render() {
    return (
      <div className="container">
        <div ref={(id) => (this.myElement = id)}>GsapTweenLine</div>{" "}
      </div>
    );
  }
}
