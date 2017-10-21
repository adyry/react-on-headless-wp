import React, { Component } from 'react';

class ShowImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgsrc: ''};
        if (this.props.imgid) {
            this.getImage(this.props.imgid);
        }

    }

    getImage(id) {
        return fetch(`http://wp.localhost/wp-json/wp/v2/media/${id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({imgsrc: json.source_url});
            });
    }

    render() {
        if (this.state.imgsrc) {
            return (
                <img
                    className={this.props.cssClass}
                    src={this.state.imgsrc}
                />
            );
        } else {
            return null
        }
    }
}


export default ShowImage;