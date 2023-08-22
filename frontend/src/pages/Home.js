import {Component} from 'react';

import { Content } from '../components/styles/Content.styled';
import List from "../components/List";
import VideoHeader from '../components/VideoHeader';


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
  const video = {
    file: "three_candles.mp4",
    type: "video/mp4"
  }

  return (
    <>
    <VideoHeader video={video} />
    <Content>
      <div>
        <p>This is the home page</p>
      </div>
    </Content>
    </>
  )}
}

export default Home;