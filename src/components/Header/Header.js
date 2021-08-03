import React from "react";
import { Link } from "react-router-dom";
import BlackToolTip from "../BlackToolTip/BlackToolTip";

export default function Header() {
  return (
    <header className='mainHeader'>
      <nav className='navigationMain'>
        <ul className='navigationList'>
          <li className='navigationItem'>
            <BlackToolTip title='All Achievements'>
              <Link to='/all-achievements'>
                <i className='fas fa-trophy nav-icon icon-1 p-2'></i>
              </Link>
            </BlackToolTip>
          </li>
          <li className='navigationItem'>
            <BlackToolTip title='All Games'>
              <Link to='/all-games'>
                <i className='fas fa-gamepad nav-icon icon-2 p-2'></i>
              </Link>
            </BlackToolTip>
          </li>
          <li className='navigationItem'>
            <BlackToolTip title='Homepage'>
              <Link to='/'>
                <i className='fab fa-steam nav-icon icon-1 p-2'></i>
              </Link>
            </BlackToolTip>
          </li>

          <li className='navigationItem'>
            <BlackToolTip title='Achievements History'>
              <Link to='/achievements-history'>
                <i className='fas fa-book-open nav-icon icon-3 p-2'></i>
              </Link>
            </BlackToolTip>
          </li>
          <li className='navigationItem'>
            <BlackToolTip title='Milestones'>
              <Link to='/milestones'>
                <i className='fas fa-medal nav-icon icon-4 p-2'></i>
              </Link>
            </BlackToolTip>
          </li>
        </ul>
      </nav>
    </header>
  );
}
