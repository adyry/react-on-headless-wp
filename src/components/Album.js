import React from 'react';

import '../scss/Album.css';

export default class Album extends React.Component {
    constructor(props) {
        super();
        console.log((props.acf.links.split(',')));
        this.links = props.acf.links.split(',');
    }

    processLink(linkstr, i) {
        const links = linkstr.split('::');
        if (links.length === 2) {
            return (
                <a href={links[1].trim()} key={i}>
                    {links[0].trim()}
                </a>
            );
        }
    }

    render() {
        return (
            <div className="Album Album--other">
                <h1>{this.props.title.rendered}</h1>
                <h2>{this.props.acf.date.replace(/_/g, '.')}</h2>
                <img className="Album__image" src={this.props._embedded["wp:featuredmedia"][0].source_url} alt={this.props.title.rendered + ' Cover'} />
                <span className="Album__description" dangerouslySetInnerHTML={{__html: this.props.acf.description}}/><br />
                {(this.links)
                    ? <div className="Album__links">
                        {this.links.map((v, i) => this.processLink(v, i))}
                      </div>
                    : null}

            </div>
        );
    }
}