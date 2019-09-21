import React from 'react';
import Button from 'react-bootstrap/Button'

const BackButton = ({urlRoute}) => {
	
	return (
		<div>
		<a href={urlRoute}>
			<Button variant="success">Go Back</Button>
		</a>
		</div>
	);
}

export default BackButton;