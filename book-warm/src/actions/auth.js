import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
import api from '../api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.bookJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch =>{
    localStorage.removeItem("bookJWT");
    dispatch(userLoggedOut());
  };

export const confirm = (token) => api.user.confirm(token)
  .then(user=> {
    localStorage.bookJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const resetPasswordrequest = ({email}) => () =>
  api.user.resetPasswordrequest(email);

export const validateToken = (token) => () =>
api.user.validateToken(token);
