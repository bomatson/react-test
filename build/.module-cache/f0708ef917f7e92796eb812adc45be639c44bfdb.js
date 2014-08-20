/** @jsx React.DOM */
var data = [
{author: "Pete Hunt", text: "This is one comment"},
{author: "Jordan Walke", text: "This is *another* comment"}
];

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
    return (
      React.DOM.div({className: "commentList"}, 
        "// data passed from a parent to the child is called a prop", 
        Comment({author: "Pete Hunt"}, "This is one comment"), 
        Comment({author: "Jordan Walke"}, "This is *another* comment")
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
  render: function() {
    return (
      React.DOM.div({className: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
        React.DOM.h1(null, " Comments "), 
        CommentList({data: this.props.data}), 
        CommentForm(null)
      )
    );
  }
});

React.renderComponent(
  CommentBox({data: data}),
  document.getElementById('content')
);

