import React, { Component } from 'react';
import classes from './FavoritesDrawer.module.css';
import Background from '../UI/Background/Background';
import Favorite from './Favorite';
import { Transition, animated } from 'react-spring/renderprops';

class FavoritesDrawer extends Component {
    render() {

        const favImages = [];
        this.props.images.forEach((image) => {
            if( this.props.favorites.includes(image.id) ){
                favImages.push(image);
            }
        });

        const cssClasses = this.props.show
            ? [classes.FavoritesDrawer, classes.Open]
            : [classes.FavoritesDrawer]

        return (           
            <animated.div className={cssClasses.join(' ')} style={this.props.style}>
                <Background
                    show={this.props.show}
                    click={this.props.closeFavorites} />

                <div className={classes.Favorites}>

                    <Transition
                        items={favImages}
                        keys={image => image.id}
                        from={{
                            opacity: 0,
                            transform: 'translateY(-50px)'}}
                        enter={{
                            opacity: 1,
                            transform: 'translateY(0)'}}
                        leave={{
                            opacity: 0,
                            transform: 'translateY(-200px)'}}
                        trail={100}
                        native>
                        {image => props => (
                            <Favorite
                                style={props}
                                key={image.id}
                                image={image}
                                favoriteClick={this.props.favoriteClick} />
                        )}
                    </Transition>

                    <Transition
                        items={favImages.length === 0}
                        from={{
                            opacity: 0,
                            transform: 'translateY(-30px)'}}
                        enter={{
                            opacity: 1,
                            transform: 'translateY(0)'}}
                        leave={{
                            opacity: 0,
                            transform: 'translateY(-30px)'}}
                        native>
                        {show => show && (styles => (
                            <animated.div className={classes.NoFavorites}
                                style={styles}>
                                <h3>No favorite images</h3>
                            </animated.div>
                        ))}
                    </Transition>

                </div>
            </animated.div>
        );
    }
};

export default FavoritesDrawer;