import * as actionTypes from "./actionTypes";

export const generateRandNumb = number => {
  return {
    type: actionTypes.GENERATE_RAND_NUMB
  };
};
