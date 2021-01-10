import React, { Component } from 'react';
import { IoIosMail } from 'react-icons/io';

export class Email extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
		};
	}


	handleSubmit = (event) => {
		if (this.state.email !== '') {
			this.props.onSubmit(event, this.state.email);
		}
	};

	handleChange = (event) => {
		this.setState({
			email: event.target.value,
		});
		this.props.handleInput(Object.keys(this.state)[0], this.state.email);
	}

	render() {
		return (
			<div className="flex flex-column items-right m-1">
				<IoIosMail className="text-xl m-2" />
					<input
						className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
						type="email"
						name="email"
						placeholder="Your email here"
						value={this.state.email}
						onChange={this.handleChange}
					></input>
			</div>
		);
	}
}

export default Email;
