import React from 'react';

import '../scss/Project.css';

import ShowImage from './ShowImage'

class Project extends React.Component {
    constructor(props) {
        super(props);
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
                            {(this.props.acf.disptitle)
                                ? this.props.acf.disptitle
                                : this.props.title.rendered}
                        </span>
                        <span className="Project__date">
                        ({(this.props.acf.start)
                            ? <span>{this.props.acf.start} - </span>
                            : ''}
                        {this.props.acf.stop})
                        </span>
                    </div>
                    {(this.props.technologies)
                        ? this.props.techno.map(tech =>
                            <div className="Project__technology" key={tech}>{this.props.technologies[tech]}</div>
                        )
                        : <div className="Project__technology">Loading...</div>}
                    <div className="Project__content" dangerouslySetInnerHTML={{__html: this.props.content.rendered}}/>
                </div>
            </div>
        );
    }
}


export default Project;