import React, { Component } from 'react';
import { Link } from "react-router-dom";
import fetch from "../utils/fetch.js";
import image from "../utils/image.js";
import styles from './Result.module.css';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.shareResult = this.shareResult.bind(this)
  }

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

  shareResult() {
    image(this.state.url, (dataUrl) => {
      window.FBInstant.shareAsync({
        intent: "SHARE",
        image: dataUrl,
        text: `I just played this game and it says I'm a ${this.props.location.state.result} person!`,
        data: { myReplayData: '...' },
      })
    })
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>You are a <strong>{this.props.location.state.result}</strong> person!</h1>
        <div className={styles.container}>
          <img className={styles.image} src={this.state.url} alt={this.state.alt} />
        </div>
        <div className={styles.footer}>
          <Link className="button is-danger is-large" to="/">Try again</Link>
          <button className="button is-link is-large" onClick={this.shareResult}>Share on FB</button>
        </div>
      </div>
    )
  }
}
