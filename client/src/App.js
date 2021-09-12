import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UpdateProfPage from "./pages/UpdateProfPage";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage"
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/register">
          {user ? <Home/> : <RegisterPage/>}
        </Route>
        <Route  path="/login">
          {user ? <Home/> : <LoginPage/>}
        </Route>
        <Route  path="/updateprofile">
           {user ? <UpdateProfPage/> : <RegisterPage/>}
        </Route>
        <Route  path="/create">
          {user ? <CreatePage/> : <RegisterPage/>}
        </Route>
        <Route  path="/post/:Id">
          <PostPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
