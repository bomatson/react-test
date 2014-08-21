/** @jsx React.DOM */
var RateForm = React.createClass({displayName: 'RateForm',
  handleSubmit: function() {
    var amount = this.refs.amount.getDOMNode().value.trim();
    var purpose  = this.refs.purpose.getDOMNode().value.trim();
    var creditScore  = this.refs.creditScore.getDOMNode().value.trim();

    this.props.onRateSubmit({
      amount: amount,
      purpose: purpose,
      creditScore: creditScore})

    return false;
  },
  render: function() {
    return (
      React.DOM.form({className: "rateForm", onSubmit: this.handleSubmit}, 
        React.DOM.input({type: "number", placeholder: "Loan Amount", ref: "amount"}), 
        React.DOM.input({type: "text", placeholder: "Loan Purpose", ref: "purpose"}), 
        React.DOM.input({type: "text", placeholder: "Credit Score", ref: "creditScore"}), 
        React.DOM.input({type: "submit", value: "Post"})
      )
    );
  }
});

