/** @jsx React.DOM */
var PersonalInfo = React.createClass({
  dealWithSubmit: function() {
    var firstName = this.refs.firstName.getDOMNode().value.trim();
    var lastName  = this.refs.lastName.getDOMNode().value.trim();
    var middleInitial  = this.refs.middleInitial.getDOMNode().value.trim();
    var salary  = this.refs.salary.getDOMNode().value.trim();

    this.props.onPersonalInfoSubmit({
      firstName: firstName,
      lastName: lastName,
      middleInitial: middleInitial,
      salary: salary
    })

    return false;
  },
  render: function() {
    return (
      <form className='personalInfo' onSubmit={this.dealWithSubmit}>
        <input type='text' placeholder='First Name' ref='firstName'/>
        <input type='text' placeholder='Last Name' ref='lastName'/>
        <input type='text' placeholder='Middle Initial' ref='middleInitial'/>
        <input type='number' placeholder='Salary!' ref='salary'/>
        <input type='submit' value='Post' />
      </form>
    );
  }
});

