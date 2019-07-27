import React from 'react'

import EntryWeather from '../Entry/entryWeather'


export default props => {
    let locationList = props.locationList || []
    let list = props.list || []
    
    let infoCard = locationList.map((value, index) =>
        <div key={'weather'+index} >
       <p key={'place'+index} className="location-text">{value}</p> <p key={'content'+index} className="description-text">{list[index]}</p>

       <EntryWeather latitude={null} longitude={-52.3594} location={value}/>
       </div>
       );

    return (
        <div className="card">
            {infoCard}
        </div>
    ) 
}
