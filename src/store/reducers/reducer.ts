import {
  INCREMENT,
  DECREMENT,
  IAction,
  ActionTypes,
  IPayload
} from "./actions";

export const initState = {
  list: [
          [
            {
              id: 1,
              text: 'Write a cool JS library',
            },
            {
              id: 2,
              text: 'Make it generic enough',
            },
          ],
          [
          {
            id: 1,
            text: 'Write a cool JS library',
          },
          {
            id: 2,
            text: 'Write a cool JS library',
          },
        ]
      ]
};


export function reducer(state = initState, action) {
  switch(action.type) {
      case ACTION_1: return { value: action.value_1 };
      
      default: return state;
  }
}