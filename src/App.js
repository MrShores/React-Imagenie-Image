import React, { Component } from 'react';
import './App.css';
// Data
import imageData from './assets/data/unsplash-data.js';
// Components
import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import ImageModals from './components/ImageModals/ImageModals';

class App extends Component {

    state = {
        images: imageData,
        imageNodes: {},
        activeImages: [],
        activeImageModals: [],
        favorites: ["2VXRa5gvpxc"],
    }

    /* Handlers
    -------------------------------------------------------------------------*/

    /**
     * Populate refs when each <Image> mounts
     */
    populateImageNode = (imageID, imageRef) => {
        this.setState(state => {
            const nodes = state.imageNodes;
            nodes[imageID] = imageRef.current;
            return {
                imageNodes: nodes
            };
        });
    }

    imageClickHandler = (imageID) => {
        this.addActiveImage(imageID);
        this.addActiveImageModal(imageID);
    }

    closeImageModalHandler = (imageID, duration) => {
        setTimeout(() => {
            this.removeActiveImage(imageID);
            setTimeout(() => {
                this.removeActiveImageModal(imageID);
            }, duration + 1000);
        }, duration);
    }

    favoriteImageHandler = (imageID) => {
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
     * Add imageID to activeImages
     */
    addActiveImage = (imageID) => {
        // Update state if is not already included
        if( !this.state.activeImages.includes(imageID) ){
            const activeImages = [
                ...this.state.activeImages,
                imageID
            ];
            this.setState({activeImages: activeImages});
        }
    }

    /**
     * Remove imageID from activeImages
     */
    removeActiveImage = (imageID) => {
        // Update state if is already included
        if( this.state.activeImages.includes(imageID) ){
            const activeImages = this.state.activeImages.filter(
                item => item !== imageID
            )
            this.setState({activeImages: activeImages});
        }
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
                    activeImages={this.state.activeImages}
                    favorites={this.state.favorites}
                    imageClick={this.imageClickHandler}
                    imageMount={this.populateImageNode} />

                <ImageModals
                    images={this.state.images}
                    activeImageModals={this.state.activeImageModals}
                    favorites={this.state.favorites}
                    imageNodes={this.state.imageNodes}
                    closeClick={this.closeImageModalHandler}
                    favoriteClick={this.favoriteImageHandler} />
             
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
