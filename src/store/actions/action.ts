export const GET_STATE = "GET_STATE";
export const SET_NEW_CARD = "SET_NEW_CARD";

export type ActionTypes = typeof GET_STATE | typeof SET_NEW_CARD;

export interface IAction {
  type: ActionTypes,
  payload: payloadAddCard,
}

export interface payloadAddCard {
  payload: CardInfo;
}
export interface CardInfo {
  id: number,
  text: string
}

export function getState(payload: payloadAddCard): IAction {
  return {
    type: GET_STATE,
    payload
  };
}

export function setNewCard(payload: payloadAddCard): IAction {
  return {
    type: SET_NEW_CARD,
    payload
  };
}