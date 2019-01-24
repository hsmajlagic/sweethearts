import React, { Component } from 'react';
import { Link } from "react-router-dom";
import fetch from "../utils/fetch.js";
import styles from './Result.module.css';

export default class Result extends Component {
  state = {
    url: '',
    alt: ''
  }

  componentDidMount() {
    fetch(this.props.location.state.result).then((res) => {
      if (res) {
        this.setState({
          url: res.url,
          alt: res.alt
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h1 className={styles.resultTitle}>You are a <strong>{this.props.location.state.result}</strong> person!</h1>
        <div className={styles.resultImageContainer}>
          <img className={styles.image} src={this.state.url} alt={this.state.alt} />
        </div>
        <div className={styles.resultFooter}>
          <Link className="button is-danger is-large" to="/">Try again</Link>
        </div>
      </div>
    )
  }
}
