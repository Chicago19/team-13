import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';


const renderCards = (title, props, link, checkBoxChange) =>{
	return(
		<Card>
			<Card.Header>
				<a>{title}</a>
				&nbsp;
				<input type="checkbox" onChange={(e) => checkBoxChange(title, e)} />	
			</Card.Header>
			<Card.Body>
				<Card.Text>
				{props}
				</Card.Text>
				<Button variant="primary" href={link} target="_blank"> Read More</Button>
			</Card.Body>
		</Card>
	)
}


const Form = ({data, checkBoxChange}) => {
//{/*<Link key={i} articleInfo={article} />*/}
	if (data.length === 0){
		return (
			<h1 >No resources available!</h1>
		);
	}
	const form = data.map((resource, i) => {
		return (
			<label key={i}>
				<br/>{renderCards(resource.title ,resource.description, resource.link, checkBoxChange)}<br/><br/>
			</label>
		);
	});

	return (
		<div>
			{form}
		</div>
	);
}

export default Form;