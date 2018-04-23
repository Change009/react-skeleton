var React = require('react');
var CreateReactClass = require('create-react-class');

var ListItem = CreateReactClass({
	render: function() {
		return (
			<li>
				<h4>{this.props.ingredient}</h4>
			</li>
		);
	}
});

module.exports = ListItem;
