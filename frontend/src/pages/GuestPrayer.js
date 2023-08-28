import { Component, createRef } from "react";
import { Content } from "../components/styles/Content.styled";

// Form Elements
import { 
  StyledForm,
  Label, 
  TextField,
	TextareaField, 
  Submit, 
  FieldContainer, 
  FieldDescription,
  DropdownMenu, 
  SelectionField, 
  SelectOption, 
  CompletedFormMessage,
  Req
} from "../components/styles/UserCreationForm.styled"
import Captcha from "../components/Captcha";


class GuestPrayer extends Component {
	constructor (props) {
    super(props);

    this.state = { 
      nameForm: createRef(),
      FormData: {
      "Title": "",
      "Description": "",
      CaptchaData: {
        input: null,
        time: null
      }
      },
      Submitted: false,
			SubmitMessage: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCaptchaData = this.getCaptchaData.bind(this);
  }
    
  // Changing FormData apon fields being filled out
  handleChange(event) {
    // Add values to FormData State
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

    console.log(this.state.FormData);

    
    // Posting form to endpoint, and changing Submitted flag if successful (status = 201)
    fetch('http://localhost:5000/createprayer', options)
    .then((response) => {
      if (response.status == 200){
        this.setState({Submitted: true});
				this.forceUpdate();
        return response.json();
      }
    })
    .catch((err) => {
        console.log(err.message);
    })
    
  }

  getCaptchaData = (data) => {
    this.state.FormData.CaptchaData.time = data.time;
    this.state.FormData.CaptchaData.input = data.input;
  }


  
  componentDidMount() {
  }

  // Rendering form based on styled components defined in 'UserCreationForm.styled.js'
  render() {
  return (
    <>
		<Content>
    <CompletedFormMessage show={this.state.Submitted}>
        Form Successfully Submitted<br /> Thank you for your submission
    </CompletedFormMessage>
    <StyledForm onSubmit={this.handleSubmit} show={this.state.Submitted} ref={this.state.nameForm}>
      <FieldContainer>
        <Label>Title<Req>*</Req></Label>
        <FieldDescription>This will be the title of the Prayer.</FieldDescription>
        <TextField type="text" name="Title" required 
          value={this.state.FormData["Title"]} onChange={this.handleChange} />
      </FieldContainer>
      <FieldContainer>
        <Label>Description<Req>*</Req></Label>
        <FieldDescription>Get specific with what you have faith God will do in this.</FieldDescription>
        <TextareaField name="Description" required rows="7"
          value={this.state.FormData["Description"]} onChange={this.handleChange} />
      </FieldContainer>
      <FieldContainer>
        <Captcha data={this.getCaptchaData}/>
      </FieldContainer>
      <FieldContainer>
        <Submit type="submit" value="Submit" />
      </FieldContainer>
    </StyledForm>
		</Content>
    </>
  )
  }
}

export default GuestPrayer;