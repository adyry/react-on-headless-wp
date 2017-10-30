import React  from 'react';
import {url} from '../_shared'


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {types: null}
        this.getPostTypes();
    }

    getPostTypes() {
        return fetch(`${url}/types`)
            .then(response => response.json())
            .then(json => {
                delete json.attachment;
                delete json.page;
                delete json.post;
                this.setState({types: json});
            });
    }

    render() {
        if (this.state.types) {
            return (
                <div>
                    {Object.keys(this.state.types).map((key, i) => {
                        const item = this.state.types[key];
                        return (
                            <a href={item.slug} className="menu__url" key={i}>
                                {item.name}
                            </a>
                        )})}

                </div>
            )
        } else {
            return 'Loading menu...'
        }
    }
}

export default Menu;
