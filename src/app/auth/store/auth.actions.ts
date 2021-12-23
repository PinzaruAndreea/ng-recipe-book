import { Action } from '@ngrx/store';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTHENTICATION_START = 'AUTHENTICATION_START';
export const AUTHENTICATION_FAIL = 'LOGIN_FAIL';
export const SIGNUP_START = 'SIGNUP_START';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const AUTO_LOGIN = 'AUTO_LOGIN';
export const LOGOUT = 'LOGOUT';

export class AuthenticateSuccess implements Action {
  readonly type = AUTH_SUCCESS;

  constructor(public payload: {
    email: string,
    userId: string,
    token: string,
    expirationDate: Date,
    redirect: boolean
  }) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AuthenticationStart implements Action {
  readonly type = AUTHENTICATION_START;
  constructor(public payload: {email: string, password: string}) {
  }
}

export class AuthenticationFail implements Action {
  readonly type = AUTHENTICATION_FAIL;
  constructor(public payload: string) {
  }
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: {email: string, password: string} ) {
  }
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions = AuthenticateSuccess | Logout | AuthenticationStart | AuthenticationFail | SignupStart | ClearError | AutoLogin;
