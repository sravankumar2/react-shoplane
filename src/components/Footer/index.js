import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";


const Footer = () => {
    return (<footer>
        <ul className="online-store">
            <li><h3>Online Store</h3></li>
            <li><Link to="/react-shoplane" className="link-item">Men Clothing</Link></li>
            <li><Link to="/react-shoplane" className="link-item">Women Clothing</Link></li>
            <li><Link to="/react-shoplane" className="link-item">Men Accessories</Link></li>
            <li><Link to="/react-shoplane" className="link-item">Women Accessories</Link></li>
        </ul>
        <ul className="helpful-links">
            <li><h3>Helpful Links</h3></li>
            <li><Link to="/react-shoplane" className="link-item">Home</Link></li>
            <li><Link to="/react-shoplane" className="link-item">About</Link></li>
            <li><Link to="/react-shoplane" className="link-item">Contact</Link></li>
        </ul>
        <ul className="patners">
            <li><h3>Patners</h3></li>
            <li><Link to="/react-shoplane" className="link-item">Zara</Link></li>
            <li><Link to="/react-shoplane" className="link-item">Pantaloons</Link></li>
            <li><Link to="/react-shoplane" className="link-item">Levis</Link></li>
            <li><Link to="/react-shoplane" className="link-item">Ucb</Link></li>
            <li><Link to="/react-shoplane" className="link-item">+ Many More</Link></li>
        </ul>
        <ul className="address">
            <li><h3>Address</h3></li>
            <li>Building 101</li>
            <li>Central Avenue</li>
            <li>LA - 902722</li>
            <li>United States</li>
        </ul>
    </footer>);
}

export default Footer;