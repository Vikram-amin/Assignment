
import {  REGISTER_USER_REQUEST ,REGISTER_USER_SUCCESS , REGISTER_USER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL} from "./actionType"


export const registerSucess = (payload) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload,
  };
} 


export const registerFailure = () => {
    return {
        type : REGISTER_USER_FAIL
    }
}


export const loginSucess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAIL,
  };
};


export const registerUser = (payload) => {
   
    return function (dispatch) {
        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.message === "Registration Success") {
              alert(data.message);
              dispatch(registerSucess(data));
            }else{
                alert(data.message);
            }
          })
          .catch((err) => dispatch(registerFailure(err)));
    }
}


export const loginUser = (payload) => async(dispatch) => {
  try {
        let res = await fetch(`http://masai-api-mocker.herokuapp.com/auth/login`,  {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        let data = await res.json();
        console.log(data)
        dispatch(loginSucess(data));

  } catch (error) {
    dispatch(loginFailure(error));
  }

};




