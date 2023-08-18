import { Component } from "react";

import { Content } from "../components/styles/Content.styled";
import UserCreationForm from "../components/UserCreationForm";




class Signup extends Component {



  render() {
  return (
    <>
    <Content>
      <UserCreationForm />
    </Content>
    </>
  )
  }
}

export default Signup;