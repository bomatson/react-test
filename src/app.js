/** @jsx React.DOM */
var BorrowerFunnel = React.createClass({
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
        // a router would typically handle the behavior below:

        var page;
        switch (this.state.page) {
          case 1:
            page = <RateForm onRateSubmit={this.nextStep}/>
            break;
          case 2:
            page = <PersonalInfo onPersonalInfoSubmit={this.handleRateSubmit}/>
            break;
          case 3:
            page = <RateList data={this.state.data} />
            break;
        }
    return (
      <div className="borrowerFunnel">
        <h1> Get your Rate! </h1>
        { page }
      </div>
    );
  }
});

React.renderComponent(
  <BorrowerFunnel url='http://localhost:4567/apply'/>,
  document.getElementById('funnel')
);
