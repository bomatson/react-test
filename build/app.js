/** @jsx React.DOM */
var BorrowerFunnel = React.createClass({displayName: 'BorrowerFunnel',
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
  BorrowerFunnel({url: "http://localhost:4567/apply"}),
  document.getElementById('funnel')
);
