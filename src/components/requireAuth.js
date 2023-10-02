import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.saveComment(this.state.comment);
      this.setState({ comment: '' });
    };

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
