import React from "react";
import { connect } from "react-redux";
import { byeCake } from "../redux/cake/cakeActions";

// Dispatch React action on button click = 3 steps

export function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes: {props.numberOfCakes}</h2>
      <button onClick={props.byeCake}>Bye cake</button>
    </div>
  );
}

// Step 1 - map Redux state to React component properties
// NOTE: In real application are used Redux selectors for this purpose
const mapStateToProps = state => {
  return {
    numberOfCakes: state.numberOfCakes
  };
};

// Step 2 - map Redux dispatch (actions) to React component properties
const mapDispatchToProps = dispatch => {
  return {
    byeCake: () => dispatch(byeCake())
  };
};

// Step 3 - connect Redux store (mapXxx) to React component (CakeContainer)
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
