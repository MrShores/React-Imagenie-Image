import React, { Component } from 'react';
import classes from './DetailsModal.module.css';

class DetailsModal extends Component {

    /**
     * Convert value to short string w/ units
     *  - value of 12,345 => 12.3mil
     *  - value of 1,234,000 => 1.2mil
     *  - value of 123,456,000 => 123.5mil
     */
    niceNumber = (number) => {
        console.log(number);
        let niceNumber = null;
        if( !number ){
            niceNumber = '';
        } else if( number < 1000 ){
            niceNumber = number;
        } else if ( number < 10**6 ){ // < million
            niceNumber = (number / 10**3).toFixed(1) + 'k';
        } else if ( number < 10**9 ){ // < billion
            niceNumber = (number / 10**6 ).toFixed(1) + 'mil';
        } else if ( number < 10**12 ){ // < trillion
            niceNumber = (number / 10**9 ).toFixed(1) + 'bil';
        } else {
            niceNumber = 'O_o';
        }
        return niceNumber;
    }

    render() {
        const image = this.props.image;

        const cls = this.props.image === {}
            ? [classes.DetailsModal]
            : [classes.DetailsModal, classes.Open]

        return (
            <div className={cls.join(' ')}>
                <h3>{image.name}</h3>
                <a href={`https://unsplash.com/${image.at}`}
                    target="_blank" rel="noopener noreferrer">{image.at}</a>
                <div className={classes.Number}>
                    VIEWS <span>{this.niceNumber(image.views)}</span>
                </div>
                <div className={classes.Number}>
                    DOWNLOADS <span>{this.niceNumber(image.downloads)}</span>
                </div>
            </div>
        );
    }
};

export default DetailsModal;