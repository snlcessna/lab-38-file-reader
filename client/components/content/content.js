import React from 'react';
import ReactDom from 'react-dom';
import Update from './update';
import Photo from './photo';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSignout = (e) => {
        event.preventDefault();
        this.props.actions.signout();
    }

    render() {
        return (
            <div>
              <Update update={this.props.actions.update} error={this.props.actions.error} />
                <button onClick={this.handleSignout}>Sign Out</button>
                <Photo />
            </div>
        )
    }
}

module.exports = Content;
