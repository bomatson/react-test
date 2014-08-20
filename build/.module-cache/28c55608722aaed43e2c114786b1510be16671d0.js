/** @jsx React.DOM */
var Comment = React.createClass({displayName: 'Comment',
  render: function() {
    return (
      React.DOM.div({className: "comment"}, 
        React.DOM.h2({className: "commentAuthor"}, 
          this.props.author
        ), 
        this.props.children
      )
    );
  }
});
var CommentList = React.createClass({displayName: 'CommentList',
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        Comment({author: comment.author}, 
          comment.text
        )
        );
    });
    return (
      React.DOM.div({className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return (
      React.DOM.div({className: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});
var CommentBox = React.createClass({displayName: 'CommentBox',
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      React.DOM.div({className: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
        React.DOM.h1(null, " Comments "), 
        CommentList({data: this.state.data}), 
        CommentForm(null)
      )
    );
  }
});

React.renderComponent(
  CommentBox({url: "comments.json"}),
  document.getElementById('content')
);

