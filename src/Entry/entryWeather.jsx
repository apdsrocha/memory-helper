import React, { Component } from 'react'


class EntryWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temperature: '',
            countryId: '',
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
            return results.json();
        }).then(data => {
            let city = data.name
            let temperature = data.main.temp
            let countryId = data.sys.country
            this.setState({city: city});
            this.setState({temperature: temperature});
            this.setState({countryId: countryId});
        })
    }
    render() {
        return (
        <div>
            <p>{this.state.city} - {this.state.countryId}</p>
            <p>{this.state.temperature}</p>
        </div>
        )
    }
}

export default EntryWeather