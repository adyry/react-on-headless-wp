import React, {Component} from 'react';

import Menu from './Menu'
import Project from './Project'
import PhotoView from './PhotoView'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            photos: [],
            tech: null,
            techFetched: null
        };
        this.getProjects();
        this.getPhotos();
        this.getTechName = this.getTechName.bind(this);

    }

    getProjects() {
        return fetch('http://wp.localhost/wp-json/wp/v2/project')
            .then(response => response.json())
            .then(json => {
                this.setState({projects: json})
            });
    }

    getProjectTechnologies() {
        return fetch('http://wp.localhost/wp-json/wp/v2/tech')
            .then(response => response.json())
            .then(json => {
                const q = {};
                json.map(v => q[v.id] = v.name);
                this.setState({
                    tech: q
                });
            });
    }

    getTechName(id) {
        if (this.state.tech) {
            return this.state.tech[id]
        } else {
            this.getProjectTechnologies()
                .then(() => this.state.tech[id])
        }
    }

    getPhotos() {
        return fetch('http://wp.localhost/wp-json/wp/v2/photo')
            .then(response => response.json())
            .then(json => {
                this.setState({photos: json})
            });
    }

    render() {

        if (this.state.projects && this.state.photos) {
            return (
                <div>
                    Projects: {this.state.projects.map((proj, i) => <Project {...proj} techName={this.getTechName} key={i}/>)}<br />
                    Photos: {this.state.photos.map((proj, i) => <PhotoView {...proj} key={i}/>)}<br />
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
    }
}

export default App;
