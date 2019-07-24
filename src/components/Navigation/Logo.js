import React from 'react';
import classes from './Logo.module.css';
import { ReactComponent as SvgLogo } from '../../assets/svg/imagenie-logo.svg';

const logo = (props) => {
    return (
        <a href="/" className={classes.Logo}>
            <SvgLogo />
        </a>
    );
};

export default logo;