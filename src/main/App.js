import React, { Component } from 'react';

import './App.css';
import Entry from '../Entry/entry'
import LocationInfo from '../Entry/locationInfo'

export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          userLat: null,
          userLong: null,
      }

      this.handleLocation = this.handleLocation.bind(this)
    };

handleLocation(latitude, longitude) {
  this.setState({ userLat: latitude, userLong: longitude});
}

 render() {
   return (
      <div className="container">
        <Entry userLat={this.state.userLat} userLong={this.state.userLong} />
        <LocationInfo handleLocation={this.handleLocation}/>
      </div>
      )
    }
 }