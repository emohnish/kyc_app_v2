/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}
  
export default App;*/

// import 'react-perfect-scrollbar/dist/css/styles.css';
import React from "react";
import { useRoutes } from "react-router-dom";
// import { ThemeProvider } from '@material-ui/core';
// import GlobalStyles from 'src/components/GlobalStyles';
// import 'src/mixins/chartjs';
// import theme from 'src/theme';
import routes from "../src/routes";

import TopBar from "../src/layout/Dashboardlayout/TopBar";
import DashboardLayout from "../src/layout/Dashboardlayout/index";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  const routing = useRoutes(routes);

  console.log(routing);

  return (
    // <ThemeProvider theme={theme}>
    //   <GlobalStyles />
    <div>
      <GlobalStyles />
      {routing}
    </div>
    // </ThemeProvider>
  );
};

export default App;
