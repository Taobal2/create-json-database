import React, { useState } from "react";
import {
  Form,
  Content,
  Label,
  Input,
  Button,
  Div,
} from "../Styles/Form.styled";
import { useLocation, useNavigate } from "react-router-dom";

const FormComp = ({ onFormSubmit }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const users = location.state;

  // const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState(
    users && users.firstName != null ? users.firstName : ""
  );
  const [lastName, setLastName] = useState(
    users && users.lastName != null ? users.lastName : ""
  );
  const [email, setEmail] = useState(
    users && users.email != null ? users.email : ""
  );
  const [address, setAddress] = useState(
    users && users.address != null ? users.address : ""
  );
  const [mobileNumber, setMobileNumber] = useState(
    users && users.mobileNumber != null ? users.mobileNumber : ""
  );
  const [age, setAge] = useState(users && users.age != null ? users.age : "");
  const [id, setId] = useState(users && users.id != null ? users.id : null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const details = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      mobileNumber: mobileNumber,
      address: address,
    };

    onFormSubmit(details);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setMobileNumber("");
    setAddress("");
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Content>
          <Label htmlFor="firstName">FirstName</Label>
          <Input
            type="text"
            id="firstName"
            placeholder="Enter your firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Content>
        <Content>
          <Label>LastName</Label>
          <Input
            type=""
            required="required"
            placeholder="Enter your lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Content>
        <Content>
          <Label>Email</Label>
          <Input
            type="email"
            required="required"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Content>
        <Content>
          <Label>Address</Label>
          <Input
            type="text"
            required="required"
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Content>
        <Content>
          <Label>Age</Label>
          <Input
            type="number"
            required="required"
            placeholder="Enter your Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </Content>
        <Content>
          <Label>MobileNumber</Label>
          <Input
            type="number"
            required="required"
            placeholder="Enter your MobileNumber"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
          />
        </Content>
        <Button type="submit">save</Button>
        <Button onClick={goBack}>cancel</Button>
      </Form>
    </Div>
  );
};

export default FormComp;
