import React from "react";
import { byeIceCream } from "../redux/iceCream/iceCreamActions";
import { useSelector, useDispatch } from "react-redux";

export default function IceCreamContainerHooks(props) {
  // Selector hook: useSelector takes selector function as argument and is called with Redux store state. Replacement of 'mapStateToProps'.
  const numberOfIceCream = useSelector(
    state => state.iceCream.numberOfIceCreams
  );
  // Dispatch hook: useDispatch return Redux dispatch function
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice cream: {numberOfIceCream}</h2>
      <button onClick={() => dispatch(byeIceCream())}>Bye ice cream</button>
    </div>
  );
}
