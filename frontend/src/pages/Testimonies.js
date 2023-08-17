import List from "../components/List";
import {Component} from 'react';

class Testimonies extends Component {
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
    const response = await fetch('http://localhost:5000/prayers');
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message);
    }
    this.setState({body: body});
    return body;
  }

  

  render(){
  let elem1 = {}

  let getData = function({title, description, name, dateCreated}) {
    return {title, description, name, dateCreated};
  }
  if (this.state.body[0] !== undefined) {
    elem1 = getData(this.state.body[0]);
  }
  return (
    <>
      <div>
        <p>This is the prayers page</p>
      </div>
      {
        Object.keys(this.state.body).map(key => {
          return (<List data={getData(this.state.body[key]) || 0} />)
        })
      }
    </>
  )}
}

export default Testimonies;