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
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message);
    }
    this.setState({body: body});
    return body;
  }

  

  render(){
  let elem1 = {}

  let getData = function({title, description, uid, date}) {
    return {title, description, uid, date};
  }
  if (this.state.body[0] !== undefined) {
    console.log(this.state.body);
    elem1 = getData(this.state.body[0]);
  }
  return (
    <>
      <div>
        <p>This is the home page</p>
      </div>
      <List data={elem1 || 0} />
    </>
  )}
}

export default Home;