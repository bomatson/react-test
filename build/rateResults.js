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

