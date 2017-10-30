import React from 'react';

import Album from '../components/Album'
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
            <div>
                {(this.state.albums)
                    ?
                    <div>
                        {this.state.albums.map((album, i) => <Album {...album} key={i}/>)}<br />
                    </div>
                    : 'Loadiinnnnggg...'
                }
            </div>
        );
    }
}


