import React from 'react';
import ccaclogo from './images/ccaclogo.jpg';
class CCACinfo extends React.Component{
    render(){
        return(
            <div>
                <h1>Chicago Children's Advocacy Center</h1>
                <img src ={ccaclogo} />
                <p> description</p>
            </div>
        );
    }
}

class resourcesButton extends React.Component{
    render(){
        return(
            <button >Resources</button>
        );
    }
}

const MainAdultPage = () => {

	return (
        <div className = "mainAdultPage">
            <div >
                <h1>Adult Homepage</h1>
            </div>
            <CCACinfo/>
            <resourcesButton/>
        </div>
	);
}


export default MainAdultPage;
