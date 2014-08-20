/** @jsx React.DOM */
var Rate = React.createClass({
  render: function() {
    return (
      <div className="rate">
        <h2 className="rateName">
          {this.props.name}
        </h2>
        {this.props.rate}
      </div>
    );
  }
});

var RateList = React.createClass({
  render: function() {
    var rateNodes = this.props.data.map(function(rate) {
      return (
        <Rate name={rate.name} rate={rate.rate} />
        );
    });
    return (
      <div className="rateList">
        {rateNodes}
      </div>
    );
  }
});

var RateForm = React.createClass({
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
      <form className='rateForm' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='First Name' ref='first'/>
        <input type='text' placeholder='Last Name' ref='last'/>
        <input type='submit' value='Post' />
      </form>
    );
  }
});

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
  <BorrowerFunnel url='http://localhost:4567/apply' pollInterval={2000}/>,
  document.getElementById('funnel')
);
