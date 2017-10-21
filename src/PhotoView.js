import React, { Component } from 'react';

import ShowImage from './ShowImage'

class ProjectView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="photo">
                date: {this.props.date}<br />
                title: {this.props.title.rendered} <br />
                content: <span dangerouslySetInnerHTML={{__html: this.props.content.rendered}}/><br />
                img: <ShowImage cssClass="elooooo" imgid={this.props.featured_media} />
            </div>
        );
    }
}


export default ProjectView;