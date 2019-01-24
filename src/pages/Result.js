import React from 'react';
import { Link } from "react-router-dom";

const Result = (props) => {
  return (
    <div>
      <b>{props.location.state.color}</b>
      <div>
        <Link className="button is-danger" to="/">Try again</Link>
      </div>
    </div>
  )
}

Result.propTypes = {

}

export default Result
