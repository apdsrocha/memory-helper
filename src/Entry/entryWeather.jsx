import React, { Component } from 'react'


class EntryWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temperature: '',
            countryId: '',
            icon: '',
            error: null,
            location: this.props.location,
            userLat: this.props.userLat,
            userLong: this.props.userLong
        };
    }
    componentDidMount() {
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
            let icon = data.weather[0]['icon']
            this.setState({city: city});
            this.setState({temperature: temperature});
            this.setState({countryId: countryId});
            this.setState({icon: icon});
        }).catch((error) => {
                this.setState({error: error});
        });
    }
    render() {
        return ( 
        <div>
            { this.state.error !== null ? <h4>Invalid city, try again.</h4> : 
            <div className="weather"> 
            <img alt="icon indicating the weather condition" src={'http://openweathermap.org/img/wn/' + this.state.icon + '@2x.png'} />
            <p className="temperature">{this.state.temperature} °C</p>
            <p className="city">{this.state.city} - {this.state.countryId}</p>
            </div>
            }
        </div>

        )
    }
}

export default EntryWeather