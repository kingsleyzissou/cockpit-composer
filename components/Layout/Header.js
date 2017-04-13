import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-pf-vertical">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <nav className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right navbar-iconic">
          <li className="dropdown">
            <a
              className="nav-item-iconic"
              id="notifications"
            >
              <span className="fa fa-bell-o" title="No new notifications"></span>
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-toggle nav-item-iconic"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span title="Help" className="fa pficon-help"></span>
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Help</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-toggle nav-item-iconic"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span title="Username" className="fa pficon-user"></span>
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><a href="#">Preferences</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Header;
