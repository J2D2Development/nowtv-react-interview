import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from './store';

import getChatLog from './service';
import { compareTime } from './Utilities/utilities';

import { Message } from './Components/Message';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    props.getChatLog().then(response => {
      this.setState({ messages: response.value });
    });

    store.subscribe(() => {
      this.setState({
        messages: store.getState()
      }, () => console.log(this.state));
    });
  }

  displayMessages = (messages) => {
    return messages.map(message => {
      return <Message 
        messageInfo={message} 
        hoverHandler={this.hoverHandler}
      />
    }).sort(compareTime);
  }

  hoverHandler = () => {
    console.log('hovering!');
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        {
          this.state.messages.length > 0 ?
            this.displayMessages(this.state.messages) :
            'Messages loading...'
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
