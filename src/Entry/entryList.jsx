import React from 'react'

import EntryWeather from '../Entry/entryWeather'

<<<<<<< HEAD
let time = Moment().format('LLL')

=======
>>>>>>> parent of 40a1388... added moments.js and frozen-moment library to add the date in the entries created
export default props => {
    let locationList = props.locationList || []
    let list = props.list || []
    
    let infoCard = locationList.map((value, index) =>
<<<<<<< HEAD
        <div className="card" key={'card'+index}>
            <EntryWeather userLat={props.userLat} userLong={props.userLong} location={value}/>
            {console.log({value})}
            <div className="description-text">
                <p key={'content'+index} className="description-text">{list[index]}</p>
                <p>{frozenTime.slice(0, -17)}</p>
            </div>
=======
        <div key={'weather'+index} >
       <p key={'place'+index} className="location-text">{value}</p> <p key={'content'+index} className="description-text">{list[index]}</p>

       <EntryWeather userLat={props.userLat} userLong={props.userLong} location={value}/>
>>>>>>> parent of 40a1388... added moments.js and frozen-moment library to add the date in the entries created
       </div>
       );

    return (
        <div>
            {infoCard}
        </div>
    ) 
}
