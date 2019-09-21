import React from 'react';
import BackButton from '../components/BackButton.jsx'
import {renderNavBar} from '../global_components/header.jsx';

import './css/surveys.css';

class SurveyFrame extends React.Component{
    render(){
        return(
          <>
          <div> {renderNavBar("Surveys")}</div>
            <div>
                <iframe src ="https://qtrial2019q3az1.az1.qualtrics.com/jfe/form/SV_9XgDI55w10vRKLP" height="800px" width="600px"></iframe>

            </div></>
        );
    }
}

const Surveys = () => {

	return (
        <div className = "surveys">

            <SurveyFrame className="element" />
            <BackButton className="element" urlRoute="/adult-main"/>
        </div>
	);
}


export default Surveys;
