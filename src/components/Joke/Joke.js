import React, {PureComponent} from 'react';

class Joke extends PureComponent {
	render() {
		return <p className="joke">{this.props.text}</p>;
	}
}

export default Joke;