import React from 'react';

import {url} from '../_shared'
import Project from '../components/Project'

import '../scss/Projects.css';
import '../scss/Spinner.css';


export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            tech: null
        };
        this.getProjects();
        this.getProjectTechnologies();
    }

    componentWillUnmount() {
        console.log('unmoint!');
    }

    getProjects() {
        return fetch(`${url}/project`)
            .then(response => response.json())
            .then(json => {
                this.setState({projects: json})
            });
    }

    getProjectTechnologies() {
        return fetch(`${url}/techno?per_page=100`)
            .then(response => response.json())
            .then(json => {
                const q = {};
                json.map(v => q[v.id] = v.name);
                this.setState({
                    tech: q
                });
            });
    }

    render() {
        return (
            <div className="Projects">
                {(this.state.projects)
                    ? this.state.projects.map((proj, i) => <Project {...proj} technologies={this.state.tech} key={i}/>)
                    : <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                }
            </div>

        );
    }
}


