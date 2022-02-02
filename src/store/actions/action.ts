export const GET_STATE = "GET_STATE";

export type ActionTypes = typeof GET_STATE;

export interface IAction {
  type: ActionTypes;
  payload: IPayload;
}

export interface IPayload {
  amount: number;
}

export function getState(amount: number): IAction {
  return {
    type: GET_STATE,
    payload: {
      amount
    }
  };
}