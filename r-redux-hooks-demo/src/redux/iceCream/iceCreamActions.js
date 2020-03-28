import { BYE_ICECREAM } from "./iceCreamTypes";

// Implements Redux action  - 'Bye ice cream from shop' to be dispatched from React component
export const byeIceCream = () => {
  return {
    type: BYE_ICECREAM
  };
};
