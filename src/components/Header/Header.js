import React from "react";
import { Link } from "react-router-dom";
import BlackToolTip from "../BlackToolTip/BlackToolTip";

export default function Header() {
  return (
    <header className='mainHeader'>
      <nav className='navigationMain'>
        <ul className='navigationList'>
          <li className='navigationItem'>
            <BlackToolTip title='All Games'>
              <Link to='/'>
                <i className='fab fa-steam nav-icon p-2'></i>
              </Link>
            </BlackToolTip>
          </li>
          <li className='navigationItem'>
            <BlackToolTip title='All Achievements'>
              <Link to='/allgames'>
                <i className='fas fa-trophy nav-icon p-2'></i>
              </Link>
            </BlackToolTip>
          </li>

          <li className='navigationItem'>
            <BlackToolTip title='Achievement History'>
              <Link to='/allgames'>
                <i className='fas fa-book-open nav-icon p-2'></i>
              </Link>
            </BlackToolTip>
          </li>
        </ul>
      </nav>
    </header>
  );
}
