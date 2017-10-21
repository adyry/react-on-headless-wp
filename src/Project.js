import React, { Component } from 'react';

import './scss/Project.css';

import ShowImage from './ShowImage'

class Project extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    getTechnologies() {

    }

    render() {
        return (
            <div className="Project">
                {/*<span className="Project__text">*/}
                    <span className="Project__title">
                        {this.props.title.rendered}
                    </span>
                    <span className="Project__date">
                    ({(this.props.acf.datefrom)
                        ? <span>{this.props.acf.datefrom} - </span>
                        : ''}
                    {this.props.acf.dateto})
                    </span>
                {/*</span>*/}
                {this.props.tech.map(v =>
                    <div className="Project__technology">{this.props.techName(v)}</div>
                )}
                <br />
                <span className="Project__content" dangerouslySetInnerHTML={{__html: this.props.content.rendered}}/>
                {(this.props.featured_media) ?
                    <ShowImage cssClass="Project__image" imgid={this.props.featured_media} /> : null}
            </div>
        );
    }
}


export default Project;