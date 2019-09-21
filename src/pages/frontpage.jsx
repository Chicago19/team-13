import React from 'react';

class FrontPage extends React.Component{
  render(){
    return(
      <div>
      <a href="/games"><button class="btn btn-primary" type="submit">Child</button></a>
      <a href="/login"><button class="btn btn-primary" type="submit">Adult</button></a>
      </div>
      );
  }
}

const Front = () => {
  return (
    <div>
      <FrontPage/>
    </div>
    );
}


export default Front;
