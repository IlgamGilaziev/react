import './App.css';
import React from 'react';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";
import {AddPost} from "./components/AddPost";
import {Reg} from "./components/Reg";



function ContactUs(){
    return(
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}
function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Menu/>
          <Route exact path="/" render={()=><PostList/>}/>
          <Route path="/contact-us" render={()=><ContactUs/>}/>
          <Route path="/addPost" render={()=><AddPost/>}/>
          <Route path="/reg" render={()=><Reg/>}/>
          <Route path="/post/:id" render={()=><Post/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
