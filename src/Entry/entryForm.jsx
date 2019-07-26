import React from 'react'

export default props => (
 <div role="form" className="entryForm">
    <label>Your current city</label>
    <input id="location" placeholder="Where are you?" onChange={props.handleLocation} value={props.location}>
    </input>
    <label>Your current thoughts</label>
    <input id="description" placeholder="What's on your mind?" onChange={props.handleDescription} value={props.description}>
    </input>
    
 </div>   
)