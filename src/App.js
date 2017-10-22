import React from 'react';
import {url} from './_shared'

import Menu from './Menu'
import Project from './Project'
import PhotoView from './PhotoView'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            photos: [],
            tech: null
        };
        this.getProjects();
        this.getProjectTechnologies();
        this.getPhotos();

    }

    getProjects() {
        return fetch(`${url}/project`)
            .then(response => response.json())
            .then(json => {
                this.setState({projects: json})
            });
    }

    getProjectTechnologies() {
        return fetch(`${url}/tech`)
            .then(response => response.json())
            .then(json => {
                const q = {};
                json.map(v => q[v.id] = v.name);
                this.setState({
                    tech: q
                });
            });
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
                    <Menu />
                    {(this.state.projects)
                        ?
                        <div>
                            Projects: <br/>{this.state.projects.map((proj, i) => <Project {...proj} technologies={this.state.tech} key={i}/>)}<br />
                        </div>
                        : 'Loading...'
                    }
                    {(this.state.photos)
                        ?
                        <div>
                            Photos: {this.state.photos.map((proj, i) => <PhotoView {...proj} key={i}/>)}<br />
                        </div>
                        : 'Loadiinnnnggg...'
                    }
                </div>
            )
    }
}

export default App;
