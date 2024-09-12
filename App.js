
import './App.css';
import Navbar from './components/Navbar';
import Main from "./components/Main";
import Jobseeker from "./components/Jobseeker";
import FAQ from "./components/FAQ";
// import Form from './components/Form';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <div className="aclass">
          <div className="active">
            <Navbar title="BeingChoice" about="Contact Us" />
          </div>
          <Switch>
            <Route path="/FAQ">
              <FAQ/>
            </Route>
          
            <Route path="/jobseeker">
              <Jobseeker />
            </Route>
            <Route path="/home">
            <Main/>
            </Route>
            <Route path="/jobseeker">
              <Jobseeker />
            </Route>
            <Route path="/">
            <Main/>
            </Route>


          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
