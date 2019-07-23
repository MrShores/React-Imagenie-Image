import React from 'react';
import classes from './Navigation.module.css';
import Logo from './Logo/Logo';

const navigation = (props) => {

    const count = props.favoriteCount !== 0 ? props.favoriteCount : '';

    return (
        <nav className={classes.Navigation}>
            <Logo />
            <button className={classes.Button}>
                Favorites <span>{count}</span>
            </button>
        </nav>
    );
};

export default navigation;