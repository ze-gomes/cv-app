import React from 'react';

function NameInput({ value, handleInput, previewMode }) {
	if (!previewMode) {
		return (
			<div className="row-start-1 row-span-1 py-2">
				<input
					className="w-full text-4xl p-2 rounded border font-medium bg-gray-100  block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
					type="text"
					placeholder="Input your name here"
					value={value}
					onChange={handleInput}
					name="name"
					required
				></input>
			</div>
		);
	} else {
		return (
			<div className="row-start-1 row-span-1 py-2">
				<input
					className="appearance-none bg-white w-full text-4xl font-medium p-2 rounded block"
					type="text"
					placeholder="Input your name here"
					value={value}
					onChange={handleInput}
					name="name"
					disabled
				></input>
			</div>
		);
	}
}

export default NameInput;
