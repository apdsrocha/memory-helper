import React from 'react'
import Moment from 'moment'
import freeze from 'frozen-moment'

import EntryWeather from '../Entry/entryWeather'


let time = Moment().format('LLL')



export default props => {
    let locationList = props.locationList || []
    let list = props.list || []
    let frozenTime = String(freeze(time))
    let infoCard = locationList.map((value, index) =>
        <div key={'card'+index} >
     <p key={'content'+index} className="description-text">{list[index]}</p>
       <EntryWeather userLat={props.userLat} userLong={props.userLong} location={value}/>
       <p>{frozenTime.slice(0, -17)}</p>
       </div>
       );

    return (
        <div className="card">
            {infoCard}
        </div>
    ) 
}
