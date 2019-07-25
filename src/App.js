import React, { Component } from 'react';
import './App.css';
// Data
import imageData from './assets/data/unsplash-data.js';
// Components
import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import DetailsModal from './components/DetailsModal/DetailsModal';
import Aux from './hoc/Auxiliary';


class App extends Component {

    state = {
        images: imageData,
        showDetails: false,
        doDetailsClosing: false,
        activeImage: null,
        activeImageID: null,
        imageNode: null,
        favorites: ["2VXRa5gvpxc"],
    }

    imageClickHandler = (id, imageRef) => {

        if( this.state.showDetails ){ // An image is open 
            this.detailsCloseClick();
            return;
        }

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
            activeImage: image,
            activeImageID: id,
            imageNode: imageNode,
        });
    }

    favoriteImageHandler = () => {
        // If id is not alread in Favorites
        if( this.state.favorites.indexOf(this.state.activeImageID) ){
            // Add to state.favorites
            this.setState((state, props) => {
                return {
                    favorites: [
                        ...state.favorites,
                        state.activeImageID
                    ]
                };
            });
        }
    }

    detailsCloseClick = () => {
        this.setState({doDetailsClosing: true});
    }

    detailsClosed = () => {
        this.setState({
            // Image related
            activeImage: null,
            activeImageID: null,
            activeImageRef: null,
            imageNode: null,
        });
        setTimeout(() => {
            this.setState({
                // Details states
                showDetails: false,
                doDetailsClosing: false,
            });
        }, 50);
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
                    <Aux>
                        {/*
                        <div className="DetailsCover" onClick={this.detailsCloseClick}></div>
                        */}
                        <DetailsModal
                            show={this.state.showDetails}
                            doClosing={this.state.doDetailsClosing}
                            image={this.state.activeImage}
                            imageNode={this.state.imageNode}
                            closeClick={this.detailsCloseClick}
                            favoriteClick={this.favoriteImageHandler}
                            onDestroyed={this.detailsClosed} />
                    </Aux>
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
