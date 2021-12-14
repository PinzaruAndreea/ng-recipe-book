import { UserModel } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: UserModel
}

const initialState = {
  user: null
}

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new UserModel(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
      return {
        ...state,
        user
      }
    case AuthActions.LOGOUT:
    default:
      return state;
  }
}
