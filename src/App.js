import './App.css';
import {CFooter} from './components/CFooter'
import CHeader from './components/CHeader';
import CContents from './components/CContents'
import CNavbar from './components/CNavbar'
import CContact from './components/CContact'
import {CFooter2} from './components/CFooter2'


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <div>
    <Router>
      <Routes>
      <Route exact path="/" element={<><CHeader aName="Tomasz" aFamily="Grzesicki"/><CNavbar shadow="inset -1px 2px 10px 0px rgba(66, 68, 90, 1)" shadow2="inset 0px 0px 0px 0px rgba(0, 0, 90, 1)"/><CContents/><CFooter strona="Home"/></>}  />
      <Route exact path="/kontakt" element={<><CHeader aName="Tomasz" aFamily="Grzesicki"/><CNavbar shadow="inset 0px 0px 0px 0px rgba(0, 0, 90, 1)" shadow2="inset -1px 2px 10px 0px rgba(66, 68, 90, 1)"/><CContact/><CFooter2 strona="Kontakt"/></>}  />
      </Routes>
    </Router>
    </div>
    
    


    </div>
  );
}

export default App;
