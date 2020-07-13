import React, { Component } from "react";
import { TweenLite } from "gsap";
import "./App.css";

/*
 After the new instance has been initialized, the render() method runs. In the render method we're using the ref attribute 
 that is basically a function that has a single parameter – the DOM node being added to the DOM tree. At this point 
 we update the reference to the DOM node created in the class constructor. After that, this reference is no longer null 
 and can be used anywhere we need it in our component.

 Finally, the componentDidMount() method runs and updates the reference to myTween with a TweenLite tween whose target 
 is the internal reference to the DOM node that should animate. Simple, elegant and very React-way of us!

 It is worth mentioning that we could have created a one-run-animation by not creating a reference to the TweenLite tween 
 in the constructor method. We could have just created a tween in the componentDidMount method and it would run immediately,
 like this:

 componentDidMount() {
   TweenLite.to(this.myElement, 1, {x: 100, y: 100});
 }
*/

export default class GsapTweenLine extends Component {
  constructor(props) {
    super(props);
    // Reference to the DOM node
    this.myElement = null;
    // Reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    // We the refs to create animation
    this.myTween = TweenLite.to(this.myElement, 1, { x: 100, y: 100 });
  }

  render() {
    return (
      <div className="container">
        <div ref={(id) => (this.myElement = id)}>GsapTweenLine</div>{" "}
      </div>
    );
  }
}
