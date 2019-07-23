import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import DetailsModal from './components/DetailsModal/DetailsModal';

import imageData from './assets/data/unsplash-data.js';

class App extends Component {

    state = {
        images: imageData,
        detailImage: {},
        favorites: [],
    }

    imageClickHandler = (id) => {
        let image = this.state.images.find((element) => {
            if( element.id === id ){
                return true;
            } else {
                return false;
            }
        });

        this.setState({detailImage: image});
    }

    render(){
        console.log(ImageData);
        return (
            <div className="App">
                <Navigation favoriteCount={this.state.favorites.length} />

                <ImageGrid images={this.state.images} imageClick={this.imageClickHandler} />

                <DetailsModal
                    image={this.state.detailImage} />

                <div>Favorites Drawer</div>
                <div>Notification</div>
                <div>StarAnimation</div>
            </div>
        );
    }
}

export default App;
