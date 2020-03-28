import { BYE_CAKE } from "./cakeTypes";

// Implements Redux action  - 'Bye cake from shop' to be dispatched from React component
export const byeCake = () => {
  return {
    type: BYE_CAKE
  };
};
