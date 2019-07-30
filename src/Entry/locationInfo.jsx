import React, { useEffect } from 'react'
import { usePosition } from 'use-position'


export default (props) => {
    const { latitude, longitude } = usePosition(true);

    useEffect(() => {
        props.handleLocation(latitude, longitude )
    })
    return (
        <React.Fragment>

        </React.Fragment>
    );
  };
    
