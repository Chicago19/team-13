import React from 'react';
import jsonData from '../uploads/resources.json'
import Form from '../components/Form.jsx'

class Resources extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
		jsonData.forEach(element => {
		 	this.state[element.title] = false;
		 });
	}

	checkBoxChange = (title, event) => {
		console.log(event);
		console.log(title);
		this.setState({ [title]: !this.state[title]})
	}

	sendEmail = () => {
		
	}
	
	render(){
		{console.log(this.state)}
		return (
		<div >
			<h1>Resources</h1>
			<Form data={jsonData} checkBoxChange={this.checkBoxChange}></Form>

			<input type="text" />
			<input type="submit" value="Submit" onClick={this.sendEmail}/>
		</div>
		);
	}
}

export default Resources;