import { IAction } from "../actions/action";

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


export function reducer(state = initState, action: IAction) {
  switch(action.type) {
      case 'GET_STATE': return { ...state };
      case 'SET_NEW_CARD': return { ...state };
      
      default: return state;
  }
}