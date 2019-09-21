import React from 'react';

class FrontPage extends React.Component{
  render(){
    return(
      <div>
      <button class="btn btn-primary" type="submit">Button</button>
      <button class="btn btn-primary" type="submit">Button</button>
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
