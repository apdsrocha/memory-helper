import React from 'react'

export default props => (

 <div role="form" className="entryForm">
    { props.userLat && props.userLong ? 
    '' : 
    <div>
      <label>'What's your city?</label>
      <input id="location" placeholder="City?" onChange={props.handleLocation} value={props.location}>
      </input>
    </div>
    }
    
    <label>Your current thoughts</label>
    <input id="description" placeholder="What's on your mind?" onChange={props.handleDescription} value={props.description}>
    </input>
 </div>   
)