import * as actionTypes from "./actionTypes";

export function increment(amount: number): IAction {
  return {
    type: actionTypes.GET_STATE,
    payload: {
      amount
    }
  };
}