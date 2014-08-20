/** @jsx React.DOM */
var BorrowerFunnel = React.createClass({
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
      <div className="commentBox">
        <h1> Get your Rate! </h1>
        <RateForm onRateSubmit={this.handleRateSubmit}/>
        <RateList data={this.state.data} />
      </div>
    );
  }
});

React.renderComponent(
  <BorrowerFunnel url='http://localhost:4567/apply'/>,
  document.getElementById('funnel')
);
