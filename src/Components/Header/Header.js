import React from 'react';

import classes from './Header.css'
import colors from '../../Constants/Colors.css';

const Header = props => {
    return (
        <header className={classes.Header}>
            <div className={classes.HeaderLayout}>
                <a className={colors.PrimaryColor} href="#">Cocoon Preschool</a>
            </div>
        </header>
    );
}

export default Header;