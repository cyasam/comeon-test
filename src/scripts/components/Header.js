// Images
import logo from '../../images/logo.png';

import React from 'react';

const Header = () => {
    return (
        <div className="ui one column center aligned page grid">
            <div className="column twelve wide">
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
}

export default Header;