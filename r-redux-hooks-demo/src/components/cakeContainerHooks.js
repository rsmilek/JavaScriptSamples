import React from "react";
import { byeCake } from "../redux/cake/cakeActions";
import { useSelector, useDispatch } from "react-redux";

export default function CakeContainerHooks(props) {
  // Selector hook: useSelector takes selector function as argument and is called with Redux store state. Replacement of 'mapStateToProps'.
  const numberOfCakes = useSelector(state => state.numberOfCakes);
  // Dispatch hook: useDispatch return Redux dispatch function
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(byeCake())}>Bye cake</button>
    </div>
  );
}
