import React from 'react';
import {url} from './_shared'
import placeholder from './img/image-placeholder.svg'

class ShowImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgsrc: placeholder};
        if (this.props.imgid) {
            this.getImage(this.props.imgid);
        }
    }

    getImage(id) {
        return fetch(`${url}/media/${id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({imgsrc: json.source_url});
            });
    }

    render() {
            return (
                <img
                    className={this.props.cssClass}
                    src={this.state.imgsrc}
                    alt={this.props.cssClass.replace('__', ' ')}
                />
            );
        }
}


export default ShowImage;