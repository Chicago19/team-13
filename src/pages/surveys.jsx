import React from 'react';

class SurveyFrame extends React.Component{
    render(){
        return(
            <div>
                <iframe src ="https://qtrial2019q3az1.az1.qualtrics.com/jfe/form/SV_9XgDI55w10vRKLP" height="800px" width="600px"></iframe>
            
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
        </div>
	);
}


export default Surveys;
