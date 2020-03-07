import React from 'react';

import classes from './Header.css'
import colors from '../../Constants/Colors.css';

const Header = props => {
    const headerLayout = [classes.HeaderLayout, colors.PrimaryBottomBorder].join(' ');
    return (
        <header className={classes.Header}>
            <div className={headerLayout}>
                <a className={colors.Primary} href="#">Cocoon Preschool</a>
            </div>
        </header>
    );
}

export default Header;