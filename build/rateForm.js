/** @jsx React.DOM */
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
      React.DOM.form({className: "rateForm", onSubmit: this.handleSubmit}, 
        React.DOM.input({type: "text", placeholder: "First Name", ref: "first"}), 
        React.DOM.input({type: "text", placeholder: "Last Name", ref: "last"}), 
        React.DOM.input({type: "submit", value: "Post"})
      )
    );
  }
});

