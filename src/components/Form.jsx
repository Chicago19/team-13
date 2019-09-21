import React from 'react';

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
				<a href={resource.link} target="_blank">{resource.title}</a>
				<input type="checkbox" name="name" onChange={(e) => checkBoxChange(resource.title, e)} />
				<br/>{resource.description}<br/><br/>
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