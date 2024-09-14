import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HouseContextProvider } from '../Context/apiContext';
import Home from '../Components/homeComp/Home';


const App = () => {
  return (
    <div>
      <HouseContextProvider>
        <div>
          <Router>
            <Routes>
              <Route path = "/" element = {<Home/>}></Route>
              <Route path = "/homeQuest/propertyForSell" ></Route>
              <Route path = "/homeQuest/propertyForRent" ></Route>
              <Route path = "/homeQuest/propertyForRent/:id" ></Route>
              <Route path = "/homeQuest/propertyForSell/:id"></Route>
            </Routes>
          </Router>
        </div>
        </HouseContextProvider>

    </div>
  )
}

export default App;
