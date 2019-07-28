import React, { Component } from 'react'


class EntryWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temperature: '',
            countryId: '',
            icon: '',
            condition: '',
            location: this.props.location,
            userLat: this.props.userLat,
            userLong: this.props.userLong
        };
    }
    componentDidMount() {
    const KEY = 'ab4799176cd5cf774957846b3fde04b1'
    const ADRESSBYLATLONG = `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.userLat}&lon=${this.props.userLong}&units=metric&APPID=${KEY}`
    const ADDRESSBYCITY = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&APPID=${KEY}`
    const FETCHCALL = this.props.userLat && this.props.userLong ? ADRESSBYLATLONG : ADDRESSBYCITY
        fetch( FETCHCALL )
        .then(results => {
            return results.json();
        }).then(data => {
            let city = data.name
            let temperature = data.main.temp
            let countryId = data.sys.country
            let icon = data.weather[0]['icon']
            let condition = data.weather[0]['main']
            this.setState({city: city});
            this.setState({icon: icon});
            this.setState({temperature: Math.round(temperature)});
            this.setState({countryId: countryId});
        })
    }
    render() {
        return (
        <div>
            <p>{this.state.city} - {this.state.countryId}</p>
            <img src={'http://openweathermap.org/img/wn/' + this.state.icon + '.png'} />
            <p>{this.state.condition}</p>
            <p>{this.state.temperature} °C</p>
        </div>
        )
    }
}

export default EntryWeather