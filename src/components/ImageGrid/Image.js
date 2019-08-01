import React, { Component } from 'react';
import classes from './Image.module.css';

class Image extends Component {

    /**
     * Click Handler
     * Pass image ID and ref back up to <App> (through <ImageGrid>)
     */
    clickHandler = () => {
        if( !this.props.active ){
            this.props.click(this.props.image.id);
        }
    }

    render(){

        const cssClasses = [classes.Image];
        if( this.props.active ){
            cssClasses.push(classes.Active);
        }
        if( this.props.favorite ){
            cssClasses.push(classes.IsFavorite);
        }

        return (
            <div className={cssClasses.join(' ')} onClick={this.clickHandler}>
                <div className={classes.Thumbnail}>
                    <img src={this.props.image.images.thumb} alt="" />
                </div>
            </div>
        );
    }
};

export default Image;