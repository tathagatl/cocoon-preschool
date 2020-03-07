import React from 'react';

import classes from './Programmes.css'
import Colors from '../../../Constants/Colors.css';

const Programmes = props => {
    const programmesClass = [classes.Programmes, Colors.QuatreBackgrond].join(' ');
    return (
        <div className={programmesClass}>
            <h2>Programmes</h2>
            <h4>Here are the programmes</h4>
            <div className={classes.CardContainer}>
                <div className={classes.Card}></div>
                <div className={classes.Card}></div>
            </div>
            <div className={classes.CardContainer}>
                <div className={classes.Card}></div>
                <div className={classes.Card}></div>
            </div>
        </div>
    );
}

export default Programmes;