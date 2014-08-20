/** @jsx React.DOM */
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

