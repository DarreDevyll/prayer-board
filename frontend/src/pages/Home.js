import List from "../components/List";
import {Component} from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null,
    body: {}};
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express}))
      .catch(err => console.log(err));
  }
  
  callBackendAPI = async () => {
    const response = await fetch('http://localhost:5000/');
    const body = await response.text();
  
    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(body);
    return body;
  }

  

  render(){
  return (
    <>
      <div>
        <p>This is the home page</p>
      </div>
    </>
  )}
}

export default Home;