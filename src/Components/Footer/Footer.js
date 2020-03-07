import React from 'react';

import classes from './Footer.css'
import colors from '../../Constants/Colors.css';

const Footer = props => {
    return (
        <div className={[classes.Footer, colors.TertiaryBackground, colors.PrimaryTopBorder].join(' ')}>
            <div className={classes.FooterDataContainer}>
                <div className={classes.FooterData}>Lorem ipsum dolizzle sit amizzle, consectetuer dang phat. Nullizzle fo shizzle my nizzle mah nizzle, aliquet dope, daahng dawg shizzle my nizzle crocodizzle, gravida vel, ass. Pellentesque ass tortizzle. Brizzle erizzle. I saw beyonces tizzles and my pizzle went crizzle izzle dolor dapibizzle turpis tempus tempor.</div>
                <div className={classes.FooterData}>Lorem ipsum dolizzle sit amizzle, consectetuer dang phat. Nullizzle fo shizzle my nizzle mah nizzle, aliquet dope, daahng dawg shizzle my nizzle crocodizzle, gravida vel, ass. Pellentesque ass tortizzle. Brizzle erizzle. I saw beyonces tizzles and my pizzle went crizzle izzle dolor dapibizzle turpis tempus tempor.</div>
                <div className={classes.FooterData}>Lorem ipsum dolizzle sit amizzle, consectetuer dang phat. Nullizzle fo shizzle my nizzle mah nizzle, aliquet dope, daahng dawg shizzle my nizzle crocodizzle, gravida vel, ass. Pellentesque ass tortizzle. Brizzle erizzle. I saw beyonces tizzles and my pizzle went crizzle izzle dolor dapibizzle turpis tempus tempor.</div>
                <div className={classes.FooterData}>Lorem ipsum dolizzle sit amizzle, consectetuer dang phat. Nullizzle fo shizzle my nizzle mah nizzle, aliquet dope, daahng dawg shizzle my nizzle crocodizzle, gravida vel, ass. Pellentesque ass tortizzle. Brizzle erizzle. I saw beyonces tizzles and my pizzle went crizzle izzle dolor dapibizzle turpis tempus tempor.</div>
            </div>
        </div>
    );
}

export default Footer;