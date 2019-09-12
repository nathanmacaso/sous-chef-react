import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <ul className="navbar-nav mx-auto">
      <li className="nav-item pr-3">
        <NavLink to="/recipes" className="nav-link">Recipes</NavLink>
      </li>
      <li className="nav-item pr-3">
        <NavLink to="/pantry" className="nav-link">Pantry</NavLink>
      </li>
      <li className="nav-item pr-3">
        <NavLink to="/cookbook" className="nav-link">Cookbook</NavLink>
      </li>
      <li className="nav-item pr-3">
        <NavLink to="/stores" className="nav-link">Find Stores</NavLink>
      </li>
      <li className="nav-item">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2 search-box" type="search" placeholder="Search Recipes" aria-label="Search" />
        <button className="btn btn-outline-light my-2 my-sm-0 search-button" type="submit">Search</button>
      </form>
      </li>
    </ul>
  )
}
