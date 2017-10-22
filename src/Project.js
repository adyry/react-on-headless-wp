import React from 'react';

import './scss/Project.css';

import ShowImage from './ShowImage'

class Project extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            tech: null
        }
    }

    render() {
        return (
            <div className="Project">
                <div className="Project__image-wrap">
                    <ShowImage cssClass="Project__image" imgid={this.props.featured_media} />
                </div>
                <div className="Project__text-wrap">
                    <div className="Project__head">
                        <span className="Project__title">
                            {this.props.title.rendered}
                        </span>
                        <span className="Project__date">
                        ({(this.props.acf.datefrom)
                            ? <span>{this.props.acf.datefrom} - </span>
                            : ''}
                        {this.props.acf.dateto})
                        </span>
                    </div>
                    {(this.props.technologies)
                        ? this.props.tech.map(tech =>
                            <div className="Project__technology" key={tech}>{tech} {this.props.technologies[tech]}</div>
                        )
                        : <div className="Project__technology">Loading...</div>}
                    <div className="Project__content" dangerouslySetInnerHTML={{__html: this.props.content.rendered}}/>
                </div>
            </div>
        );
    }
}


export default Project;