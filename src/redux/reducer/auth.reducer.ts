import { LOGIN_AUTH } from '../types';

const state = {
  token: '',
  user: {},
};

interface IAction {
  type: string;
  payload?: any;
}

const loginReducer = (action: IAction): any => {
  switch (action?.type) {
    case LOGIN_AUTH:
      return { ...state, token: action.payload.token, user: action.payload.user };

    default:
      return state;
  }
};

export default loginReducer;
