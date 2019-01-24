import React, { Component } from 'react';
import styles from './Home.module.css';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.showResult = this.showResult.bind(this)
    this.stateChange = this.stateChange.bind(this)
  }

  state = {
    firstName: '',
    gender: 'unspecified',
    eyeColor: 'unspecified',
    age: 22
  }

  stateChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showResult() {
    this.props.history.push('/result', { id: 7, color: 'green' })
  }

  render() {
    return (
      <div className={styles.root}>
        <div className="field">
          <label className="label">Your first name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter your first name" name="firstName" value={this.state.firstName} onChange={this.stateChange} />
          </div>
        </div>
        <div className="field">
          <label className="label">Gender</label>
          <div className="control">
            <div className="select">
              <select name="gender" value={this.state.gender} onChange={this.stateChange}>
                <option value='unspecified'>Unspecified</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Your eye color</label>
          <div className="control">
            <div className="select">
              <select name="eyeColor" value={this.state.eyeColor} onChange={this.stateChange}>
                <option>Other</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Brown</option>
                <option>Black</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">How old are you: <span>{this.state.age}</span></label>
          <div>
            <input type="range" name="age" min="1" max="110" step="1" value={this.state.age} onChange={this.stateChange} style={{ width: '100%'}} />
          </div>
        </div>
        <div className="field">
          <label className="label">Where do you live?</label>
          <div className="control">
            <label className="radio">
              <input type="radio" name="place" />
              Apartment
            </label>
            <label className="radio">
              <input type="radio" name="place" />
              House
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" onClick={this.showResult}>Tell me!</button>
          </div>
        </div>
      </div>
    );
  }
}
