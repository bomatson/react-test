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

