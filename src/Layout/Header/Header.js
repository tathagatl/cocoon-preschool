import React from 'react';

import classes from './Header.css'

const Header = props => {
    return (
        <header className={classes.Header}>
            <a href="#">Cocoon Preschool</a>
        </header>
    );
}

export default Header;