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
		let checkedResources = [];
		jsonData.forEach(element => {
			if (this.state[element.title] === true){
				checkedResources.push(element);
			}
		});

		if (this.emailAddress !== "" && checkedResources.length > 0){
			console.log(this.emailAddress);
			console.log(checkedResources);

			fetch('API_ENDPOINT', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
    				'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: this.emailAddress,
					resources: checkedResources,
				})
			})
		}

	}

	textChange(event) {
		this.emailAddress = event.target.value;
	}

	
	render(){
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