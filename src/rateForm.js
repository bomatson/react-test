/** @jsx React.DOM */
var RateForm = React.createClass({
  handleSubmit: function() {
    var amount = this.refs.amount.getDOMNode().value.trim();
    var purpose  = this.refs.purpose.getDOMNode().value.trim();
    var creditScore  = this.refs.creditScore.getDOMNode().value.trim();

    this.props.onRateSubmit({amount: amount, purpose: purpose, creditScore: creditScore})

    return false;
  },
  render: function() {
    return (
      <form className='rateForm' onSubmit={this.handleSubmit}>
        <input type='number' placeholder='Loan Amount' ref='amount'/>
        <input type='text' placeholder='Loan Purpose' ref='purpose'/>
        <input type='text' placeholder='Credit Score' ref='creditScore'/>
        <input type='submit' value='Post' />
      </form>
    );
  }
});

