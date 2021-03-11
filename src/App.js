import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Books from './pages/Books'
import DetailPost from './pages/DetailPost';
import Home from'./pages/Home'
const App = () =>{
  return (
    <Router>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          {/* <Route path="/detail">
            <DetailPost />
          </Route> */}
          <Route path="/detail/:id" children={<DetailPost/>}/>
          <Route path="/books" children={<Books/>}/>

        </Switch>
    </Router>
  )
}


export default App