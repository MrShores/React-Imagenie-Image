import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import DetailsModal from './components/DetailsModal/DetailsModal';

import imageData from './assets/data/unsplash-data.js';

class App extends Component {

    state = {
        images: imageData,
        showDetails: false,
        doDetailsClosing: false,
        detailImage: null,
        activeImageID: null,
        imageNode: null,
        favorites: [],
    }

    imageClickHandler = (id, imageRef) => {
        let image = this.state.images.find((element) => {
            if( element.id === id ){
                return true;
            } else {
                return false;
            }
        });

        const imageNode = imageRef.current;

        this.setState({
            showDetails: true,
            activeImageID: id,
            detailImage: image,
            imageNode: imageNode,
        });
    }

    detailsCloseClick = () => {
        this.setState({doDetailsClosing: true});
    }

    detailsClosed = () => {
        console.log('[App] detailsClosed');
        this.setState({
            // Details states
            showDetails: false,
            doDetailsClosing: false,
            // Image related
            activeImageID: null,
            detailImage: null,
            imageNode: null,
        });
    }

    render(){
        return (
            <div className="App">
                <Navigation favoriteCount={this.state.favorites.length} />

                <ImageGrid
                    images={this.state.images}
                    activeImageID={this.state.activeImageID}
                    imageClick={this.imageClickHandler} />

                { this.state.showDetails ? (
                    <div className="DetailsCover" onClick={this.detailsCloseClick}></div>
                ) : null}

                { this.state.showDetails ? (
                    <DetailsModal
                        show={this.state.showDetails}
                        doClosing={this.state.doDetailsClosing}
                        image={this.state.detailImage}
                        imageNode={this.state.imageNode}
                        closeClick={this.detailsCloseClick}
                        onDestroyed={this.detailsClosed} />
                ) : null}
                
{/*

                <div>Favorites Drawer</div>
                <div>Notification</div>
                <div>StarAnimation</div>
*/}
            </div>
        );
    }
}

export default App;
