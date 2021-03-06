import React, { Component } from "react";

class CounterSetup extends Component {
  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3"]
    tags: []
    // imageUrl: "https://picsum.photos/200" // GENERATES RANDOM PICTURE 200x200 px
  };

  // CSS STYLE TO DEMONSTRATE - SETTING ATTRIBUTES
  //   styles = {
  //     fontSize: 30,
  //     fontWeight: "bold"
  //   };

  render() {
    return (
      // EMBEDDING EXPRESSION - REPLACEMENT OF <div> TO ENCLOSE INNER EXPRESSIONS INTO ONE REACT ELEMENT
      <React.Fragment>
        {/* THIS DEMONSTRATES SETTING OF ATTRIBUTES BY RANDOMLY GENERATED PICTURE */}
        {/* <img src={this.state.imageUrl} alt=""></img> */}
        {/* --- */}
        {/* THIS DEMONSTRATES SETTING OF ATTRIBUTES HARD CODED */}
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* --- */}
        {/* THIS DEMONSTRATES SETTING OF ATTRIBUTES BY CSS FROM OBJECT */}
        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}
        {/* --- */}
        {/* THIS DEMONSTRATES SETTING OF ATTRIBUTES BY CSS DIRECTLY */}
        {/* <span
          style={{ fontSize: 30, fontWeight: "bold" }}
          className="badge badge-primary m-2"
        >
          {this.formatCount()}
        </span> */}
        {/* --- */}
        {/* THIS DEMONSTRATES RENDERING CLASSES DYNAMICALLY - ATTENTION: EACH ITEM MUST HAVE UNIQUE ID PROPERTY */}
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}
        {/* --- */}
        {/* LAST OPTIMIZED EXAMPLE */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <button className="btn btn-secondary btn-sm">Increment</button> */}
        {/* --- */}
        {/* THIS DEMONSTRATES RENDERING LIST <ul><li></li></ul> */}
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* --- */}
        {/* THIS DEMONSTRATES CONDITIONAL RENDERING - IF NO ITEMS IN LIST THEN SHOW MESSAGE OTHERWISE RENDER LIST */}
        {/* {this.state.tags.length === 0 && "Please enter tags!"} */}
        {/* {this.getTags()} */}
        {/* --- */}
        {/* THIS DEMONSTRATES HANDLING EVENTS */}
        {/* <button
          //   onClick={this.handleIncrement}
          onClick={this.handleOnClick}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button> */}
        {/* --- */}
        {/* THIS DEMONSTRATES PASSING EVENT HANDLER ARGUMENTS - USE ARROW FUNCTION */}
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  // DEMONSTRATES THAT THERE IS NO ACCESS TO this IN THIS EVEN HANDLER
  // WHY?: IT IS CALLED AS function() NOT AS obj.method()
  // SOLUTION1: BINDING METHOD IN CONSTRUCTOR
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleOnClick.bind(this);
  //   }
  //   handleOnClick() {
  //     console.log("clicked", this);
  //   }
  // SOLUTION2: ARROW FUNCTION
  handleOnClick = () => {
    console.log("handleOnClick", this);
    this.setState({ count: this.state.count + 1 }); // CALL TO UPDATE UI BY GIVEN VALUE
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 }); // CALL TO UPDATE UI BY GIVEN VALUE
  };

  getTags() {
    if (this.state.tags.length === 0) {
      return <p>No tags in list</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default CounterSetup;
