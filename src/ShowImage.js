import React from 'react';
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
        return fetch(`http://wp.localhost/wp-json/wp/v2/media/${id}`)
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