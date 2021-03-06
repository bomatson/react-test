/** @jsx React.DOM */
var BorrowerFunnel = React.createClass({displayName: 'BorrowerFunnel',
  getInitialState: function() {
    return {page: 1};
  },
  handleRateSubmit: function(rateInfo) {
    var totalInfo = $.extend(this.state.data, rateInfo)

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: totalInfo,
      success: function(data) {
        this.setState({data: data, page: 3});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  nextStep: function(loanInfo) {
    this.setState({
      data: {
        amount: loanInfo.amount,
        purpose: loanInfo.purpose,
        creditScore: loanInfo.creditScore
      },
      page: 2
    });
  },
  render: function() {
        var page;
        switch (this.state.page) {
          case 1:
            page = RateForm({onRateSubmit: this.nextStep})
            break;
          case 2:
            page = PersonalInfo({onPersonalInfoSubmit: this.handleRateSubmit})
            break;
          case 3:
            page = RateList({data: this.state.data})
            break;
        }
    return (
      React.DOM.div({className: "borrowerFunnel"}, 
        React.DOM.h1(null, " Get your Rate! "), 
        page 
      )
    );
  }
});

React.renderComponent(
  BorrowerFunnel({url: "http://localhost:4567/apply"}),
  document.getElementById('funnel')
);
