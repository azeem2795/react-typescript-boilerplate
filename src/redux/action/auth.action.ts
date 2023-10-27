import { LOGIN_AUTH } from '../types';

const loginAction = (payload: any): any => ({
  type: LOGIN_AUTH,
  payload,
});

export default loginAction;
