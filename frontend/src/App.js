import React, { Component } from 'react';

// Components:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import ThemeButton from './components/ThemeButton';
import Navbar from './components/Nav';
import './App.css';

//Pages:
import Home from './pages/Home';
import Prayers from './pages/Prayers';
import Testimonies from './pages/Testimonies';

const lightTheme = {
  colors: {
    header: '#fff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px',
}

const darkTheme = {
  colors: {
    header: '#000',
    body: '#333',
    footer: '#003333'
},
mobile: '768px',
}

class App extends Component {
  state = { data: 0, theme: darkTheme, body: {}};

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express}))
      .catch(err => console.log(err));
  }
  
  callBackendAPI = async () => {
    const response = await fetch('http://localhost:5000/getprayers');
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message);
    }
    this.state.body = body
    console.log(this.state.body);
    return body;
  }

  //function App() {
  render() {
    
  const childToParent = (childdata) => {
    if (this.state.data == 0)
    {
      this.state.data = childdata;
      this.state.theme = darkTheme;
    }
    else
    {
      this.state.data = 0;
      this.state.theme = lightTheme;
    }
    console.log(this.state.data)
    console.log(this.state.theme)
  }

  console.log(this.state.data);

  return (
    <>
      <Router>
        <ThemeProvider theme={this.state.theme}>
        <GlobalStyles theme={this.state.theme} />
        {//<ThemeButton changeTheme={childToParent} />
}
        <Navbar childToParent={childToParent} />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/prayers' exact element={<Prayers />} />
            <Route path='/testimonies' exact element={<Testimonies />} />
            <Route path='/signup' exact element={<Home />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}
}

export default App;