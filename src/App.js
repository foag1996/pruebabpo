import React, {useState}  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Home } from './components/Home';
import Login from './components/Login';
import {Post} from './components/Post';
import { Registro } from './components/Registro';
import {User} from './components/User';
import logo1 from './img/logo1.png';

function App() {

  ///crear el hook e iniciar en false
  const [isLog, setIslog] = useState(false)
  



  return (
    <Router>

      <div className="container mt-5">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <div className="container-fluid">

              <a className="navbar-brand" href="/">
              <img src={logo1} 
              width="180"
              height="80"
              className="d-inline-block align-top"
                alt="./img/logo1.png" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">

                  <li className="nav-item">
                    <NavLink to="/" className="btn btn-dark">Home</NavLink>
                  </li>

                  {
                     //mostrar si esta logueado
                    isLog &&
                    <li class="nav-item">
                      <Link to="/post" className="btn btn-dark">Post</Link>
                    </li>
                  }

                  
                  <li className="nav-item dropdown">

                    <Link to="/user" className="btn btn-dark dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">User</Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="/login">Login</a></li>
                      <li><a className="dropdown-item" href="/registro">Registro</a></li>
                    </ul>

                  </li>
                </ul>

              </div>

          </div>

        </nav>

        <hr/>

        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/post">
            <Post />
          </Route>

          <Route path="/user">
            <User />
          </Route>

          <Route path="/login" 
          component={()=><Login 
          setIslog={setIslog}/>} >
            
          </Route>

          <Route path="/registro">
            <Registro />
          </Route>

        </Switch>

      </div>


    </Router>
  );
}

export default App;
