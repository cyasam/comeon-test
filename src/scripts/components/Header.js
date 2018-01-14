// Images
import logo from '../../images/logo.png';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui one column center aligned page grid">
            <div className="column twelve wide">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
        </div>
    );
}

export default Header;