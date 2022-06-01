import {  REGISTER_USER_SUCCESS , REGISTER_USER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL} from "./actionType"

let initialState = {
    isLoading : false,
    isAuthenticated : false,
    isError : false,
    user : {}
}

export const ReisterReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          isError: false,
          user: action.payload,
        };

      case REGISTER_USER_FAIL:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: false,
          isError: true,
          user: null,
        };

      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          isError: false,
          user: action.payload,
        };

      case LOGIN_FAIL:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: false,
          isError: true,
          user: null,
        };

      default:
        return state;
    }

}