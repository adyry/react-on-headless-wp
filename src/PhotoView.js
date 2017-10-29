import React from 'react';

import ShowImage from './ShowImage'

export default class PhotoView extends React.Component {

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