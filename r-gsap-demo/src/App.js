import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import GsapTweenLine from "./GsapTweenLine";
import GsapTweenLine2 from "./GsapTweenLine2";
import GsapTimeLineLite from "./GsapTimeLineLite";
import GsapStagger from "./GsapStagger";
import GsapStagger2 from "./GsapStagger2";
import GsapTimeLineComplex from "./GsapTimeLineComplex";
import GsapTitleIcon from "./GsapTitleIcon";
import GsapStagger2D from "./GsapStagger2D";
import GsapStagger2DDistributed from "./GsapStagger2DDistributed";
import GsapImgTransition from "./GsapImgTransition";
import GsapImgReveal from "./GsapImgReveal";

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
            <Link to="/timelinecomplex" className="navigation-item">
              TimeLineComplex
            </Link>
            <Link to="/titleicon" className="navigation-item">
              TitleIcon
            </Link>
            <Link to="/stagger2d" className="navigation-item">
              Stagger2D
            </Link>
            <Link to="/stagger2ddistributed" className="navigation-item">
              Stagger2DDistributed
            </Link>
            <Link to="/imgtransition" className="navigation-item">
              ImgTransition
            </Link>
            <Link to="/imgreveal" className="navigation-item">
              ImgTransition
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
        <Route path="/timelinecomplex" component={GsapTimeLineComplex} />
        <Route path="/titleicon" component={GsapTitleIcon} />
        <Route path="/stagger2d" component={GsapStagger2D} />
        <Route path="/stagger2ddistributed" component={GsapStagger2DDistributed} />
        <Route path="/imgtransition" component={GsapImgTransition} />
        <Route path="/imgreveal" component={GsapImgReveal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
