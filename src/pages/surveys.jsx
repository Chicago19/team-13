import React from 'react';
import BackButton from '../components/BackButton.jsx'

import './css/surveys.css';

class SurveyFrame extends React.Component{
    render(){
        return(
            <div>
                <iframe src ="https://www.surveymonkey.com/r/HC3QBQ6" height="800px" width="600px"></iframe>
            
            </div>
        );
    }
}

const Surveys = () => {
	
	return (
        <div className = "surveys">
            <div >
                <h1 className="element">Surveys</h1>
            </div>
            <SurveyFrame className="element" />
            <BackButton className="element" urlRoute="/claireslittyreactpage"/>
        </div>
	);
}


export default Surveys;
