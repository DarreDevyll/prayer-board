import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import './App.css';

//Pages:
import Home from './pages/Home';


const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px',
}

class App extends Component {
  state = { data: null};

  /*
  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express}))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('http://localhost:5000/');
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message)
    }
    console.log(body);
    return body;
  };*/

  //function App() {
  render() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Routes>
            <Route path='/' exact element={<Home />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}
}

export default App;


/*

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */