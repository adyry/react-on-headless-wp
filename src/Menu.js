import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
        <a href={this.props.val.url} className="menu__url">
            {this.props.val.name}
        </a>
    );
  }
}

export default Menu;