import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";



export default function Navbar(props){
    return (
        <nav className= {`navbar navbar-expand-lg navbar-${props.mode.color} bg-${props.mode.bg}`} >
  <div className="container-fluid" >
    <Link className="navbar-brand "  to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex align-items-center">      
        <button id='primary' className="btn btn-outline-primary bg-primary rounded-circle h-100 me-2" onClick={props.toggleMode} type="submit"><wbr/>.</button>
        <button id='dark' className="btn btn-outline-dark bg-dark rounded-circle h-100 me-2 border-light" onClick={props.toggleMode} type="submit"><wbr/>.</button>
        <button id='light' className="btn btn-outline-light bg-light rounded-circle h-100 me-2 border-dark" onClick={props.toggleMode} type="submit"><wbr/>.</button>

        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}