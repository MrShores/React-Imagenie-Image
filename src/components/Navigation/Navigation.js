import React, { Component } from 'react';
import classes from './Navigation.module.css';
import Logo from './Logo';

class Navigation extends Component {

    shouldComponentUpdate = (nextProps, nextState) => {
        if( nextProps.favoriteCount !== this.props.favoriteCount ){
            return true;
        }
        return false;
    };

    render() {
   
        return (
            <nav className={classes.Navigation}>
                <Logo />
                <button className={classes.Button}>
                    Favorites <span>{this.props.favoriteCount}</span>
                </button>
            </nav>
        );
    }
};

export default Navigation;