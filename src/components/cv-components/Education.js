import React, { Component } from 'react';
import { MdSchool } from 'react-icons/md';
import EducationBlock from './EducationBlock';
import { IoMdAddCircle } from 'react-icons/io';

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			educationList: [],
		};
	}

	addEducation = () => {};

	handleInputChange(event) {
		let value = event.target.value;
		let key = event.target.name;
		this.setState({
			[key]: value,
		});
		console.log(this.state);
	}

	render() {
		return (
			<div className="row-start-3 row-end-auto row-auto col-start-1 col-end-11">
				<div className="flex flex-col items-center">
					<div>
						<MdSchool className="inline w-12 h-12 m-2"></MdSchool>
						<h1 className="inline align-middle text-3xl font-bold">
							Education
						</h1>
					</div>

					<hr class="border-0 bg-gray-500 text-gray-500 h-4 m-3"></hr>
					<EducationBlock handleInput="{handleInputChange}"></EducationBlock>
					<button
						onClick={this.addEducation}
						className="transform border border-gray-200 bg-gray-200 text-gray-700 shadow rounded-md px-3 py-2 m-2 transition duration-150 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline active:scale-95"
					>
						<IoMdAddCircle className="text-2xl inline align-middle" /> Add More
					</button>
				</div>
			</div>
		);
	}
}

export default Education;
