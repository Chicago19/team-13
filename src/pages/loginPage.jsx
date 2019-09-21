import React from 'react';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';
import logo from './images/ccaclogo.jpg';
import { Image } from 'react-bootstrap';
import './css/loginPage.css';




export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value != 'password') {
      this.props.history.push('/');
    } else {
      this.props.history.push('/claireslittyreactpage');
    }
  }

  render() {
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
          {/* #b256d8 */}
          <Image src={logo} style={{width:'30%'}} roundedCircle/>

          <form onSubmit={this.handleSubmit}>
            <label>
              Password:
              <input type="password" value={this.state.value} onChange={this.handleChange} />
            </label>

            <Button variant="primary" input type="submit" value="Submit" size="sm">Submit</Button>

          </form>
      </div>
    );
  }
}
