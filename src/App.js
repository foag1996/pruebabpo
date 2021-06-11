import React from 'react';
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

function App() {
  return (
    <Router>

      <div className="container mt-5">
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="container-fluid">

              <a class="navbar-brand" href="/">People BPO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">

                  <li class="nav-item">
                    <NavLink to="/" className="btn btn-dark">Inicio</NavLink>
                  </li>

                  <li class="nav-item">
                    <Link to="/post" className="btn btn-dark">Post</Link>
                  </li>
                  
                  <li class="nav-item dropdown">

                    <Link to="/user" className="btn btn-dark dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">User</Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="/login">Login</a></li>
                      <li><a class="dropdown-item" href="/registro">Registro</a></li>
                    </ul>

                  </li>
                </ul>

              </div>

          </div>

        </nav>

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

          <Route path="/login">
            <Login />
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
