import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";




function Login() {
  let dispatch = useDispatch();


  let IntitialValue = {
    email: "",
    password: "",
  };

  const [formDetails, setFormDetails] = React.useState(IntitialValue);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({...formDetails, [name] : value})
  };

   const handleSubmit = (e) => {
     e.preventDefault();
    dispatch(loginUser(formDetails));

   };

  const { email, password } = formDetails;

  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <Form onSubmit={handleSubmit}>

          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <br />

          <input
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Login" />
        </Form>
      </div>
    </div>
  );
}


const Form = styled.form`
  width: 300px;
  margin: auto;
  padding: 40px;

  & input {
    width: 200px;
    height: 25px;
    margin: 5px;
  }
`;


export default Login;
