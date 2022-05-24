import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MainPage from './containers/MainPage';

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Noto Sans JP", sans-serif !important',
    },
    overrides: {
      MuiButtonBase: {
        root: {
          outline: "0 !important",
        },
      },
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Switch>
            {/* <Route path="/dashboard"> */}
              {/* <Dashboard> */}
                <Route path="/MainPage" component={MainPage} />
              {/* </Dashboard> */}
            {/* </Route> */}
          <Route>404</Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
