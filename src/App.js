import React, { Component } from 'react';
import './App.css';
// Data
import imageData from './assets/data/unsplash-data.js';
// Components
import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import ImageModal from './components/ImageModal/ImageModal';
import FavoritesDrawer from './components/FavoritesDrawer/FavoritesDrawer';
// React Spring
import { Transition } from 'react-spring/renderprops';

class App extends Component {

    state = {
        images: imageData,
        activeImage: null,
        activeImageID: '',
        favorites: ["2VXRa5gvpxc", "pazM9TQJ2Ck"],
        showFavorites: false,
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

    toggleFavoritesDrawer = () => {
        const showFavorites = this.state.showFavorites;
        this.setState({
            showFavorites: !showFavorites
        });
    }

    closeFavoritesDrawer = () => {
        this.setState({
            showFavorites: false
        });
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
        // If favorite, remove
        if( this.state.favorites.includes(imageID) ){
            this.unfavoriteImage(imageID);
        } else { // Add to favorites
            this.favoriteImage(imageID);
        }
    }

    /* Render
    -------------------------------------------------------------------------*/

    render(){

        const showImageModal = this.state.activeImageID !== '';

        return (
            <div className="App">
                <Navigation
                    favoriteCount={this.state.favorites.length}
                    toggleFavorites={this.toggleFavoritesDrawer} />

                <ImageGrid
                    images={this.state.images}
                    imageClick={this.imageClickHandler}
                    favorites={this.state.favorites} />

                <Transition
                    items={showImageModal}
                    from={{opacity: 0}}
                    enter={{opacity: 1}}
                    leave={{opacity: 0}}
                    config={showImageModal ? {} : {duration: 200}}
                    native>
                    {show => show && (style => (
                        <ImageModal
                            show={showImageModal}
                            style={style}
                            image={this.state.activeImage}
                            favorites={this.state.favorites}
                            closeClick={this.closeImageHandler}
                            favoriteClick={this.favoriteImageHandler} />
                    ))}
                </Transition>

                <Transition
                    items={this.state.showFavorites}
                    from={{
                        opacity: 0,
                        transform: 'translateY(-50px)'}}
                    enter={{
                        opacity: 1,
                        transform: 'translateY(0)'}}
                    leave={{
                        opacity: 0,
                        transform: 'translateY(-80px)'}}
                    native>
                    {show => show && (style => (
                        <FavoritesDrawer
                            show={this.state.showFavorites}
                            style={style}
                            images={this.state.images}
                            favorites={this.state.favorites}
                            favoriteClick={this.favoriteImageHandler}
                            closeFavorites={this.closeFavoritesDrawer} />
                    ))}
                </Transition>
                
            </div>
        );
    }
}

export default App;
