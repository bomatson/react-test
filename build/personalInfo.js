/** @jsx React.DOM */
var PersonalInfo = React.createClass({displayName: 'PersonalInfo',
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
      React.DOM.form({className: "personalInfo", onSubmit: this.dealWithSubmit}, 
        React.DOM.input({type: "text", placeholder: "First Name", ref: "firstName"}), 
        React.DOM.input({type: "text", placeholder: "Last Name", ref: "lastName"}), 
        React.DOM.input({type: "text", placeholder: "Middle Initial", ref: "middleInitial"}), 
        React.DOM.input({type: "number", placeholder: "Salary!", ref: "salary"}), 
        React.DOM.input({type: "submit", value: "Post"})
      )
    );
  }
});

