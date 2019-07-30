import React, { Component } from 'react';
import classes from './Image.module.css';

class Image extends Component {

    /**
     * Create DOM ref to get click x, y,
     * and dimensions of the node
     */
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.props.imageMount(this.props.image.id, this.imageRef);
    }

    /**
     * Click Handler
     * Pass image ID and ref back up to <App> (through <ImageGrid>)
     */
    clickHandler = () => {
        if( !this.props.active ){
            this.props.click(this.props.image.id);
        }
    }

    /**
     * Render
     */
    render(){

        const cssClasses = [classes.Image];
        if( this.props.active ){
            cssClasses.push(classes.Active);
        }
        if( this.props.favorite ){
            cssClasses.push(classes.IsFavorite);
        }

        return (
            <div className={cssClasses.join(' ')}
                ref={this.imageRef}
                onClick={this.clickHandler}>
                <div className={classes.ImageInner}>
                    <img src={this.props.image.images.thumb} alt="" />
                </div>
            </div>
        );
    }
};

export default Image;