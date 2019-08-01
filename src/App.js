import React, { Component } from 'react';
import './App.css';
// Data
import imageData from './assets/data/unsplash-data.js';
// Components
import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import ImageModal from './components/ImageModal/ImageModal';

class App extends Component {

    state = {
        images: imageData,
        activeImage: null,
        activeImageID: '',
        favorites: ["2VXRa5gvpxc"],
    }

    /* Handlers
    -------------------------------------------------------------------------*/

    imageClickHandler = (imageID) => {
        this.addActiveImage(imageID);
    }

    closeImageHandler = (imageID) => {
        this.removeActiveImage(imageID);
    }

    favoriteImageHandler = (imageID) => {
        console.log('[App] favoriteImageHandler');
        // If favorite, remove
        if( this.state.favorites.includes(imageID) ){
            this.unfavoriteImage(imageID);
        } else { // Add to favorites
            this.favoriteImage(imageID);
        }
    }

    /* Methods / Utilities
    -------------------------------------------------------------------------*/

    /**
     * Add imageID to activeImageID
     */
    addActiveImage = (imageID) => {
        const img = this.state.images.filter(img => img.id === imageID);
        this.setState({
            activeImageID: imageID,
            activeImage: img[0],
        });
    }

    /**
     * Remove imageID from activeImageID
     */
    removeActiveImage = (imageID) => {
        this.setState({
            activeImageID: '',
            activeImage: {},
        });
    }

    /**
     * Add imageID to activeImageModals
     */
    addActiveImageModal = (imageID) => {
        // Update state if is not already included
        if( !this.state.activeImageModals.includes(imageID) ){
            const activeImageModals = [
                ...this.state.activeImageModals,
                imageID
            ];
            this.setState({activeImageModals: activeImageModals});
        }
    }

    /**
     * Remove imageID from activeImageModals
     */
    removeActiveImageModal = (imageID) => {
        // Update state if is already included
        if( this.state.activeImageModals.includes(imageID) ){
            const activeImageModals = this.state.activeImageModals.filter(
                item => item !== imageID
            )
            this.setState({activeImageModals: activeImageModals});
        }
    }

    /**
     * Favorite imageID
     */
    favoriteImage = (imageID) => {
        // Update state if is not already included
        if( !this.state.favorites.includes(imageID) ){
            const favs = [
                ...this.state.favorites,
                imageID
            ];
            this.setState({favorites: favs});
        }
    }

    /**
     * Remove imageID from favorites
     */
    unfavoriteImage = (imageID) => {
        // Update state if is already included
        if( this.state.favorites.includes(imageID) ){
            const favs = this.state.favorites.filter(
                item => item !== imageID
            )
            this.setState({favorites: favs});
        }
    }

    /* Render
    -------------------------------------------------------------------------*/

    render(){
        return (
            <div className="App">
                <Navigation favoriteCount={this.state.favorites.length} />

                <ImageGrid
                    images={this.state.images}
                    imageClick={this.imageClickHandler}
                    favorites={this.state.favorites} />

                {this.state.activeImageID ? (
                    <ImageModal
                        image={this.state.activeImage}
                        favorites={this.state.favorites}
                        closeClick={this.closeImageHandler}
                        favoriteClick={this.favoriteImageHandler} />
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
