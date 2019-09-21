import React from 'react';
import BackButton from '../components/BackButton.jsx'

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
                <h1>Surveys</h1>
            </div>
            <SurveyFrame/>
            <BackButton urlRoute="/claireslittyreactpage"/>
        </div>
	);
}


export default Surveys;
