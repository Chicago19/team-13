import React from 'react';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';
import './css/login.css';
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Password:
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>

        <Button variant="primary" input type="submit" value="Submit" size="sm">Submit</Button>

      </form>
    );
  }
}
