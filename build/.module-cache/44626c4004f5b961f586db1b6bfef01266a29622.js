/** @jsx React.DOM */
var Rate = React.createClass({displayName: 'Rate',
  render: function() {
    return (
      React.DOM.div({className: "rate"}, 
        React.DOM.h2({className: "rateName"}, 
          this.props.name
        ), 
        this.props.rate
      )
    );
  }
});

var RateList = React.createClass({displayName: 'RateList',
  render: function() {
    var rateNodes = this.props.data.map(function(rate) {
      debugger
      return (
        Rate({name: rate.name, rate: rate.rate})
        );
    });
    return (
      React.DOM.div({className: "rateList"}, 
        rateNodes
      )
    );
  }
});

var RateForm = React.createClass({displayName: 'RateForm',
  handleSubmit: function() {
    var first = this.refs.first.getDOMNode().value.trim();
    var last = this.refs.last.getDOMNode().value.trim();

    this.props.onRateSubmit({firstName: first, lastName: last})

    this.refs.first.getDOMNode().value = '';
    this.refs.last.getDOMNode().value = '';
    return false;
  },
  render: function() {
    return (
      React.DOM.form({class: "rateForm", onSubmit: this.handleSubmit}, 
        React.DOM.input({type: "text", placeholder: "First Name", ref: "first"}), 
        React.DOM.input({type: "text", placeholder: "Last Name", ref: "last"}), 
        React.DOM.input({type: "submit", value: "Post"})
      )
    );
  }
});

var CommentBox = React.createClass({displayName: 'CommentBox',
  getInitialState: function() {
    return {data: []};
  },
  handleRateSubmit: function(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      React.DOM.div({className: "commentBox"}, 
        React.DOM.h1(null, " Get your Rate! "), 
        RateForm({onRateSubmit: this.handleRateSubmit}), 
        RateList({data: this.state.data})
      )
    );
  }
});

React.renderComponent(
  CommentBox({url: "http://localhost:4567/apply", pollInterval: 2000}),
  document.getElementById('content')
);

