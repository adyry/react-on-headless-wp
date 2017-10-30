import React from 'react';

import Album from '../components/Album'
import Other from '../components/OtherMusic'
import {url} from '../_shared'


export default class Photos extends React.Component {
    constructor() {
        super();
        this.state = {
            albums: []
        };
        this.getAlbums();
    }

    getAlbums() {
        return fetch(`${url}/albums?_embed`)
            .then(response => response.json())
            .then(json => {
                this.setState({albums: json})
            });
    }


    render() {
        return (
            <div className="Music">
                {(this.state.albums)
                    ? this.state.albums.map((album, i) => <Album {...album} key={i}/>)
                    : 'Loadiinnnnggg...'
                }
                <Other />
            </div>
        );
    }
}


