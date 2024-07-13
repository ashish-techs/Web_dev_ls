import React, { useEffect } from 'react';
function Navbar(props){
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary px-2 ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" className="btn btn-outline-warning ms-5" onClick={()=>props.addNote()}>New Note</button>
            </li>
          </ul>
          

          
          <div className="container justify-content-center ms-4">
            <a className="navbar-brand" href="#">
              <i className="bi bi-card-heading"></i>
            </a>
            <a className="navbar-brand fst-italic text-secondary me-5" href="#">My Notes</a>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success me-5" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
}
 
export default Navbar;