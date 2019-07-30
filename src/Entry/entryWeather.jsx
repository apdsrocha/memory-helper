import React, { Component } from 'react'

import Thunderstom from '../assets/img/thunderstorm.svg'
import Drizzle from '../assets/img/drizzle.svg'
import Rain from '../assets/img/rain.svg'
import Snow from '../assets/img/snow.svg'
import Tornado from '../assets/img/tornado.svg'
import Clear from '../assets/img/clear.svg'
import Clouds from '../assets/img/cloud.svg'
import Else from '../assets/img/else.svg'

class EntryWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temperature: '',
            countryId: '',
            condition: '',
            icon: '',
            error: null,
            location: this.props.location,
            userLat: this.props.userLat,
            userLong: this.props.userLong
        };
    }

    componentWillMount() {
    const KEY = 'YOUR KEY'
    const ADRESSBYLATLONG = `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.userLat}&lon=${this.props.userLong}&units=metric&APPID=${KEY}`
    const ADDRESSBYCITY = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&APPID=${KEY}`
    const FETCHCALL = this.props.userLat && this.props.userLong ? ADRESSBYLATLONG : ADDRESSBYCITY
        fetch( FETCHCALL )
        .then(results => {
            if (!results.ok) {
                throw Error(results.statusText);
            }
            return results.json();
        }).then(data => {
            let city = data.name
            let temperature = data.main.temp
            let countryId = data.sys.country
            let condition = data.weather[0]['main']

            this.setState({city: city});
            this.setState({temperature: temperature});
            this.setState({countryId: countryId});
            this.setState({condition: condition});

        }).catch((error) => {
                this.setState({error: error});
        });
    }
    
render() {
    return ( 
        <div>
            { this.state.error !== null ? <h4>Invalid city, try again.</h4> : 
            <div className="weather"> 
            <div className="img-icon">
            {(() => {
                switch(this.state.condition) {
                case 'Thunderstorm':
                    return <img alt="icon representing thunderstorms" src={Thunderstom} />;
                case 'Drizzle':
                    return <img alt="icon representing drizzle"src={Drizzle} />;
                case 'Rain':
                    return <img alt="icon representing rain"src={Rain} />;
                case 'Snow':
                    return <img alt="icon representing snow"src={Snow} />;
                case 'Tornado':
                    return <img alt="icon representing tornado"src={Tornado} />;
                case 'Clear':
                    return <img alt="icon representing clear skies"src={Clear} />;
                case 'Clouds':
                    return <img alt="icon representing cloudy weather"src={Clouds} />;
                default:
                    return <img alt="icon representing weather"src={Else} />;;
                }
            })()}
            </div>
            <p className="temperature">{Math.round(this.state.temperature)} °C</p>
            <p className="city">{this.state.city} - {this.state.countryId}</p>
            </div>
            }
        </div>

        )
    }
}

export default EntryWeather