import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <Link className="button is-primary" to="/result">About</Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  firstName: PropTypes.string
}

export default Home
