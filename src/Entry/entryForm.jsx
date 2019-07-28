import React from 'react'

export default props => (

 <div role="form" className="entryForm">
    { props.userLat && props.userLong ? 
    '' : 
    <div className="label-input--align">
      <label className="label--text">Here's where:</label>
      <input id="location" placeholder="City?" onChange={props.handleLocation} value={props.location}>
      </input>
    </div>
    }
    <div className="label-input--align">
      <label className="label--text">Here's what:</label>
      <textarea id="description" type="text" placeholder="" onChange={props.handleDescription} value={props.description}>
      </textarea>
    </div>
 </div>   
)