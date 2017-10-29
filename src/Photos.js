import React from 'react';

import PhotoView from './PhotoView'
import {url} from './_shared'


export default class Photos extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: []
        };
        this.getPhotos();
    }

    getPhotos() {
        return fetch(`${url}/photo`)
            .then(response => response.json())
            .then(json => {
                this.setState({photos: json})
            });
    }


    render() {
        return (
            <div>
            {(this.state.photos)
                ?
                <div>
                    {this.state.photos.map((photo, i) => <PhotoView {...photo} key={i}/>)}<br />
                </div>
                : 'Loadiinnnnggg...'
    }
            </div>
        );
    }
}


