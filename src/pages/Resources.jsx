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
		this.emailAddress = "";
	}

	checkBoxChange = (title, event) => {
		this.setState({ [title]: !this.state[title]})
	}

	sendEmail = () => {

	}

	textChange(event) {
		this.emailAddress = event.target.value;
	}

	
	render(){
		{console.log(this.state)}
		return (
		<div >
			<h1>Resources</h1>
			<Form data={jsonData} checkBoxChange={this.checkBoxChange}></Form>

			<input type="text" onChange={this.textChange.bind(this)}/>
			<input type="submit" value="Submit" onClick={this.sendEmail}/>
		</div>
		);
	}
}

export default Resources;