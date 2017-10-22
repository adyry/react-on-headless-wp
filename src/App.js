import React from 'react';

// import Menu from './Menu'
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
                    Projects: <br/>{this.state.projects.map((proj, i) => <Project {...proj} technologies={this.state.tech} key={i}/>)}<br />
                    Photos: {this.state.photos.map((proj, i) => <PhotoView {...proj} key={i}/>)}<br />
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
    }
}

export default App;
