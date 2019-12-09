import React, {Component} from 'react';

class Button extends Component {
	shouldComponentUpdate() {
		return false;
	};

	render() {
		return (
			<button onClick={this.props.onClick} className="btn btn-info">{this.props.children}</button>
		);
	}
}

export default Button;