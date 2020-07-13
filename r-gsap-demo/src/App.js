import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import GsapTweenLine from "./GsapTweenLine";
import GsapTweenLine2 from "./GsapTweenLine2";
import GsapTimeLineLite from "./GsapTimeLineLite";
import GsapStagger from "./GsapStagger";
import GsapStagger2 from "./GsapStagger2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Set up the Links */}
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/" className="navigation-item">
              Home
            </Link>
            <Link to="/tweenLine" className="navigation-item">
              TweenLine
            </Link>
            <Link to="/tweenLine2" className="navigation-item">
              TweenLine2
            </Link>
            <Link to="/timeLineLite" className="navigation-item">
              TimeLineLite
            </Link>
            <Link to="/stagger" className="navigation-item">
              Stagger
            </Link>
            <Link to="/stagger2" className="navigation-item">
              Stagger2
            </Link>
          </div>
        </div>
        {/* Set up the Router */}
        <Route exact path="/" component={Home} />
        <Route path="/tweenLine" component={GsapTweenLine} />
        <Route path="/tweenLine2" component={GsapTweenLine2} />
        <Route path="/timeLineLite" component={GsapTimeLineLite} />
        <Route path="/stagger" component={GsapStagger} />
        <Route path="/stagger2" component={GsapStagger2} />
      </div>
    </BrowserRouter>
  );
}

export default App;
