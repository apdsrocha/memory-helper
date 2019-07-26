import React from 'react'

export default props => {
    let locationList = props.locationList || []
    let list = props.list || []
    
    
    let card = locationList.map((value, index) =>
       [<p className="location-text">{value}</p>, <p className="description-text">{list[index]}</p>]
    );

    return (
        <div className="card">
            {card}
        </div>
    ) 
}
