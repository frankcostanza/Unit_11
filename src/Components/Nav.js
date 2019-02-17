import React from 'react';
import {
    NavLink
} from 'react-router-dom';


const Nav = () => (
    <div>
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="/triathlon">Triathlon</NavLink>
                </li>
                <li>
                    <NavLink to="/climbing">Climbing</NavLink>
                </li>
                <li>
                    <NavLink to="/soccer">Soccer</NavLink>
                </li>
            </ul>
        </nav>
    </div>
);

export default Nav;

