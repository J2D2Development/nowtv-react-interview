import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from './store';

import { getChatLog, getMembersInfo } from './service';
import { compareTime } from './Utilities/utilities';

import { Message } from './Components/Message';
import { HoverDiv } from './Components/HoverDiv';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      members: [],
      showMember: false,
      memberHovered: {}
    };

    props.getChatLog().then(response => {
      this.setState({ messages: response.value });
    });

    props.getMembersInfo().then(response => {
      this.setState({ members: response.value });
    });

    // store.subscribe(() => {
    //   this.setState({ messages: store.getState() });
    // });

    // store.subscribe(() => {
    //   this.setState({ messages: store.getState() });
    // });
  }

  displayMessages = (messages) => {
    return messages.map(message => {
        return <Message 
              key={message.id}
              messageInfo={message} 
              mouseEnterHandler={this.mouseEnterHandler}
              mouseLeaveHandler={this.mouseLeaveHandler}
            />
      });
  }

  mouseEnterHandler = (userId) => {
    if(userId === this.state.memberHovered.userId) {
      return;
    }
    const hovered = this.state.members.find(member => member.id === userId);
    this.setState({
      memberHovered: hovered,
      showMember: true
    });
  }

  mouseLeaveHandler = () => {
    this.setState({
      showMember: false
    });
  }

  render() {
    return (
      <div className="outer-wrapper">
        <div>
          {
            this.state.messages.length > 0 ?
              this.displayMessages(this.state.messages) :
              'Messages loading...'
          }
        </div>
        <div className="active-member">
          {
            this.state.showMember && this.state.memberHovered.email ?
              <HoverDiv
                email={this.state.memberHovered.email}
                avatar={this.state.memberHovered.avatar}
              /> :
              ''
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, getMembersInfo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
