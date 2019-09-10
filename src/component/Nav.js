import React, {useState, useContext} from 'react';
import { Link, Route } from 'react-router-dom';
import {MovieContext} from './MovieContext'

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  return (
      <Route
          path={to}
          exact={activeOnlyWhenExact}
          children={({ match }) => (
          <div className={match ? "active" : ""}>
              {match ? "" : ""}
              <Link to={to}>{label}</Link>
          </div>
      )}
      />
  );
}

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return(
    <div>
      <h4>Movie Total: {movies.length}</h4>
      <nav className="site-nav">
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/about" label="About" />
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/shop" label="Shop" />
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/search" label="Search" />
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link> */}
      </nav>
    </div>
  )
}

export default Nav;