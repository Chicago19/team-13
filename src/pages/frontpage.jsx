import React from 'react';

class FrontPage extends React.Component{
  render(){
    return(
      <div>
      <button class="btn btn-primary" type="submit"><a href="/games">Child</a></button>
      <button class="btn btn-primary" type="submit"><a href="/login">Adult</a></button>
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
