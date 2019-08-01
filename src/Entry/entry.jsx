import React, { Component } from 'react'

import EntryForm from './entryForm'
import EntryList from './entryList'

export default class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            description: '', 
            location: '', 
            list: [], 
            locationList: [], 
            userLat: '', 
            userLong: ''}

        this.handleDescription = this.handleDescription.bind(this)
        this.handleLocation = this.handleLocation.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.cleanInput = this.cleanInput.bind(this)
    }

    handleDescription(e) {
         this.setState({...this.state, description: e.target.value})
    }
    handleLocation(e) {
        this.setState({...this.state, location: e.target.value })
   }
    handleAdd() {
        let description = this.state.description
        let location = this.state.location
        this.setState.list = this.state.list.push(description)
        this.setState.locationList = this.state.locationList.push(location)
        this.cleanInput()
    }
    cleanInput() {
        this.setState({ description: '', location: ''});
    }
    
    render() {
        return (
            <div className="form_and_entries">
                <div className="form__box">
                <EntryForm description={this.state.description}
                location={this.state.location}
                handleDescription={this.handleDescription}
                handleLocation={this.handleLocation}
                userLat={this.props.userLat}
                userLong={this.props.userLong}
                 />
                    <div className="btn--align-center">
                        <button onClick={this.handleAdd} className="btn--blue">Save it</button>
                    </div>
                </div>
                <div className="entries__list">
                    <h2 className="entries__title">{this.state.list.length !== 0 ? 'Remember when...' : ''}</h2>
                    <EntryList list={this.state.list} 
                    locationList={this.state.locationList} 
                    location={this.state.location}
                    userLat={this.props.userLat}
                    userLong={this.props.userLong}
                    />
                </div>
            </div>
        )
    }
}