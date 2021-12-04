import React, { useState } from "react";
import {
  Form,
  Content,
  Label,
  Input,
  Button,
  Div,
} from "../Styles/Form.styled";

const FormComp = ({ onFormSubmit }) => {
  const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const details = {
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
        <Button type="submit">Add</Button>
      </Form>
    </Div>
  );
};

export default FormComp;
