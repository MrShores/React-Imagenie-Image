import React from 'react';
import classes from './Numbers.module.css';

const numbers = (props) => {

    /**
     * Convert value to short string w/ units
     *  - value of 12,345 => 12.3mil
     *  - value of 1,234,000 => 1.2mil
     *  - value of 123,456,000 => 123.5mil
     */
    const niceNumber = (number) => {
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

    return (
        <div className={classes.Numbers}>
            VIEWS <span>{niceNumber(props.views)}</span>
            &emsp;
            DOWNLOADS <span>{niceNumber(props.downloads)}</span>
        </div>
    );
};

export default numbers;