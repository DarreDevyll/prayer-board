import { Component } from "react"
import { 
  StyledForm,
  Label, 
  Field, 
  Submit, 
  FieldContainer, 
  FieldDescription,
  DropdownMenu, 
  SelectionField, 
  SelectOption, 
  CompletedFormMessage,
  Req
} from "./styles/UserCreationForm.styled"
import Captcha from "./Captcha";
import { useState, useRef, useEffect } from "react";
import {time, input} from "./Captcha";

class UserCreationForm extends Component {
  constructor (props) {
    super(props);

    this.state = { 
      FormData: {
      "name": "",
      "loginID": "",
      "email": "",
      "password": "",
      },
      Submitted: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  // Changing FormData apon fields being filled out
  handleChange(event) {
    const field = event.target.name;
    var FormData = this.state.FormData;
    FormData[field] = event.target.value;
    this.setState({FormData});
  }

  // Posting data to endpoint and changing Submitted flag if successful
  handleSubmit(event) {
    event.preventDefault();

    // HTTP options for fetch
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state.FormData)
    }

    // Posting form to endpoint, and changing Submitted flag if successful (status = 201)
    fetch('https://localhost:5000/createUser', options)
    .then((response) => {
      if (response.status == 201){
        this.setState({Submitted: true});
        return response.json();
      }
    })
    .catch((err) => {
        console.log(err.message);
    })
  }

  // Getting form options on component mount
  componentDidMount() {
  }

  // Rendering form based on styled components defined in 'UserCreationForm.styled.js'
  render() {
  return (
    <>
    <CompletedFormMessage show={this.state.Submitted}>
        Form Successfully Submitted<br /> Thank you for your submission
    </CompletedFormMessage>
    <StyledForm onSubmit={this.handleSubmit} show={this.state.Submitted}>
      <FieldContainer>
        <Label>Name<Req>*</Req></Label>
        <FieldDescription>This is the name that will be displayed when making prayers/testimonies. We prefer your real first name.</FieldDescription>
        <Field type="text" name="name" required 
          value={this.state.FormData["name"]} onChange={this.handleChange} />
      </FieldContainer>
      <FieldContainer>
        <Label>LoginID<Req>*</Req></Label>
        <FieldDescription>This is the name you will use to sign into your account. Feel free to make it whatever you want.</FieldDescription>
        <Field type="text" name="name" required 
          value={this.state.FormData["loginID"]} onChange={this.handleChange} />
      </FieldContainer>
      <FieldContainer>
        <Label>Email<Req>*</Req></Label>
        <FieldDescription>Please enter a valid email for activating your account.</FieldDescription>
        <Field type="email" name="email" required 
          value={this.state.FormData["email"]} onChange={this.handleChange} />
      </FieldContainer>
      <FieldContainer>
        <Label>Password<Req>*</Req></Label>
        <FieldDescription>This is the the password you will use to sign into your account. Choose wisely</FieldDescription>
        <Field type="password" name="password" required 
          value={this.state.FormData["password"]} onChange={this.handleChange} />
      </FieldContainer>
      <FieldContainer>
        <Submit type="submit" value="Submit" />
      </FieldContainer>
    </StyledForm>
    </>
  )
  }
}

export default UserCreationForm;