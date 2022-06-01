import React,{useState} from 'react'
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from '../Redux/Login/action';
import { useNavigate } from "react-router-dom";

function Register() {
  let dispatch = useDispatch()
  let { isAuthenticated, isError } = useSelector((state) => state.Register);
  let navigate = useNavigate()

    let initialValue = {
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description: "",
    };

  let [formData, setFormData] = useState(initialValue)

 

   const { name, email, username, password, mobile, description } = formData;

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData({...formData, [name] : value })
  }


  const handleSubmit = (e) => {
         e.preventDefault();
       
         if(isAuthenticated){
           navigate("/login")
           
         }

         dispatch(registerUser(formData));
           console.log(isAuthenticated, isError);
  }

  return (
    <div>
      <h1>Register Page</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Label>
          Name :
          <Input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={name}
          />
        </Label>
        <br />
        <Label>
          User Name :
          <Input
            name="username"
            type="text"
            placeholder="User Name"
            onChange={handleChange}
            value={username}
          />
        </Label>
        <br />

        <Label>
          Email :
          <Input
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
        </Label>
        <br />

        <Label>
          Password :
          <Input
            name="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
        </Label>
        <br />

        <Label>
          Mobile :
          <Input
            name="mobile"
            type="number"
            placeholder="mobile"
            onChange={handleChange}
            value={mobile}
          />
        </Label>
        <br />
        <Label>
          Description :
          <Input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
            value={description}
          />
        </Label>
        <br />

        <br />
        <Label>
          <Input type="submit" value="SUBMIT" />
        </Label>
      </Form>
    </div>
  );
}



const Form = styled.form`
  width: 300px;
  margin: auto;
  padding: 40px;
`;

const Input = styled.input`
  width: 200px;
  height: 25px;
  margin: 5px;
  position: absolute;
  left: 90px;
  top: -10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export default Register