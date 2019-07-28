import React from 'react'

export default props => (
    <header>
        <div className="header__column">
            <h1 className="header__title">Memory Helper</h1>
            <h2 className="header__subtitle">Keep your memories focused on how you felt.</h2>
        </div>
        <div className="header__img">
            <img alt="illustration of a girl sitting on a cloud with a sun by the left" src={require("../assets/img/header.svg")}></img>
        </div>
    </header>
)