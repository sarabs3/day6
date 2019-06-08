import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
    <ul className="navigation">
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
);

export default Navigation;
