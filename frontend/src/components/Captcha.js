import { 
  Box,
  FailedCaptcha,
  CheckBox,
  Check,
  Default,
  CaptchaBox,
  Message,
  Image,
  Input,
  SubmitCaptcha } from "./styles/Captcha.styled";
import React, { useState, createRef, Component } from 'react';
import { Req } from "./styles/UserCreationForm.styled";
import Value from '../captcha'

class Captcha extends Component {
  constructor (props) {
    super(props);

  //Bind all the functions to the component
  this.sleep = this.sleep.bind(this);
  this.randomNumber = this.randomNumber.bind(this);
  this.Stopwatch = this.Stopwatch.bind(this);
  this.StartWatch = this.StartWatch.bind(this);
  this.Stop = this.Stop.bind(this);
  this.submitCaptcha = this.submitCaptcha.bind(this);

  // data for component
  this.state = { 
    clicks: 0,
    nameForm: createRef(null),
    nameBox: createRef(null),
    run: false,
    time: null,
    image: null,
    input: null
  }

  // generate random number for captcha
  this.randomNumber(0, 5);
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  randomNumber(min, max) {
    this.state.image = Math.floor(Math.random() * (max - min) + min)
    return this.state.image;
  }

  Stopwatch = async() => {
    var counter = 0;
    while (this.state.run)
    {
        counter += .01;
        this.state.time = counter.toFixed(2);
        await this.sleep(10);
    }
  }

  StartWatch() {
    this.state.run = true;
    this.Stopwatch();
  }

  Stop() {
    this.state.run = false;
  }

  async submitCaptcha() {

    // data to be returned to form
    const data = {
      time: '',
      input: false
    }
    
    // stop timer and set clicks
    this.Stop();
    this.state.clicks = 1;

    // Set references
    const form = this.state.nameForm.current;
    const box = this.state.nameBox.current;

    // Check if captcha correct
    if (form['captcha'].value.toLowerCase() == Value[this.state.image])
    {
      this.state.input=true;      // set input to true so captcha go away
      data.input = true;          // tell form captcha completed
      data.time = this.state.time;// tell form how long to complete
      this.props.data(data);      // send data to for
    } 
    // if incorrect
    else {
      this.randomNumber(0, 5);  // generate new image
      this.state.clicks = 0;    // reset clicks
      this.state.input=false;   // show failed captcha message
      box.checked = false;      // uncheck captcha
    }

    this.forceUpdate();
  }

  render() {

  return (
    <>
    <FailedCaptcha isFailed={this.state.input == false}>Captcha Failed, please try again</FailedCaptcha>
    <Box isClicked={this.state.clicks > 0} >
      <Default ref={this.state.nameBox} required type="checkbox" name='checkbox' onClick={this.StartWatch}/>      <CheckBox>Complete Captcha<Req>*</Req>
        <Check />
      </CheckBox>
      <CaptchaBox>
        <Image src={"captcha/"+this.state.image+".jpg"} />
        <Message>Enter the text into the field below: </Message>
        <form ref={this.state.nameForm}><Input name='captcha' />
        <SubmitCaptcha type="button" required onClick={this.submitCaptcha}>Submit Captcha</SubmitCaptcha>
        </form>
      </CaptchaBox>
    </Box>
    </>
  )
  }
}

export default Captcha;