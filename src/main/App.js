import React, { Component } from 'react';

import Entry from '../Entry/entry'
import LocationInfo from '../Entry/locationInfo'
import Header from '../Header/header'

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
        <div>
          <Header />
          <Entry userLat={this.state.userLat} userLong={this.state.userLong} />
          <LocationInfo handleLocation={this.handleLocation}/>
        </div>
      )
    }
 }