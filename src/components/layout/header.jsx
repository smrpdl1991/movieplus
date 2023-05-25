import React , {useState, useEffect} from 'react';
import Link from 'next/link';

const Header = () => {

  return (
    <>
      
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                   Movie Plus
                </a>
                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>
                <ul className="nav">
                  <li>
                    <Link href='/'>Home</Link>
                  </li>
                  <li>
                    <Link href='/'>Movies</Link>
                  </li>
                  <li>
                    <Link href='/'>Genre</Link>
                  </li>
                  <li>
                    <a href="profile.html">
                      Profile 
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
