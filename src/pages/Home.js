import React, { Component } from 'react';
import styles from './Home.module.css';
import Game from '../utils/game.js';
import constants from '../utils/constants.js'

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
    age: 23,
    place: '',
    personality: ''
  }

  stateChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showResult() {
    let game = new Game(this.state);
    this.props.history.push('/result', { data: this.state, result: game.calculateResult() })
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
                <option value='unspecified'>unspecified</option>
                <option className="normalCase" value={constants.FORM.GENDER.MALE}>{constants.FORM.GENDER.MALE}</option>
                <option className="normalCase" value={constants.FORM.GENDER.FEMALE}>{constants.FORM.GENDER.FEMALE}</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Your eye color</label>
          <div className="control">
            <div className="select">
              <select name="eyeColor" value={this.state.eyeColor} onChange={this.stateChange}>
                <option value="other">other</option>
                <option className="normalCase" value={constants.FORM.COLORS.BLUE}>{constants.FORM.COLORS.BLUE}</option>
                <option className="normalCase" value={constants.FORM.COLORS.GREEN}>{constants.FORM.COLORS.GREEN}</option>
                <option className="normalCase" value={constants.FORM.COLORS.BROWN}>{constants.FORM.COLORS.BROWN}</option>
                <option className="normalCase" value={constants.FORM.COLORS.BLACK}>{constants.FORM.COLORS.BLACK}</option>
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
              <input type="radio" name="place" value={constants.FORM.PLACES.APARTMENT} checked={this.state.place === constants.FORM.PLACES.APARTMENT} onChange={this.stateChange} />
              <span className='normalCase'>{constants.FORM.PLACES.APARTMENT}</span>
            </label>
            <label className="radio">
              <input type="radio" name="place" value={constants.FORM.PLACES.HOUSE} checked={this.state.place === constants.FORM.PLACES.HOUSE} onChange={this.stateChange} />
              <span className='normalCase'>{constants.FORM.PLACES.HOUSE}</span>
            </label>
          </div>
        </div>
        <div className="field">
          <label className="label">What is your personality?</label>
          <div className="control">
            <label className="radio">
              <input type="radio" name="personality" value={constants.FORM.PERSONALITIES.INTROVERT} checked={this.state.personality === constants.FORM.PERSONALITIES.INTROVERT} onChange={this.stateChange} />
              <span className='normalCase'>{constants.FORM.PERSONALITIES.INTROVERT}</span>
            </label>
            <label className="radio">
              <input type="radio" name="personality" value={constants.FORM.PERSONALITIES.EXTROVERT} checked={this.state.personality === constants.FORM.PERSONALITIES.EXTROVERT} onChange={this.stateChange} />
              <span className='normalCase'>{constants.FORM.PERSONALITIES.EXTROVERT}</span>
            </label>
          </div>
        </div>
        <div className="field">
          <div className={`control ${styles.button}`}>
            <button className="button is-primary" onClick={this.showResult}>Tell me!</button>
          </div>
        </div>
      </div>
    );
  }
}
