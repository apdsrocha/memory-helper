import React, { Component } from 'react'


class EntryWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temperature: '',
            location: this.props.location
        };
        console.log(this.state.location)
    }
    componentDidMount() {
    const KEY = 'YOUR KEY'
    const ADRESSBYLATLONG = `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.latitude}&lon=${this.props.longitude}&units=metric&APPID=${KEY}`
    const ADDRESSBYCITY = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&APPID=${KEY}`
    const FETCHCALL = this.props.latitude && this.props.longitude ? ADRESSBYLATLONG : ADDRESSBYCITY
        fetch( FETCHCALL )
        .then(results => {
            return results.json();
        }).then(data => {
            let city = data.name
            let temperature = data.main.temp
            this.setState({city: city});
            this.setState({temperature: temperature});
        })
    }
    render() {
        return (
        <div>
            <p>{this.state.city}</p>
            <p>{this.state.temperature}</p>
        </div>
        )
    }
}

export default EntryWeather